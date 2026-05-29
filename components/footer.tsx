"use client"

import Link from "next/link"
import { Smartphone, MapPin, Phone, Instagram, Music2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">POS Service</span>
            </Link>
            <p className="text-background/60 text-sm leading-relaxed mb-6 max-w-md">
              Toko HP second terpercaya dengan berbagai pilihan iPhone, Samsung, Oppo, Vivo, Xiaomi dan merek lainnya. Unit berkualitas, garansi toko, harga kompetitif.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://instagram.com/posservice"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://tiktok.com/@posservice"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Music2 className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-background/60 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +62 812-3456-7890
                </Link>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-background/60">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    Jl. Contoh Alamat No. 123
                    <br />
                    Kota, Provinsi 12345
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#keunggulan"
                  className="text-sm text-background/60 hover:text-primary transition-colors"
                >
                  Keunggulan
                </Link>
              </li>
              <li>
                <Link
                  href="#produk"
                  className="text-sm text-background/60 hover:text-primary transition-colors"
                >
                  Produk
                </Link>
              </li>
              <li>
                <Link
                  href="#testimoni"
                  className="text-sm text-background/60 hover:text-primary transition-colors"
                >
                  Testimoni
                </Link>
              </li>
              <li>
                <Link
                  href="#galeri"
                  className="text-sm text-background/60 hover:text-primary transition-colors"
                >
                  Galeri
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-sm text-background/60 hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-12 rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.82240341476908!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1635134422096!5m2!1sen!2sid"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi POS Service"
            className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-background/10 text-center">
          <p className="text-sm text-background/40">
            &copy; {new Date().getFullYear()} POS Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
