#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

const WATCH_MODE = process.argv.includes('--watch');

function compileLaTeX(filename) {
  console.log(`\n🔄 Compiling ${filename}...`);
  
  const pdflatex = spawn('pdflatex', ['-interaction=nonstopmode', filename], {
    stdio: 'pipe'
  });

  let output = '';
  
  pdflatex.stdout.on('data', (data) => {
    output += data.toString();
  });

  pdflatex.stderr.on('data', (data) => {
    output += data.toString();
  });

  pdflatex.on('close', (code) => {
    if (code === 0) {
      console.log(`✅ Successfully compiled ${filename}`);
      
      // Run twice for cross-references
      const pdflatex2 = spawn('pdflatex', ['-interaction=nonstopmode', filename], {
        stdio: 'pipe'
      });
      
      pdflatex2.on('close', (code2) => {
        if (code2 === 0) {
          console.log(`📄 PDF generated: ${filename.replace('.tex', '.pdf')}`);
        }
      });
    } else {
      console.error(`❌ Compilation failed for ${filename}`);
      console.error('Error output:');
      console.error(output);
    }
  });
}

function findTexFiles() {
  return fs.readdirSync('.')
    .filter(file => file.endsWith('.tex'))
    .filter(file => fs.statSync(file).isFile());
}

if (WATCH_MODE) {
  console.log('👀 Watching for LaTeX file changes...');
  
  const watcher = chokidar.watch('*.tex', {
    persistent: true,
    ignoreInitial: false
  });

  watcher.on('change', (filename) => {
    compileLaTeX(filename);
  });

  watcher.on('add', (filename) => {
    console.log(`📝 New file detected: ${filename}`);
    compileLaTeX(filename);
  });

} else {
  const texFiles = findTexFiles();
  
  if (texFiles.length === 0) {
    console.log('❌ No .tex files found in current directory');
    process.exit(1);
  }

  texFiles.forEach(file => {
    compileLaTeX(file);
  });
}