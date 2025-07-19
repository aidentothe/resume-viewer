# LaTeX Resume Editor

A modern, web-based LaTeX resume editor with real-time preview capabilities. Built with Next.js, React, and Monaco Editor.

![LaTeX Resume Editor](https://img.shields.io/badge/Next.js-15.4.2-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

- **Real-time Preview**: See your resume changes instantly as you type
- **Syntax Highlighting**: Full LaTeX syntax highlighting with Monaco Editor
- **File Management**: Import existing `.tex` files and export your work
- **PDF Export**: Print or save your resume as PDF directly from the browser
- **Responsive Design**: Clean, modern interface that works on any screen size
- **Split View**: Side-by-side editor and preview for optimal workflow
- **Auto-completion**: LaTeX command suggestions and bracket matching
- **Sticky Header**: Navigation controls always accessible while scrolling

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd resume-preview
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:5717](http://localhost:5717)

## 📁 Project Structure

```
resume-preview/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Home page
│   └── components/
│       ├── LaTeXEditor.tsx      # Main editor component
│       └── ResumePreview.tsx    # Preview component
├── public/                      # Static assets
├── package.json
└── README.md
```

## 🎯 Usage

### Basic Workflow

1. **Edit LaTeX Code**: Use the left panel to write or modify your LaTeX resume
2. **Preview Changes**: See real-time updates in the right panel
3. **Import Files**: Click "Load File" to import existing `.tex` files
4. **Export Options**: 
   - Export as `.tex` file for external compilation
   - Print/save as PDF directly from the browser

### LaTeX Template

The editor comes pre-loaded with a professional resume template that includes:

- Clean, ATS-friendly formatting
- Sections for education, experience, projects, and skills
- Customizable styling and layout
- Proper LaTeX document structure

### Keyboard Shortcuts

- **Auto-completion**: Use `Ctrl+Space` for LaTeX command suggestions
- **Find/Replace**: `Ctrl+F` / `Ctrl+H`
- **Multi-cursor**: `Alt+Click` or `Ctrl+Alt+Down/Up`
- **Format Document**: `Shift+Alt+F`

## 🛠️ Built With

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[Monaco Editor](https://microsoft.github.io/monaco-editor/)** - VS Code's editor in the browser
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

## 🎨 Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the appearance by:

1. Modifying the `globals.css` file for global styles
2. Updating component classes in the `.tsx` files
3. Extending the Tailwind configuration if needed

### Editor Settings

Monaco Editor options can be customized in `LaTeXEditor.tsx`:

```typescript
options={{
  minimap: { enabled: false },
  fontSize: 14,
  lineNumbers: 'on',
  wordWrap: 'on',
  // Add more options here
}}
```

## 📱 Responsive Design

The editor automatically adapts to different screen sizes:

- **Desktop**: Full split-view with editor and preview side-by-side
- **Tablet**: Optimized layout with appropriate spacing
- **Mobile**: Responsive design with touch-friendly controls

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Development Notes

- The app runs on port 5717 by default
- Hot reloading is enabled for instant feedback
- TypeScript strict mode is enabled for better code quality

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to a Git repository
2. Import your project on [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- Render

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Template based on Jake Gutierrez's LaTeX resume template
- Built on the excellent Next.js framework
- Monaco Editor for providing VS Code's editing experience
- Tailwind CSS for the utility-first styling approach

## 📧 Support

If you have any questions or run into issues, please:

1. Check the existing issues in the repository
2. Create a new issue with detailed information
3. Provide steps to reproduce any bugs

---

**Happy resume building!** 🎉