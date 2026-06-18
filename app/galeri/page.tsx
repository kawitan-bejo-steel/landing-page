import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader, { IconMask } from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Galeri — Kawitan Bejo Steel",
  description: "Dokumentasi gudang, stok besi, dan proyek yang telah ditangani Kawitan Bejo Steel.",
  openGraph: {
    title: "Galeri Kawitan Bejo Steel",
    description: "Foto dokumentasi gudang, stok material besi, dan proyek yang telah kami tangani.",
    url: "/galeri",
  },
};

const PHOTOS = [
  { src: "/assets/images/galeri/galeri_1.jpg", alt: "Stok besi hollow berbagai ukuran di gudang Kawitan Bejo Steel" },
  { src: "/assets/images/galeri/galeri_2.jpg", alt: "Tumpukan pipa besi baru siap distribusi" },
  { src: "/assets/images/galeri/galeri_3.jpg", alt: "Area penyimpanan besi bekas Kawitan Bejo Steel" },
  { src: "/assets/images/galeri/galeri_4.webp", alt: "Koleksi besi profil dan siku di gudang" },
  { src: "/assets/images/galeri/galeri_5.jpg", alt: "Stok besi beton dan material konstruksi" },
  { src: "/assets/images/galeri/galeri_6.jpg", alt: "Penanganan besi bekas volume besar dari proyek bongkaran" },
  { src: "/assets/images/galeri/galeri_7.jpg", alt: "Suasana aktivitas gudang Kawitan Bejo Steel" },
  { src: "/assets/images/galeri/galeri_8.jpg", alt: "Stok material besi siap kirim di gudang Kawitan Bejo Steel" },
  { src: "/assets/images/galeri/galeri_9.jpg", alt: "Area penyimpanan besi profil dan hollow Kawitan Bejo Steel" },
];

export default function GaleriPage() {
  return (
    <div style={{ background: "var(--surface-base)", minHeight: "100vh" }}>
      <SiteHeader active="Galeri" />

      {/* Hero */}
      <section className="bj-pad-page-hero" style={{ position: "relative", overflow: "hidden", background: "var(--steel-sheen)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "6px", background: "var(--hazard-stripes)" }} />
        <div className="bj-container">
          <div className="bj-eyebrow" style={{ marginBottom: "14px" }}>Dokumentasi</div>
          <h1 className="bj-h1-page">Galeri Kawitan Bejo Steel</h1>
          <p style={{ fontSize: "18px", color: "var(--text-body)", lineHeight: 1.6, marginTop: "20px", maxWidth: "640px" }}>
            Dokumentasi gudang, stok besi, dan proyek yang telah kami tangani.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bj-pad-sm" style={{ background: "var(--surface-base)" }}>
        <div className="bj-container">

          {/* Featured */}
          <Reveal>
            <div style={{ marginBottom: "18px", background: "var(--surface-raised)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
              <Image
                src="/assets/images/galeri/depan.jpg"
                alt="Tampak depan gudang Kawitan Bejo Steel di Wates, Kulon Progo"
                width={1200}
                height={420}
                sizes="(max-width: 1200px) 100vw, 1200px"
                style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }}
                priority
              />
            </div>
          </Reveal>

          {/* 3-column grid */}
          <div className="bj-grid-3" style={{ gap: "18px" }}>
            {PHOTOS.map(({ src, alt }, i) => (
              <Reveal key={src} delay={(i % 3) * 70}>
                <div style={{ background: "var(--surface-raised)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
                  <Image
                    src={src}
                    alt={alt}
                    width={800}
                    height={240}
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 390px"
                    style={{ width: "100%", height: "240px", objectFit: "cover", display: "block" }}
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "28px", color: "var(--text-faint)", fontSize: "14px" }}>
            <IconMask icon="image" size={16} color="var(--text-faint)" />
            Foto dokumentasi gudang, stok, dan proyek Kawitan Bejo Steel.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bj-pad-sm" style={{ background: "var(--steel-900)" }}>
        <div className="bj-container" style={{ maxWidth: "1000px", textAlign: "center" }}>
          <h2 className="bj-h2" style={{ lineHeight: 1.1 }}>Ingin Lihat Stok Terbaru?</h2>
          <p style={{ fontSize: "17px", color: "var(--text-body)", maxWidth: "520px", margin: "14px auto 0" }}>
            Hubungi kami via WhatsApp untuk foto dan ketersediaan stok terkini.
          </p>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "26px" }}>
            <a href="https://wa.me/6287738585311?text=Halo%20Kawitan%20Bejo%20Steel%2C%20saya%20ingin%20melihat%20stok%20besi%20terbaru." target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "48px", padding: "0 28px", background: "var(--gold-500)", color: "var(--text-on-gold)", borderRadius: "var(--radius-sm)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "16px", textDecoration: "none" }}>
              <IconMask icon="message-circle" size={18} color="var(--text-on-gold)" />
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
