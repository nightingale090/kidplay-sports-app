"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, X } from "lucide-react"

const themes = [
  {
    name: "Energetic",
    emoji: "☀️",
    gradient: "from-orange-400 via-pink-400 to-purple-500",
    preview: "bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500",
  },
  {
    name: "Cool & Calm",
    emoji: "🌊",
    gradient: "from-blue-400 via-purple-400 to-indigo-500",
    preview: "bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500",
  },
  {
    name: "Playful",
    emoji: "🍉",
    gradient: "from-pink-400 via-green-300 to-blue-400",
    preview: "bg-gradient-to-r from-pink-400 via-green-300 to-blue-400",
  },
  {
    name: "Fun Rainbow",
    emoji: "🦄",
    gradient: "from-purple-300 via-pink-300 to-yellow-300",
    preview: "bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300",
  },
]

export function ThemePicker() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState(themes[0])

  const handleThemeChange = (theme: (typeof themes)[0]) => {
    setSelectedTheme(theme)
    // In a real app, you'd save this to localStorage or user preferences
    document.documentElement.style.setProperty("--theme-gradient", theme.gradient)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="sm"
        className="bg-white/20 hover:bg-white/30 text-white border-white/30 rounded-full"
      >
        <Palette className="w-4 h-4 mr-2" />🎨 Theme
      </Button>

      {isOpen && (
        <Card className="absolute top-12 right-0 w-64 bg-white/95 backdrop-blur-sm border-white/30 shadow-xl z-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Choose Your Theme</h3>
              <Button size="sm" variant="ghost" onClick={() => setIsOpen(false)} className="h-6 w-6 p-0">
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-3">
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => handleThemeChange(theme)}
                  className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className={`w-8 h-8 rounded-full ${theme.preview}`} />
                  <div className="text-left">
                    <div className="font-medium text-gray-800">
                      {theme.emoji} {theme.name}
                    </div>
                  </div>
                  {selectedTheme.name === theme.name && <div className="ml-auto text-green-500">✓</div>}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
