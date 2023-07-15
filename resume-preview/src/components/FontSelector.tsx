'use client'

import { useState } from 'react'
import { Type } from 'lucide-react'

interface FontOption {
  id: string
  name: string
  cssName: string
  category: 'serif' | 'sans-serif' | 'monospace'
  isStandard?: boolean
}

const FONT_OPTIONS: FontOption[] = [
  // Sans-serif fonts
  { id: 'computer-modern', name: 'Computer Modern (Standard)', cssName: 'Computer Modern, serif', category: 'serif', isStandard: true },
  { id: 'times', name: 'Times New Roman', cssName: 'Times, "Times New Roman", serif', category: 'serif' },
  { id: 'palatino', name: 'Palatino', cssName: 'Palatino, "Palatino Linotype", serif', category: 'serif' },
  { id: 'garamond', name: 'Garamond', cssName: 'Garamond, serif', category: 'serif' },
  
  // Sans-serif fonts
  { id: 'helvetica', name: 'Helvetica', cssName: 'Helvetica, Arial, sans-serif', category: 'sans-serif' },
  { id: 'arial', name: 'Arial', cssName: 'Arial, sans-serif', category: 'sans-serif' },
  { id: 'fira-sans', name: 'Fira Sans', cssName: 'Fira Sans, sans-serif', category: 'sans-serif' },
  { id: 'roboto', name: 'Roboto', cssName: 'Roboto, sans-serif', category: 'sans-serif' },
  { id: 'source-sans', name: 'Source Sans Pro', cssName: 'Source Sans Pro, sans-serif', category: 'sans-serif' },
  
  // Monospace fonts
  { id: 'courier', name: 'Courier New', cssName: 'Courier New, monospace', category: 'monospace' },
  { id: 'monaco', name: 'Monaco', cssName: 'Monaco, monospace', category: 'monospace' },
]

interface FontSelectorProps {
  selectedFont: string
  onFontChange: (fontId: string, fontCss: string) => void
}

export default function FontSelector({ selectedFont, onFontChange }: FontSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  
  const selectedFontOption = FONT_OPTIONS.find(font => font.id === selectedFont) || FONT_OPTIONS[0]
  
  const handleFontSelect = (font: FontOption) => {
    onFontChange(font.id, font.cssName)
    setIsOpen(false)
  }

  const groupedFonts = FONT_OPTIONS.reduce((acc, font) => {
    if (!acc[font.category]) {
      acc[font.category] = []
    }
    acc[font.category].push(font)
    return acc
  }, {} as Record<string, FontOption[]>)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium border border-slate-300"
      >
        <Type className="h-4 w-4" />
        <span>{selectedFontOption.name}</span>
        <svg className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 w-64 bg-white border border-slate-200 rounded-lg shadow-lg z-10 max-h-80 overflow-y-auto">
          {Object.entries(groupedFonts).map(([category, fonts]) => (
            <div key={category} className="p-2">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2 px-2">
                {category === 'sans-serif' ? 'Sans Serif' : category === 'serif' ? 'Serif' : 'Monospace'}
              </div>
              {fonts.map((font) => (
                <button
                  key={font.id}
                  onClick={() => handleFontSelect(font)}
                  className={`w-full text-left px-3 py-2 rounded hover:bg-slate-100 transition-colors text-sm flex items-center justify-between ${
                    selectedFont === font.id ? 'bg-blue-50 text-blue-700' : 'text-slate-700'
                  }`}
                  style={{ fontFamily: font.cssName }}
                >
                  <span>{font.name}</span>
                  {font.isStandard && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                      Standard
                    </span>
                  )}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}