"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff1_1px,transparent_1px),linear-gradient(to_bottom,#fff1_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Temukan HP Impianmu Hari Ini
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
            Jangan lewatkan kesempatan mendapatkan HP berkualitas dengan harga terbaik. Hubungi kami sekarang!
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="text-lg px-8 py-6 h-auto"
          >
            <Link
              href="https://wa.me/6281234567890?text=Halo%20POS%20Service%2C%20saya%20ingin%20bertanya%20tentang%20HP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Chat WhatsApp Sekarang
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
