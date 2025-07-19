# LaTeX Makefile

# Default target
.PHONY: all clean watch install

# Variables
MAIN_TEX = resume.tex
PDF_NAME = $(MAIN_TEX:.tex=.pdf)

all: $(PDF_NAME)

# Compile LaTeX to PDF
$(PDF_NAME): $(MAIN_TEX)
	@echo "🔄 Compiling LaTeX..."
	pdflatex -interaction=nonstopmode $(MAIN_TEX)
	pdflatex -interaction=nonstopmode $(MAIN_TEX)
	@echo "✅ Compilation complete: $(PDF_NAME)"

# Watch for changes and auto-compile
watch:
	@echo "👀 Starting watch mode..."
	npm run watch

# Install dependencies
install:
	@echo "📦 Installing dependencies..."
	npm install

# Clean auxiliary files
clean:
	@echo "🧹 Cleaning auxiliary files..."
	rm -f *.aux *.log *.out *.toc *.synctex.gz *.fls *.fdb_latexmk
	@echo "✅ Clean complete"

# Clean everything including PDF
clean-all: clean
	rm -f *.pdf
	@echo "✅ All files cleaned"

# Quick compile without double-run
quick:
	@echo "⚡ Quick compile..."
	pdflatex -interaction=nonstopmode $(MAIN_TEX)

# Start preview server
preview:
	@echo "🚀 Starting preview server..."
	npm run dev

# Show help
help:
	@echo "Available targets:"
	@echo "  all       - Compile LaTeX to PDF (default)"
	@echo "  watch     - Watch for changes and auto-compile"
	@echo "  preview   - Start Next.js preview server"
	@echo "  install   - Install npm dependencies"
	@echo "  clean     - Remove auxiliary files"
	@echo "  clean-all - Remove all generated files including PDF"
	@echo "  quick     - Quick single-pass compilation"
	@echo "  help      - Show this help message"