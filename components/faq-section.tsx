"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Apakah unit bergaransi?",
    answer:
      "Ya, setiap unit yang kami jual dilengkapi dengan garansi toko. Lama garansi bervariasi tergantung jenis dan kondisi unit, mulai dari 1 minggu hingga 3 bulan. Detail garansi akan dijelaskan saat pembelian.",
  },
  {
    question: "Apakah bisa COD?",
    answer:
      "Ya, kami melayani COD (Cash on Delivery) untuk area tertentu di sekitar lokasi toko. Untuk pengiriman luar kota, pembayaran dilakukan sebelum pengiriman dengan berbagai metode pembayaran yang tersedia.",
  },
  {
    question: "Apakah bisa tukar tambah?",
    answer:
      "Tentu bisa! Kami menerima HP bekas Anda untuk ditukar tambah dengan HP yang ada di toko kami. Harga tukar tambah akan disesuaikan dengan kondisi HP Anda setelah dilakukan pengecekan.",
  },
  {
    question: "Apakah bisa kirim luar kota?",
    answer:
      "Ya, kami melayani pengiriman ke seluruh Indonesia menggunakan jasa ekspedisi terpercaya seperti JNE, J&T, SiCepat, dan lainnya. Ongkos kirim ditanggung pembeli dan akan diinfokan sebelum transaksi.",
  },
  {
    question: "Apakah bisa cek IMEI?",
    answer:
      "Tentu saja! Kami sangat menganjurkan pembeli untuk mengecek IMEI sebelum membeli. Semua unit kami dijamin IMEI terdaftar dan bukan hasil curian. Anda bisa cek langsung di website resmi Kemenperin.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-muted-foreground text-lg">
              Temukan jawaban untuk pertanyaan umum seputar layanan kami.
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
