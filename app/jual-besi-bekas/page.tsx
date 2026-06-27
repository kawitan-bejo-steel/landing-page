import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader, { IconMask } from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Reveal from "../components/Reveal";
import { BASE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Jual Besi Bekas — Kawitan Bejo Steel",
  description:
    "Jual besi bekas Anda ke Kawitan Bejo Steel, Wates, Kulon Progo. Harga kompetitif, timbangan transparan, bayar tunai langsung di tempat. Terima semua jenis besi bekas.",
  openGraph: {
    title: "Jual Besi Bekas ke Kawitan Bejo Steel — Bayar Langsung di Tempat",
    description:
      "Kami menerima semua jenis besi bekas: beton, hollow, pipa, siku, IWF, plat, per mobil, dan lainnya. Harga bersaing, bayar tunai, bisa jemput.",
    url: `${BASE_URL}/jual-besi-bekas`,
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pembelian Besi Bekas",
  provider: {
    "@type": "LocalBusiness",
    name: "UD. Kawitan Bejo Steel",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wates",
      addressRegion: "Kulon Progo",
      addressCountry: "ID",
    },
    telephone: "+6287738585311",
  },
  areaServed: "Kulon Progo, Yogyakarta",
  description:
    "Pembelian besi bekas semua jenis dengan harga kompetitif, timbangan akurat, dan pembayaran tunai langsung.",
};

const JENIS_BESI = [
  { icon: "grip", label: "Besi Beton" },
  { icon: "box", label: "Besi Hollow" },
  { icon: "circle", label: "Pipa Besi" },
  { icon: "triangle", label: "Besi Siku" },
  { icon: "align-justify", label: "IWF / H-Beam" },
  { icon: "credit-card", label: "Plat Besi & Plat Strip" },
  { icon: "minus", label: "CNP / Baja Ringan" },
  { icon: "recycle", label: "Per / Pir Mobil" },
  { icon: "layers", label: "Atap Seng & Galvanis" },
  { icon: "square", label: "Profil Besi Lainnya" },
];

const KEUNGGULAN = [
  {
    icon: "scale",
    title: "Timbangan Akurat & Transparan",
    desc: "Penimbangan dilakukan di depan Anda dengan timbangan terverifikasi. Tidak ada potongan tersembunyi.",
  },
  {
    icon: "credit-card",
    title: "Bayar Tunai Langsung",
    desc: "Pembayaran dilakukan di tempat setelah penimbangan selesai. Tidak ada proses menunggu atau transfer tertunda.",
  },
  {
    icon: "truck",
    title: "Bisa Jemput ke Lokasi",
    desc: "Untuk volume yang cukup, kami dapat menjemput besi bekas langsung ke lokasi Anda di sekitar Kulon Progo dan Yogyakarta.",
  },
  {
    icon: "handshake",
    title: "Harga Kompetitif",
    desc: "Harga kami mengikuti harga pasar besi terkini. Hubungi kami untuk mendapat penawaran terbaik.",
  },
];

const STEPS = [
  { num: "01", label: "Hubungi via WhatsApp", desc: "Ceritakan jenis dan estimasi berat besi bekas Anda." },
  { num: "02", label: "Cek Kondisi Barang", desc: "Tim kami akan menilai kondisi dan jenis material." },
  { num: "03", label: "Timbang Bersama", desc: "Penimbangan dilakukan secara transparan di depan Anda." },
  { num: "04", label: "Terima Pembayaran", desc: "Bayar tunai langsung setelah penimbangan selesai." },
];

