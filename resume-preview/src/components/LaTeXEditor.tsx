'use client'

import { useState, useRef } from 'react'
import Editor from '@monaco-editor/react'
import { Download, Upload, FileText, Printer } from 'lucide-react'
import ResumePreview from './ResumePreview'

const INITIAL_LATEX = `%-------------------------
% Resume in Latex
% Author : Jake Gutierrez
% Based off of: https://github.com/sb2nov/resume
% License : MIT
%------------------------

\\documentclass[letterpaper,11pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}
\\input{glyphtounicode}


%----------FONT OPTIONS----------
% sans-serif
% \\usepackage[sfdefault]{FiraSans}
% \\usepackage[sfdefault]{roboto}
% \\usepackage[sfdefault]{noto-sans}
% \\usepackage[default]{sourcesanspro}

% serif
% \\usepackage{CormorantGaramond}
% \\usepackage{charter}


\\pagestyle{fancy}
\\fancyhf{} % clear all header and footer fields
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

% Adjust margins
\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-.5in}
\\addtolength{\\textheight}{1.0in}

\\urlstyle{same}

\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

% Sections formatting
\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

% Ensure that generate pdf is machine readable/ATS parsable
\\pdfgentounicode=1

%-------------------------
% Custom commands
\\newcommand{\\resumeItem}[1]{
  \\item\\small{
    {#1 \\vspace{-2pt}}
  }
}

\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-2pt}\\item
    \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & #2 \\\\
      \\textit{\\small#3} & \\textit{\\small #4} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubSubheading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\textit{\\small#1} & \\textit{\\small #2} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeProjectHeading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\small#1 & #2 \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubItem}[1]{\\resumeItem{#1}\\vspace{-4pt}}

\\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}

\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.15in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}

%-------------------------------------------
%%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%


\\begin{document}

%----------HEADING----------
\\begin{center}
    \\textbf{\\Huge \\scshape Aiden Huang} \\\\ \\vspace{1pt}
    \\small aidentothe.com $|$ \\href{aidentothe.com}{{aidenhuang.pro@gmail.com}} $|$ github.com/aidentothe
\\end{center}


%-----------EDUCATION-----------
\\section{Education}
  \\resumeSubHeadingListStart
     \\resumeSubheading
      {Purdue University}{May 2027}
      {Bachelors of Science, Data Science}{West Lafayette, {IN}}
    \\resumeSubheading
      {Monta Vista High School}{}
      {High School Diploma}{Cupertino, CA}
      \\resumeItemListStart
        \\resumeItem{NSA Codebreaker High Performer/ Stokes Finalist, USACO Plat , 4x AIME, FRC Robotics Lead}
      \\resumeItemListEnd
  \\resumeSubHeadingListEnd


%-----------EXPERIENCE-----------
\\section{Experience}
  \\resumeSubHeadingListStart
    
    \\resumeSubheading
      {AI Intern}{May 2025 --  August 2025}
      {AthenaHQ}{San Francisco, California (Remote)}
      \\resumeItemListStart
    \\resumeItem{Integrated Google Analytics 4 for generative web analytics tracking, driving 5 new enterprise deals.}
    \\resumeItem{Built input‐parsing token‐management systems to eliminate prompt duplication and boost accuracy.}
    \\resumeItem{Optimized PostgreSQL via indexing & algorithmic development, reducing query latency 45\\%.}
  \\resumeItemListEnd

    \\resumeSubheading
  {Software Engineering Intern}{June 2024 -- August 2024}
  {NextSilicon}{Tel Aviv, Israel (Remote)}
  \\resumeItemListStart
    \\resumeItem{Developed Maverick-2, focusing on optimizing software-defined hardware acceleration for HPC workloads}
    \\resumeItem{Integrated support for models like OpenMP and Kokkos, enhancing  accessibility and reducing code porting efforts}
    \\resumeItem{Collaborated with other teams to profile and improve performance of HPC applications on the Maverick-2 platform}
  \\resumeItemListEnd

  \\resumeSubheading
      {HPC Intern}{March 2023 --  May 2024}
      {ETH Zurich}{Remote}
      \\resumeItemListStart
        \\resumeItem{Optimized PyTorch model training on multi-node SLURM  clusters using Horovod, reducing epoch time by 40\\%}
        \\resumeItem{Engineered  data ingestion pipeline to process 50TB+  datasets using Dask and HDF5, achieving 6x throughput}
        \\resumeItem{Built  HPC–cloud workload manager using Terraform +  Python CLI, enabling serverless access to on-prem compute }
    \\resumeItemListEnd
    
    \\resumeSubheading
      {Research Assistant}{June 2022 -- August 2024}
      {University of California, Santa Cruz}{Santa Cruz, CA}
      \\resumeItemListStart
        \\resumeItem{Authored NeurIPS 2024 paper on spiking neural networks for autonomous navigation in adversarial environments}
        \\resumeItem{Boosted self-driving system performance by 35\\% in  urban scenarios through biologically inspired rewards}
      \\resumeItemListEnd
    
    \\resumeSubheading
      {Artificial Intelligence Research Assistant}{May 2023 -- December 2023}
      {Harvard University}{Remote}
      \\resumeItemListStart
        \\resumeItem{Built LLM-based tool using OpenAI API + custom prompt engineering, speeding up research script generation}
        \\resumeItem{Automated genomic data processing pipelines to model murine DNA structures across 500GB+ datasets}
        \\resumeItem{Containerized  workflow using Docker and deployed reproducible research environments on GCP}
      \\resumeItemListEnd
    
  \\resumeSubHeadingListEnd


%-----------PROJECTS-----------
\\section{Projects}
\\resumeSubHeadingListStart

\\resumeProjectHeading
    {\\textbf{Library Compute Cluster} $|$ \\emph{Python, Kubernetes, Docker, Shell Scripting, SSH Tunneling}}{February 2024 -- May 2024}
    \\resumeItemListStart
        \\resumeItem{Created Kubernetes cluster across 20+ unused school library desktops, enabling private multi-node compute}
        \\resumeItem{Executed over 1,000 hours of PyTorch training and fuzz testing for real-world ML and security experimentation}
    \\resumeItemListEnd

\\resumeProjectHeading
    {\\textbf{Project Empower} $|$ \\emph{Python, Pandas, Scikit-learn, Flask, React}}{June 2023 -- March 2025}
    \\resumeItemListStart
        \\resumeItem{Conducted cold outreach for hackathon sponsorships, securing over \\$250{,}000 in rewards}
        \\resumeItem{Ran 5 person marketing team, growing to 1mil+ page visits, 500k+ views on Instagram}
        \\resumeItem{Created Illuminate and OpenGrant, both with over 20k active users}
    \\resumeItemListEnd

\\resumeSubHeadingListEnd


%-----------PROGRAMMING SKILLS-----------
\\section{Technical Skills}
 \\begin{itemize}[leftmargin=0.15in, label={}]
    \\small{\\item{
     \\textbf{Languages:} Python, C++, Java, JavaScript, TypeScript, Scala, SQL (PostgreSQL)\\\\
\\textbf{Frameworks \\& Libraries:} React, Node.js, Flask, TensorFlow, PyTorch\\\\
\\textbf{Developer Tools \\& Platforms:} Git, Docker, Google Cloud Platform, SLURM\\\\
\\textbf{Cybersecurity \\& Pentesting:} Kali Linux, Nmap, Wireshark, Burp Suite, Ghidra\\\\
\\textbf{Hobbies:} Chess (2000 ELO), Poker, Cycling, Baseball, Thrifting
    }}
 \\end{itemize}

\\end{document}`

