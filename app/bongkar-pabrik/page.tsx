import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader, { IconMask } from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Reveal from "../components/Reveal";
import { BASE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Jasa Bongkar Pabrik & Gudang — Kawitan Bejo Steel",
  description:
    "Jasa bongkar pabrik, gudang, dan konstruksi baja berskala besar. Berpengalaman di Yogyakarta, Jabodetabek, Surabaya, Semarang, dan Morowali. Hubungi kami untuk konsultasi proyek.",
  openGraph: {
    title: "Jasa Bongkar Pabrik & Gudang Besi — Kawitan Bejo Steel",
    description:
      "Beli sekaligus bongkar besi dari pabrik atau gudang yang tutup. Tim berpengalaman, siap ke seluruh Indonesia. Sudah menangani proyek di Yogyakarta, Jabodetabek, Surabaya, Semarang, Morowali.",
    url: `${BASE_URL}/bongkar-pabrik`,
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Jasa Bongkar Pabrik dan Gudang",
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
    "Pembelian sekaligus bongkar besi dari pabrik, gudang, dan konstruksi baja besar. Melayani seluruh Indonesia.",
};

const JENIS_PROYEK = [
  { icon: "building-2", title: "Bongkar Pabrik", desc: "Pembongkaran total atau sebagian struktur besi pabrik yang akan dialihfungsikan atau ditutup." },
  { icon: "store", title: "Bongkar Gudang", desc: "Pembelian dan pembongkaran rangka besi, atap baja, dan material gudang lainnya." },
  { icon: "layers", title: "Konstruksi Baja Besar", desc: "Bongkar dan beli material dari proyek konstruksi baja selesai atau bangunan yang direnovasi." },
  { icon: "truck", title: "Aset Besi Perusahaan", desc: "Pembelian aset besi dan baja milik perusahaan dalam jumlah besar, termasuk mesin dan peralatan bekas." },
];

const KOTA = [
  "Yogyakarta & DIY",
  "Jabodetabek",
  "Surabaya",
  "Semarang",
  "Morowali",
  "Dan kota lainnya",
];

const STEPS = [
  { num: "01", label: "Konsultasi", desc: "Ceritakan kondisi proyek Anda via WhatsApp. Kami akan bantu taksir potensi nilai besi." },
  { num: "02", label: "Survey Lokasi", desc: "Tim kami datang ke lokasi untuk menilai langsung jenis, volume, dan kondisi material." },
  { num: "03", label: "Penawaran Harga", desc: "Kami berikan penawaran harga total yang transparan berdasarkan hasil survey." },
  { num: "04", label: "Pelaksanaan", desc: "Proses bongkar dilakukan oleh tim kami dengan cepat, aman, dan bertanggung jawab." },
  { num: "05", label: "Pembayaran", desc: "Pembayaran dilakukan sesuai kesepakatan, bisa DP di awal atau sekaligus setelah selesai." },
];

export default function BongkarPabrik() {
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
            Layanan Proyek Besar
          </div>
          <h1 className="bj-h1-page">
            Jasa Bongkar Pabrik<br />&amp; Gudang Besi
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
            Berpengalaman menangani proyek bongkar dan beli besi skala besar dari pabrik,
            gudang, dan konstruksi baja. Siap bergerak ke seluruh Indonesia.
          </p>
          <div style={{ display: "flex", gap: "14px", marginTop: "32px", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/6287738585311?text=Halo%20Kawitan%20Bejo%20Steel%2C%20saya%20ingin%20konsultasi%20proyek%20bongkar%20pabrik."
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
              Konsultasi Proyek via WhatsApp
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

      {/* Apa yang kami lakukan */}
      <section className="bj-pad-sm" style={{ background: "var(--surface-base)" }}>
        <div className="bj-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
            <div>
              <Reveal>
                <div className="bj-eyebrow" style={{ marginBottom: "12px" }}>Tentang Layanan</div>
                <h2 className="bj-h2" style={{ marginBottom: "20px" }}>Kami Beli Sekaligus Bongkar</h2>
                <p style={{ fontSize: "16px", color: "var(--text-body)", lineHeight: 1.7, marginBottom: "20px" }}>
                  Kawitan Bejo Steel tidak hanya membeli besi bekas &mdash; kami juga menangani
                  proses pembongkaran langsung dari lokasi pabrik atau gudang Anda.
                </p>
                <p style={{ fontSize: "16px", color: "var(--text-body)", lineHeight: 1.7, marginBottom: "20px" }}>
                  Dengan tim berpengalaman, kami mampu menangani proyek ribuan ton per penugasan.
                  Proses cepat, aman, dan bertanggung jawab.
                </p>
                <p style={{ fontSize: "16px", color: "var(--text-body)", lineHeight: 1.7 }}>
                  Tidak perlu repot mencari pembeli dan kontraktor bongkar secara terpisah.
                  Satu pihak, satu proses, satu harga.
                </p>
              </Reveal>
            </div>
            <Reveal delay={80}>
              <div style={{ position: "relative", height: 380, borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
                <Image
                  src="/assets/images/layanan/proses_bongkar.jpg"
                  alt="Proses bongkar pabrik oleh tim Kawitan Bejo Steel"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Jenis proyek */}
      <section className="bj-pad-sm" style={{ background: "var(--steel-900)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="bj-container">
          <Reveal>
            <div className="bj-eyebrow" style={{ marginBottom: "12px" }}>Jenis Proyek</div>
            <h2 className="bj-h2" style={{ marginBottom: "40px" }}>Proyek yang Kami Tangani</h2>
          </Reveal>
          <div className="bj-grid-2" style={{ gap: "20px" }}>
            {JENIS_PROYEK.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "flex-start",
                    padding: "28px",
                    background: "var(--surface-raised)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-xl)",
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: "52px",
                      height: "52px",
                      borderRadius: "var(--radius-md)",
                      background: "color-mix(in srgb, var(--gold-500) 15%, var(--steel-900))",
                      border: "1px solid var(--border-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconMask icon={item.icon} size={26} color="var(--gold-500)" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "17px",
                        fontWeight: 700,
                        color: "var(--text-strong)",
                        marginBottom: "8px",
                      }}
                    >
                      {item.title}
                    </div>
                    <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wilayah */}
      <section className="bj-pad-sm" style={{ background: "var(--surface-base)" }}>
        <div className="bj-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
            <Reveal>
              <div className="bj-eyebrow" style={{ marginBottom: "12px" }}>Jangkauan</div>
              <h2 className="bj-h2" style={{ marginBottom: "16px" }}>Siap ke Seluruh Indonesia</h2>
              <p style={{ fontSize: "16px", color: "var(--text-body)", lineHeight: 1.7, marginBottom: "28px" }}>
                Kami tidak terbatas pada area Yogyakarta. Sudah berpengalaman
                mengerjakan proyek bongkar pabrik dan gudang di berbagai kota:
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "24px" }}>
                {KOTA.map((kota) => (
                  <span
                    key={kota}
                    style={{
                      fontFamily: "var(--font-cond)",
                      fontWeight: 700,
                      fontSize: "13px",
                      letterSpacing: "0.04em",
                      color: "var(--gold-300)",
                      background: "color-mix(in srgb, var(--gold-500) 15%, var(--steel-900))",
                      border: "1px solid var(--border-subtle)",
                      padding: "6px 14px",
                      borderRadius: "var(--radius-sm)",
                    }}
                  >
                    {kota}
                  </span>
                ))}
              </div>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Punya proyek di kota lain? Konsultasikan dengan kami &mdash; kami siap survey ke lokasi Anda.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <div style={{ position: "relative", height: 360, borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
                <Image
                  src="/assets/images/galeri/galeri_1.jpg"
                  alt="Proyek bongkar pabrik Kawitan Bejo Steel"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Proses kerja */}
      <section className="bj-pad-sm" style={{ background: "var(--steel-900)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="bj-container">
          <Reveal>
            <div className="bj-eyebrow" style={{ marginBottom: "12px" }}>Alur Kerja</div>
            <h2 className="bj-h2" style={{ marginBottom: "40px" }}>Proses dari Awal ke Selesai</h2>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "760px" }}>
            {STEPS.map((step, i) => (
              <Reveal key={step.num} delay={i * 50}>
                <div
                  style={{
                    display: "flex",
                    gap: "24px",
                    alignItems: "flex-start",
                    padding: "22px 26px",
                    background: "var(--surface-raised)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-lg)",
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      fontFamily: "var(--font-mono)",
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "var(--gold-500)",
                      opacity: 0.8,
                      minWidth: "36px",
                    }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "var(--text-strong)",
                        marginBottom: "6px",
                      }}
                    >
                      {step.label}
                    </div>
                    <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Galeri proyek */}
      <section className="bj-pad-sm" style={{ background: "var(--surface-base)" }}>
        <div className="bj-container">
          <Reveal>
            <div className="bj-eyebrow" style={{ marginBottom: "12px" }}>Dokumentasi</div>
            <h2 className="bj-h2" style={{ marginBottom: "8px" }}>Galeri Proyek</h2>
            <p style={{ fontSize: "16px", color: "var(--text-muted)", marginBottom: "32px" }}>
              Sebagian dokumentasi proyek bongkar pabrik dan gudang yang pernah kami kerjakan.
            </p>
          </Reveal>
          <div className="bj-grid-3" style={{ gap: "16px" }}>
            {[
              { src: "/assets/images/project_1.jpg", alt: "Proyek bongkar pabrik 1 — Kawitan Bejo Steel" },
              { src: "/assets/images/project_2.jpg", alt: "Proyek bongkar pabrik 2 — Kawitan Bejo Steel" },
              { src: "/assets/images/project_3.jpg", alt: "Proyek bongkar pabrik 3 — Kawitan Bejo Steel" },
            ].map((img, i) => (
              <Reveal key={img.src} delay={i * 60}>
                <div style={{ position: "relative", height: 240, borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <Link
                href="/galeri"
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
                Lihat galeri lengkap
                <IconMask icon="arrow-right" size={16} color="var(--gold-500)" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cross-links */}
      <section className="bj-pad-sm" style={{ background: "var(--steel-900)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="bj-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <Reveal>
              <div
                style={{
                  background: "var(--surface-raised)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-xl)",
                  padding: "24px 28px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "var(--text-strong)",
                    marginBottom: "8px",
                  }}
                >
                  Punya sisa scrap setelah bongkar?
                </div>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "16px" }}>
                  Besi bekas sisa bongkaran dalam volume besar bisa langsung kami beli dengan harga borongan.
                </p>
                <Link
                  href="/borongan-besi-bekas"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "14px",
                    color: "var(--gold-500)",
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Layanan Borongan
                  <IconMask icon="arrow-right" size={14} color="var(--gold-500)" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={60}>
              <div
                style={{
                  background: "var(--surface-raised)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-xl)",
                  padding: "24px 28px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "var(--text-strong)",
                    marginBottom: "8px",
                  }}
                >
                  Hanya punya sedikit besi bekas?
                </div>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "16px" }}>
                  Tidak perlu proyek besar. Kami juga menerima besi bekas satuan dari perorangan.
                </p>
                <Link
                  href="/jual-besi-bekas"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "14px",
                    color: "var(--gold-500)",
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Jual Besi Bekas
                  <IconMask icon="arrow-right" size={14} color="var(--gold-500)" />
                </Link>
              </div>
            </Reveal>
          </div>
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
              Ada Proyek Bongkar Pabrik?
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "var(--text-body)",
                maxWidth: "520px",
                margin: "16px auto 0",
              }}
            >
              Hubungi kami sekarang untuk konsultasi gratis. Kami siap survey ke lokasi Anda.
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
                href="https://wa.me/6287738585311?text=Halo%20Kawitan%20Bejo%20Steel%2C%20saya%20ingin%20konsultasi%20proyek%20bongkar%20pabrik."
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
                Konsultasi Proyek Bongkar
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
