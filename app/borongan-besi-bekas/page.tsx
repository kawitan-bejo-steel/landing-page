import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader, { IconMask } from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Reveal from "../components/Reveal";
import { BASE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Borongan Besi Bekas Volume Besar — Kawitan Bejo Steel",
  description:
    "Pembelian besi bekas volume besar untuk pabrik, industri, kontraktor, dan pengepul. Harga borongan kompetitif, bisa survey lokasi, siap ke seluruh Indonesia.",
  openGraph: {
    title: "Borongan Besi Bekas Volume Besar — Kawitan Bejo Steel",
    description:
      "Kami menerima pembelian scrap besi dan baja dalam jumlah besar dari pabrik, industri, kontraktor, dan pengepul. Bisa survey ke lokasi Anda.",
    url: `${BASE_URL}/borongan-besi-bekas`,
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pembelian Besi Bekas Volume Besar (Borongan)",
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
  areaServed: "Indonesia",
  description:
    "Pembelian scrap besi dan baja dalam volume besar dari pabrik, industri, kontraktor, dan pengepul. Melayani seluruh Indonesia.",
};

const UNTUK_SIAPA = [
  {
    icon: "building-2",
    title: "Pabrik & Industri",
    desc: "Punya scrap besi dari proses produksi atau mesin yang sudah tidak terpakai? Kami beli langsung dalam jumlah besar.",
  },
  {
    icon: "truck",
    title: "Kontraktor Selesai Proyek",
    desc: "Sisa material besi dari proyek konstruksi — beton, hollow, baja ringan, IWF — kami tampung sekaligus.",
  },
  {
    icon: "handshake",
    title: "Pengepul & Agen",
    desc: "Butuh offtaker yang bisa serap volume besar secara konsisten? Kami siap bermitra untuk jangka panjang.",
  },
];

const KEUNGGULAN = [
  {
    icon: "scale",
    title: "Makin Besar, Makin Baik Harganya",
    desc: "Pembelian volume besar mendapat harga yang lebih kompetitif dibanding jual satuan.",
  },
  {
    icon: "navigation",
    title: "Bisa Survey ke Lokasi Anda",
    desc: "Tim kami siap datang ke lokasi untuk penaksiran langsung, termasuk di luar area Yogyakarta.",
  },
  {
    icon: "credit-card",
    title: "Pembayaran Fleksibel",
    desc: "Skema pembayaran bisa disesuaikan: DP di awal, bertahap, atau setelah selesai sesuai kesepakatan.",
  },
  {
    icon: "truck",
    title: "Handle Logistik Pengangkutan",
    desc: "Untuk proyek tertentu, kami bisa mengurus pengangkutan material dari lokasi Anda ke gudang kami.",
  },
];

const MATERIAL = [
  "Besi beton & tulangan",
  "Besi hollow & pipa",
  "Besi siku & CNP",
  "IWF / H-Beam / WF",
  "Plat besi & plat strip",
  "Baja ringan",
  "Stainless steel bekas",
  "Per / pir mobil",
  "Atap seng & galvanis",
  "Scrap campuran lainnya",
];

const KOTA = [
  "Yogyakarta & DIY",
  "Jabodetabek",
  "Surabaya",
  "Semarang",
  "Morowali",
  "Dan seluruh Indonesia",
];

export default function BoronganBesiBekas() {
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
            Pembelian Partai Besar
          </div>
          <h1 className="bj-h1-page">
            Borongan Besi Bekas<br />Volume Besar
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "var(--text-body)",
              lineHeight: 1.6,
              marginTop: "20px",
              maxWidth: "640px",
            }}
          >
            Untuk industri, pabrik, kontraktor, dan pengepul yang butuh offtaker
            besi bekas dalam jumlah besar. Harga kompetitif, bisa survey langsung ke lokasi,
            siap ke seluruh Indonesia.
          </p>
          <div style={{ display: "flex", gap: "14px", marginTop: "32px", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/6287738585311?text=Halo%20Kawitan%20Bejo%20Steel%2C%20saya%20ingin%20jual%20besi%20bekas%20volume%20besar."
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
              Saya ingin jual volume besar
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

      {/* Untuk siapa */}
      <section className="bj-pad-sm" style={{ background: "var(--surface-base)" }}>
        <div className="bj-container">
          <Reveal>
            <div className="bj-eyebrow" style={{ marginBottom: "12px" }}>Target Layanan</div>
            <h2 className="bj-h2" style={{ marginBottom: "8px" }}>Layanan Ini untuk Siapa?</h2>
            <p style={{ fontSize: "16px", color: "var(--text-muted)", maxWidth: "560px", marginBottom: "40px" }}>
              Kami melayani pihak yang memiliki scrap besi dalam jumlah besar dan butuh proses cepat.
            </p>
          </Reveal>
          <div className="bj-grid-3" style={{ gap: "20px" }}>
            {UNTUK_SIAPA.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div
                  style={{
                    padding: "32px 28px",
                    background: "var(--surface-raised)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-xl)",
                    height: "100%",
                  }}
                >
                  <div style={{ background: "var(--hazard-stripes)", height: "4px", borderRadius: "2px", marginBottom: "24px" }} />
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "var(--radius-md)",
                      background: "color-mix(in srgb, var(--gold-500) 15%, var(--steel-900))",
                      border: "1px solid var(--border-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "18px",
                    }}
                  >
                    <IconMask icon={item.icon} size={26} color="var(--gold-500)" />
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "17px",
                      fontWeight: 700,
                      color: "var(--text-strong)",
                      marginBottom: "10px",
                    }}
                  >
                    {item.title}
                  </div>
                  <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="bj-pad-sm" style={{ background: "var(--steel-900)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="bj-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
            <div>
              <Reveal>
                <div className="bj-eyebrow" style={{ marginBottom: "12px" }}>Keunggulan</div>
                <h2 className="bj-h2" style={{ marginBottom: "32px" }}>Yang Membedakan dari Jual Biasa</h2>
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
                          background: "color-mix(in srgb, var(--gold-500) 15%, var(--steel-800))",
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
                  src="/assets/images/galeri/galeri_2.jpg"
                  alt="Pembelian besi bekas volume besar — Kawitan Bejo Steel"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Material & Area */}
      <section className="bj-pad-sm" style={{ background: "var(--surface-base)" }}>
        <div className="bj-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
            {/* Material */}
            <Reveal>
              <div
                style={{
                  padding: "32px",
                  background: "var(--surface-raised)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-xl)",
                  height: "100%",
                }}
              >
                <div className="bj-eyebrow" style={{ marginBottom: "12px" }}>Material</div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "var(--text-strong)",
                    marginBottom: "20px",
                  }}
                >
                  Jenis Material yang Kami Terima
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {MATERIAL.map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "15px",
                        color: "var(--text-body)",
                      }}
                    >
                      <div
                        style={{
                          flexShrink: 0,
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "var(--gold-500)",
                        }}
                      />
                      {item}
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: "13px", color: "var(--text-faint)", marginTop: "16px", lineHeight: 1.6 }}>
                  Punya jenis lain? Tanya dulu via WhatsApp.
                </p>
              </div>
            </Reveal>

            {/* Area */}
            <Reveal delay={80}>
              <div
                style={{
                  padding: "32px",
                  background: "var(--surface-raised)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-xl)",
                  height: "100%",
                }}
              >
                <div className="bj-eyebrow" style={{ marginBottom: "12px" }}>Jangkauan</div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "var(--text-strong)",
                    marginBottom: "16px",
                  }}
                >
                  Area yang Kami Jangkau
                </h3>
                <p style={{ fontSize: "15px", color: "var(--text-body)", lineHeight: 1.7, marginBottom: "20px" }}>
                  Tidak terbatas Yogyakarta. Kami sudah menangani pembelian borongan di:
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
                  {KOTA.map((kota) => (
                    <span
                      key={kota}
                      style={{
                        fontFamily: "var(--font-cond)",
                        fontWeight: 700,
                        fontSize: "12px",
                        letterSpacing: "0.04em",
                        color: "var(--gold-300)",
                        background: "color-mix(in srgb, var(--gold-500) 15%, var(--steel-900))",
                        border: "1px solid var(--border-subtle)",
                        padding: "5px 12px",
                        borderRadius: "var(--radius-sm)",
                      }}
                    >
                      {kota}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    background: "var(--surface-sunken)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-md)",
                    padding: "14px 16px",
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                  }}
                >
                  <IconMask icon="info" size={18} color="var(--gold-500)" />
                  <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                    Survey ke lokasi di luar DIY tersedia untuk volume yang memadai. Hubungi kami untuk konfirmasi.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Cross-link */}
      <section className="bj-pad-sm" style={{ background: "var(--steel-900)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="bj-container">
          <Reveal>
            <div
              style={{
                background: "var(--surface-raised)",
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
                  Pabrik mau tutup atau direnovasi total?
                </div>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", margin: 0 }}>
                  Kami juga menangani bongkar pabrik dan gudang &mdash; beli sekaligus bongkar, satu proses.
                </p>
              </div>
              <Link
                href="/bongkar-pabrik"
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
                Lihat Jasa Bongkar Pabrik
                <IconMask icon="arrow-right" size={16} color="var(--gold-500)" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bj-pad-md" style={{ background: "var(--surface-base)" }}>
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
              Siap Jual Besi Bekas Volume Besar?
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "var(--text-body)",
                maxWidth: "520px",
                margin: "16px auto 0",
              }}
            >
              Ceritakan volume dan jenis material Anda. Kami berikan penawaran harga terbaik.
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
                href="https://wa.me/6287738585311?text=Halo%20Kawitan%20Bejo%20Steel%2C%20saya%20ingin%20jual%20besi%20bekas%20volume%20besar."
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
                Saya ingin jual volume besar
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
