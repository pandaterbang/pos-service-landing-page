"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Mahasiswa",
    avatar: "BS",
    rating: 5,
    comment: "iPhone 13 yang saya beli kondisinya mulus banget, seperti baru! Harga juga sangat bersahabat untuk kantong mahasiswa.",
  },
  {
    name: "Siti Rahayu",
    role: "Content Creator",
    avatar: "SR",
    rating: 5,
    comment: "Sangat puas dengan Samsung S23 Ultra yang saya beli. Kamera masih jernih dan performa oke banget untuk editing konten.",
  },
  {
    name: "Ahmad Rizki",
    role: "Karyawan Swasta",
    avatar: "AR",
    rating: 5,
    comment: "Pelayanannya ramah dan profesional. Dijelaskan detail kondisi HP-nya, tidak ada yang ditutup-tutupi. Recommended!",
  },
  {
    name: "Dewi Lestari",
    role: "Pelajar SMA",
    avatar: "DL",
    rating: 5,
    comment: "Oppo Reno yang saya beli sesuai dengan deskripsi. Proses tukar tambah juga mudah. Terima kasih POS Service!",
  },
  {
    name: "Eko Prasetyo",
    role: "Gamer",
    avatar: "EP",
    rating: 5,
    comment: "POCO F5 yang saya beli performanya mantap untuk gaming. Garansi toko bikin tenang. Pasti repeat order!",
  },
  {
    name: "Linda Wijaya",
    role: "Ibu Rumah Tangga",
    avatar: "LW",
    rating: 5,
    comment: "Cari HP berkualitas dengan budget terbatas, ketemu POS Service. Alhamdulillah dapat Vivo yang bagus banget!",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimoni" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimoni
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Apa Kata Pelanggan Kami?
          </h2>
          <p className="text-muted-foreground text-lg">
            Kepuasan pelanggan adalah prioritas utama kami.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
