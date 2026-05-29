"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

const products = [
  {
    name: "iPhone Series",
    image: "iPhone",
    gradient: "from-gray-800 via-gray-700 to-gray-600",
    specs: ["iPhone 11 - iPhone 15", "Storage 64GB - 512GB", "Kondisi 85% - 100%"],
    priceRange: "Mulai Rp 4.500.000",
  },
  {
    name: "Samsung Galaxy Series",
    image: "Samsung",
    gradient: "from-blue-700 via-blue-600 to-blue-500",
    specs: ["Galaxy S21 - S24", "Storage 128GB - 512GB", "Kondisi 85% - 100%"],
    priceRange: "Mulai Rp 3.500.000",
  },
  {
    name: "Oppo Series",
    image: "OPPO",
    gradient: "from-green-600 via-green-500 to-emerald-400",
    specs: ["Oppo Reno Series", "Storage 128GB - 256GB", "Kondisi 85% - 100%"],
    priceRange: "Mulai Rp 2.000.000",
  },
  {
    name: "Vivo Series",
    image: "Vivo",
    gradient: "from-indigo-600 via-indigo-500 to-violet-400",
    specs: ["Vivo V Series & Y Series", "Storage 128GB - 256GB", "Kondisi 85% - 100%"],
    priceRange: "Mulai Rp 1.800.000",
  },
  {
    name: "Xiaomi Series",
    image: "Xiaomi",
    gradient: "from-orange-500 via-orange-400 to-amber-400",
    specs: ["Redmi & POCO Series", "Storage 64GB - 256GB", "Kondisi 85% - 100%"],
    priceRange: "Mulai Rp 1.500.000",
  },
]

export function ProductsSection() {
  return (
    <section id="produk" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Produk Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Pilihan HP Populer
          </h2>
          <p className="text-muted-foreground text-lg">
            Berbagai merek HP ternama dengan kualitas terbaik dan harga terjangkau.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-primary/5"
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className={`aspect-[4/3] bg-gradient-to-br ${product.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <span className="text-3xl font-bold text-white/90 group-hover:scale-110 transition-transform duration-300">
                    {product.image}
                  </span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {product.name}
                  </h3>
                  <ul className="space-y-1.5 mb-4">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <p className="text-primary font-semibold mb-4">{product.priceRange}</p>
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                    <Link
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Tanya Stok
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
