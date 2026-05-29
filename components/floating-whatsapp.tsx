"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function FloatingWhatsApp() {
  return (
    <Link
      href="https://wa.me/6289659757002?text=Halo%20POS%20Service%2C%20saya%20ingin%20bertanya%20tentang%20HP"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
        
        {/* Button */}
        <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg shadow-green-500/30 transition-all duration-300 group-hover:scale-110">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-foreground text-background text-sm font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
            Chat WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-foreground" />
          </div>
        </div>
      </div>
    </Link>
  )
}
