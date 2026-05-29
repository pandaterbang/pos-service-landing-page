"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  BadgeDollarSign,
  RefreshCw,
  Award,
  Eye,
  Heart,
} from "lucide-react"

const advantages = [
  {
    icon: Shield,
    title: "Unit Terpilih & Berkualitas",
    description: "Setiap unit melalui proses seleksi ketat untuk memastikan kualitas terbaik.",
  },
  {
    icon: BadgeDollarSign,
    title: "Harga Kompetitif",
    description: "Dapatkan HP berkualitas dengan harga yang bersaing di pasaran.",
  },
  {
    icon: RefreshCw,
    title: "Bisa Tukar Tambah",
    description: "Tukarkan HP lama Anda dan dapatkan harga spesial untuk HP baru.",
  },
  {
    icon: Award,
    title: "Garansi Toko",
    description: "Setiap pembelian dilengkapi garansi toko untuk ketenangan Anda.",
  },
  {
    icon: Eye,
    title: "Bisa Cek Unit Langsung",
    description: "Cek kondisi HP secara langsung sebelum memutuskan membeli.",
  },
  {
    icon: Heart,
    title: "Pelayanan Ramah & Profesional",
    description: "Tim kami siap membantu dengan pelayanan terbaik dan profesional.",
  },
]

export function AdvantagesSection() {
  return (
    <section id="keunggulan" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Keunggulan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Kenapa Harus Pilih POS Service?
          </h2>
          <p className="text-muted-foreground text-lg">
            Kami berkomitmen memberikan pengalaman terbaik dalam berbelanja HP second berkualitas.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, index) => (
            <Card
              key={index}
              className="group bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
