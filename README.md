# LaTeX Editor System

A complete LaTeX editing environment with automated compilation and VS Code integration.

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Compile your document:**
   ```bash
   make
   # or
   npm run build
   ```

3. **Watch for changes:**
   ```bash
   make watch
   # or
   npm run watch
   ```

## Usage

### Compilation Options

- `make` - Compile LaTeX document (runs twice for references)
- `make quick` - Single-pass compilation
- `make watch` - Auto-compile on file changes
- `make clean` - Remove auxiliary files
- `make clean-all` - Remove all generated files

### VS Code Integration

This setup includes VS Code configuration for the LaTeX Workshop extension:

- Automatic compilation on save
- PDF preview in VS Code
- Syntax highlighting and IntelliSense
- Error detection and reporting

### File Structure

```
├── resume.tex          # Main LaTeX document
├── compile.js          # Node.js compilation script
├── package.json        # Dependencies and scripts
├── Makefile           # Make targets for compilation
└── .vscode/           # VS Code configuration
    ├── settings.json  # LaTeX Workshop settings
    └── extensions.json # Recommended extensions
```

## Requirements

- LaTeX distribution (TeX Live, MiKTeX, etc.)
- Node.js (for watch mode and scripts)
- VS Code with LaTeX Workshop extension (recommended)

## Features

- ✅ Automated compilation with error handling
- ✅ Watch mode for real-time updates
- ✅ VS Code integration
- ✅ Clean auxiliary file management
- ✅ Sample resume template included# resume-viewer