export default function LaTeXEditor() {
  const [latexCode, setLatexCode] = useState(INITIAL_LATEX)
  const editorRef = useRef<any>(null)

  const handleEditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor
    
    // Configure LaTeX language
    monaco.languages.register({ id: 'latex' })
    monaco.languages.setMonarchTokensProvider('latex', {
      tokenizer: {
        root: [
          [/\\[a-zA-Z@]+/, 'keyword'],
          [/\\[^a-zA-Z@]/, 'keyword'],
          [/%.*$/, 'comment'],
          [/\{/, 'delimiter.curly'],
          [/\}/, 'delimiter.curly'],
          [/\[/, 'delimiter.square'],
          [/\]/, 'delimiter.square'],
          [/\$\$/, 'string.escape'],
          [/\$/, 'string.escape'],
        ],
      },
    })

    monaco.languages.setLanguageConfiguration('latex', {
      brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')'],
      ],
      autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '$', close: '$' },
      ],
    })
  }

  const downloadLaTeX = () => {
    const blob = new Blob([latexCode], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'resume.tex'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const downloadPDF = () => {
    window.print()
  }

  const loadFile = async () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.tex'
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const content = e.target?.result as string
          setLatexCode(content)
        }
        reader.readAsText(file)
      }
    }
    input.click()
  }

  return (
    <div className="h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <FileText className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-semibold text-slate-800">LaTeX Resume Editor</h1>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={loadFile}
              className="flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
            >
              <Upload className="h-4 w-4" />
              <span>Load File</span>
            </button>
            <button
              onClick={downloadLaTeX}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
            >
              <Download className="h-4 w-4" />
              <span>Export .tex</span>
            </button>
            <button
              onClick={downloadPDF}
              className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
            >
              <Printer className="h-4 w-4" />
              <span>Print PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* Split View */}
      <div className="flex-1 flex">
        {/* Editor Panel */}
        <div className="w-1/2 bg-slate-900">
          <div className="h-full relative">
            <div className="absolute top-0 left-0 right-0 bg-slate-800 px-4 py-2 border-b border-slate-700">
              <span className="text-slate-300 text-sm font-medium">LaTeX Source</span>
            </div>
            <div className="pt-10 h-full">
              <Editor
                height="100%"
                defaultLanguage="latex"
                value={latexCode}
                onChange={(value) => setLatexCode(value || '')}
                onMount={handleEditorDidMount}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: 'on',
                  wordWrap: 'on',
                  automaticLayout: true,
                  scrollBeyondLastLine: false,
                  folding: true,
                  renderLineHighlight: 'line',
                  selectOnLineNumbers: true,
                  roundedSelection: false,
                  readOnly: false,
                  cursorStyle: 'line',
                  tabSize: 2,
                  padding: { top: 16, bottom: 16 },
                }}
              />
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="w-1/2 bg-slate-100 border-l border-slate-200">
          <div className="h-full relative">
            <div className="absolute top-0 left-0 right-0 bg-white px-4 py-2 border-b border-slate-200 shadow-sm">
              <span className="text-slate-700 text-sm font-medium">Live Preview</span>
            </div>
            <div className="pt-10 h-full overflow-auto">
              <div className="p-6">
                <ResumePreview latexCode={latexCode} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}