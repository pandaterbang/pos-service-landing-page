"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Toko HP Second Terpercaya
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-up animation-delay-100">
              HP Second Berkualitas,{" "}
              <span className="text-primary">Harga Bersahabat</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-up animation-delay-200 text-pretty">
              Tersedia berbagai pilihan iPhone, Samsung, Oppo, Vivo, Xiaomi dan merek lainnya dengan kualitas terjamin.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up animation-delay-300">
              <Button size="lg" asChild className="text-base">
                <Link href="#produk">
                  Lihat Stok
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base">
                <Link
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Chat WhatsApp
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start pt-4 animate-fade-up animation-delay-400">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Garansi Toko
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Bisa Tukar Tambah
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Cek Unit Langsung
              </div>
            </div>
          </div>

          {/* Phone Mockups */}
          <div className="relative h-[400px] md:h-[500px] animate-fade-up animation-delay-200">
            {/* Main phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-56 h-auto">
              <div className="relative bg-gradient-to-br from-card to-secondary rounded-[2.5rem] p-2 shadow-2xl border border-border">
                <div className="bg-foreground rounded-[2rem] aspect-[9/19] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/80 via-primary to-primary/60 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary-foreground">iPhone</span>
                  </div>
                </div>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-foreground rounded-full" />
              </div>
            </div>

            {/* Left phone */}
            <div className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 w-36 md:w-44 h-auto -rotate-12 opacity-80">
              <div className="relative bg-gradient-to-br from-card to-secondary rounded-[2rem] p-1.5 shadow-xl border border-border">
                <div className="bg-foreground rounded-[1.75rem] aspect-[9/19] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">Samsung</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right phone */}
            <div className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 w-36 md:w-44 h-auto rotate-12 opacity-80">
              <div className="relative bg-gradient-to-br from-card to-secondary rounded-[2rem] p-1.5 shadow-xl border border-border">
                <div className="bg-foreground rounded-[1.75rem] aspect-[9/19] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">Xiaomi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
