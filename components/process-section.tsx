"use client"

import { Search, CheckCircle, Banknote, Package } from "lucide-react"

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Pilih HP",
    description: "Browse koleksi HP kami dan pilih yang sesuai kebutuhan Anda.",
  },
  {
    icon: CheckCircle,
    step: "02",
    title: "Cek Kondisi",
    description: "Cek kondisi HP secara langsung di toko atau via video call.",
  },
  {
    icon: Banknote,
    step: "03",
    title: "Deal Harga",
    description: "Negosiasi harga terbaik. Bisa tukar tambah dengan HP lama.",
  },
  {
    icon: Package,
    step: "04",
    title: "Bawa Pulang",
    description: "HP siap dibawa pulang dengan garansi toko. Selamat menikmati!",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Cara Beli
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Proses Pembelian Mudah
          </h2>
          <p className="text-muted-foreground text-lg">
            Hanya 4 langkah mudah untuk mendapatkan HP impian Anda.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-border" />
              )}

              <div className="relative z-10 text-center lg:text-left">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-primary/10 mb-6 relative">
                  <item.icon className="w-10 h-10 text-primary" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