export default function JualBesiBekas() {
  return (
    <div style={{ background: "var(--surface-base)", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <SiteHeader active="Layanan" />

      {/* Hero */}
      <section
        className="bj-pad-page-hero"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "var(--steel-sheen)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "6px",
            background: "var(--hazard-stripes)",
          }}
        />
        <div className="bj-container">
          <div className="bj-eyebrow" style={{ marginBottom: "14px" }}>
            Layanan Pembelian
          </div>
          <h1 className="bj-h1-page">
            Jual Besi Bekas Anda<br />ke Kawitan Bejo Steel
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "var(--text-body)",
              lineHeight: 1.6,
              marginTop: "20px",
              maxWidth: "620px",
            }}
          >
            Wates, Kulon Progo &mdash; Kami menerima semua jenis besi bekas dengan
            harga kompetitif. Timbangan akurat, bayar tunai langsung di tempat.
          </p>
          <div style={{ display: "flex", gap: "14px", marginTop: "32px", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/6287738585311?text=Halo%20Kawitan%20Bejo%20Steel%2C%20saya%20ingin%20menjual%20besi%20bekas."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                height: "50px",
                padding: "0 28px",
                background: "var(--gold-500)",
                color: "var(--text-on-gold)",
                borderRadius: "var(--radius-sm)",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              <IconMask icon="message-circle" size={18} color="var(--text-on-gold)" />
              Saya ingin menjual besi bekas
            </a>
            <a
              href="tel:087738585311"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                height: "50px",
                padding: "0 24px",
                border: "1px solid var(--border-default)",
                borderRadius: "var(--radius-sm)",
                fontFamily: "var(--font-mono)",
                fontSize: "15px",
                color: "var(--text-body)",
                textDecoration: "none",
              }}
            >
              <IconMask icon="phone" size={16} color="var(--gold-500)" />
              0877-3858-5311
            </a>
          </div>
        </div>
      </section>

      {/* Jenis besi yang diterima */}
      <section className="bj-pad-sm" style={{ background: "var(--surface-base)" }}>
        <div className="bj-container">
          <Reveal>
            <div className="bj-eyebrow" style={{ marginBottom: "12px" }}>Material</div>
            <h2 className="bj-h2" style={{ marginBottom: "8px" }}>Jenis Besi yang Kami Terima</h2>
            <p style={{ fontSize: "16px", color: "var(--text-muted)", maxWidth: "560px", marginBottom: "40px" }}>
              Kami menerima hampir semua jenis besi dan baja bekas. Tidak yakin? Tanyakan langsung.
            </p>
          </Reveal>
          <div className="bj-grid-4" style={{ gap: "12px" }}>
            {JENIS_BESI.map((item, i) => (
              <Reveal key={item.label} delay={i * 40}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "16px 18px",
                    background: "var(--surface-raised)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-lg)",
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: "38px",
                      height: "38px",
                      borderRadius: "var(--radius-md)",
                      background: "var(--surface-sunken)",
                      border: "1px solid var(--border-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconMask icon={item.icon} size={20} color="var(--gold-500)" />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "var(--text-body)",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
                background: "var(--steel-900)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-lg)",
                padding: "18px 22px",
              }}
            >
              <IconMask icon="info" size={20} color="var(--gold-500)" />
              <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                Punya jenis besi lain yang tidak termasuk di atas? Hubungi kami dulu &mdash; kemungkinan besar kami tetap bisa terima.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cara kerja */}
      <section className="bj-pad-sm" style={{ background: "var(--steel-900)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="bj-container">
          <Reveal>
            <div className="bj-eyebrow" style={{ marginBottom: "12px" }}>Proses</div>
            <h2 className="bj-h2" style={{ marginBottom: "40px" }}>Cara Kerjanya Sederhana</h2>
          </Reveal>
          <div className="bj-grid-4" style={{ gap: "20px" }}>
            {STEPS.map((step, i) => (
              <Reveal key={step.num} delay={i * 60}>
                <div
                  style={{
                    position: "relative",
                    padding: "28px 24px",
                    background: "var(--surface-raised)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-xl)",
                  }}
                >
                  <div style={{ background: "var(--hazard-stripes)", height: "4px", borderRadius: "2px", marginBottom: "20px" }} />
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "28px",
                      fontWeight: 700,
                      color: "var(--gold-500)",
                      opacity: 0.7,
                      marginBottom: "12px",
                    }}
                  >
                    {step.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "var(--text-strong)",
                      marginBottom: "8px",
                    }}
                  >
                    {step.label}
                  </div>
                  <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Keunggulan & Foto */}
      <section className="bj-pad-sm" style={{ background: "var(--surface-base)" }}>
        <div className="bj-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
            <div>
              <Reveal>
                <div className="bj-eyebrow" style={{ marginBottom: "12px" }}>Kenapa Kami</div>
                <h2 className="bj-h2" style={{ marginBottom: "32px" }}>Kenapa Jual ke Kawitan Bejo?</h2>
              </Reveal>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {KEUNGGULAN.map((item, i) => (
                  <Reveal key={item.title} delay={i * 60}>
                    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                      <div
                        style={{
                          flexShrink: 0,
                          width: "44px",
                          height: "44px",
                          borderRadius: "var(--radius-md)",
                          background: "color-mix(in srgb, var(--gold-500) 15%, var(--steel-900))",
                          border: "1px solid var(--border-subtle)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <IconMask icon={item.icon} size={22} color="var(--gold-500)" />
                      </div>
                      <div>
                        <div
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "15px",
                            fontWeight: 700,
                            color: "var(--text-strong)",
                            marginBottom: "4px",
                          }}
                        >
                          {item.title}
                        </div>
                        <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={80}>
              <div style={{ position: "relative", height: 420, borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
                <Image
                  src="/assets/images/depan.jpg"
                  alt="Suasana toko Kawitan Bejo Steel Wates"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Area layanan */}
      <section className="bj-pad-sm" style={{ background: "var(--steel-900)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="bj-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
            <Reveal>
              <div style={{ position: "relative", height: 300, borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
                <Image
                  src="/assets/images/galeri/depan.jpg"
                  alt="Lokasi Kawitan Bejo Steel Wates Kulon Progo"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="bj-eyebrow" style={{ marginBottom: "12px" }}>Area Layanan</div>
              <h2 className="bj-h2" style={{ marginBottom: "16px" }}>Kami Layani Sekitar Yogyakarta</h2>
              <p style={{ fontSize: "16px", color: "var(--text-body)", lineHeight: 1.7, marginBottom: "24px" }}>
                Berlokasi di Wates, Kulon Progo, kami melayani penjualan besi bekas dari seluruh
                area Kulon Progo, Kota Yogyakarta, Sleman, Bantul, dan sekitarnya.
              </p>
              <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.7 }}>
                Untuk volume yang cukup, tim kami dapat datang menjemput langsung ke lokasi Anda.
                Hubungi kami terlebih dahulu untuk konfirmasi jangkauan jemput.
              </p>
              <div style={{ marginTop: "28px" }}>
                <a
                  href="https://maps.app.goo.gl/d6oNNp4LFEfi6qp98"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "14px",
                    color: "var(--gold-500)",
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  <IconMask icon="map-pin" size={16} color="var(--gold-500)" />
                  Lihat lokasi di Google Maps
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Cross-link */}
      <section className="bj-pad-sm" style={{ background: "var(--surface-base)" }}>
        <div className="bj-container">
          <Reveal>
            <div
              style={{
                background: "var(--steel-900)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-xl)",
                padding: "28px 32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "24px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "var(--text-strong)",
                    marginBottom: "6px",
                  }}
                >
                  Punya volume besi bekas yang sangat besar?
                </div>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", margin: 0 }}>
                  Untuk pembelian partai besar dari pabrik, kontraktor, atau industri, lihat layanan borongan kami.
                </p>
              </div>
              <Link
                href="/borongan-besi-bekas"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  height: "44px",
                  padding: "0 22px",
                  border: "1px solid var(--gold-500)",
                  borderRadius: "var(--radius-sm)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "var(--gold-500)",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                Lihat Layanan Borongan
                <IconMask icon="arrow-right" size={16} color="var(--gold-500)" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bj-pad-md" style={{ background: "var(--steel-900)", borderTop: "1px solid var(--border-subtle)" }}>
        <div className="bj-container" style={{ maxWidth: "900px" }}>
          <div
            style={{
              background: "var(--steel-sheen)",
              border: "1px solid var(--border-default)",
              borderRadius: "var(--radius-2xl)",
              padding: "52px 48px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                height: "6px",
                background: "var(--hazard-stripes)",
              }}
            />
            <h2 className="bj-h2" style={{ lineHeight: 1.05 }}>
              Siap Jual Besi Bekas Anda?
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "var(--text-body)",
                maxWidth: "480px",
                margin: "16px auto 0",
              }}
            >
              Hubungi kami sekarang via WhatsApp. Proses cepat, pembayaran tunai langsung.
            </p>
            <div
              style={{
                display: "flex",
                gap: "14px",
                justifyContent: "center",
                marginTop: "30px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://wa.me/6287738585311?text=Halo%20Kawitan%20Bejo%20Steel%2C%20saya%20ingin%20menjual%20besi%20bekas."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  height: "50px",
                  padding: "0 30px",
                  background: "var(--gold-500)",
                  color: "var(--text-on-gold)",
                  borderRadius: "var(--radius-sm)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                <IconMask icon="message-circle" size={18} color="var(--text-on-gold)" />
                Saya ingin menjual besi bekas
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
