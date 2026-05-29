"use client"

import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  { id: 1, gradient: "from-blue-600 to-purple-600", label: "Tampak Depan Toko" },
  { id: 2, gradient: "from-green-500 to-teal-500", label: "Area Display HP" },
  { id: 3, gradient: "from-orange-500 to-red-500", label: "Ruang Pengecekan" },
  { id: 4, gradient: "from-pink-500 to-rose-500", label: "Proses Service" },
  { id: 5, gradient: "from-indigo-500 to-blue-500", label: "Koleksi iPhone" },
  { id: 6, gradient: "from-amber-500 to-yellow-500", label: "Koleksi Android" },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="galeri" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Galeri
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Lihat Toko Kami
          </h2>
          <p className="text-muted-foreground text-lg">
            Kunjungi toko kami dan lihat langsung koleksi HP berkualitas yang tersedia.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${image.gradient} transition-transform duration-500 group-hover:scale-110`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/30 text-2xl font-bold">{image.label}</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium">{image.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-4xl w-full aspect-video rounded-xl overflow-hidden">
            {galleryImages.find((img) => img.id === selectedImage) && (
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  galleryImages.find((img) => img.id === selectedImage)?.gradient
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/50 text-4xl font-bold">
                    {galleryImages.find((img) => img.id === selectedImage)?.label}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
