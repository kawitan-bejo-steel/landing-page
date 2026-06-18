import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader, { IconMask } from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import Reveal from "./components/Reveal";
import ProjectCarousel from "./components/ProjectCarousel";

export const metadata: Metadata = {
  title: { absolute: "Kawitan Bejo Steel — Distributor Besi Baru & Bekas" },
  description:
    "Kawitan Bejo Steel, distributor besi baru & bekas sejak 2018 di Wates, Kulon Progo. Melayani pembelian eceran hingga proyek skala besar. Siap kirim ke seluruh Indonesia.",
  openGraph: {
    title: "Kawitan Bejo Steel — Distributor Besi Baru & Bekas",
    description: "Toko & distributor besi sejak 2018 di Kulon Progo. Beli eceran langsung di gudang atau pesan partai besar. Terima besi bekas dari seluruh Indonesia.",
    url: "/",
  },
};

const FAQS = [
  {
    q: "Apakah pembelian besi bisa diantar?",
    a: "Kami melayani pengantaran sesuai kapasitas dan jarak. Hubungi kami via WhatsApp untuk konfirmasi ongkos kirim ke lokasi Anda.",
  },
  {
    q: "Apakah bisa membeli besi dalam jumlah satuan atau kecil?",
    a: "Ya. Gudang kami juga berfungsi sebagai toko — siapapun bisa datang langsung untuk membeli besi dalam jumlah kecil hingga sedang tanpa minimum order.",
  },
  {
    q: "Apakah Kawitan Bejo Steel menerima penjualan besi bekas?",
    a: "Ya, kami menerima segala jenis besi bekas dari perorangan, proyek konstruksi, maupun industri — termasuk hasil bongkaran gudang dan pabrik.",
  },
  {
    q: "Apakah menerima pesanan besi untuk proyek dalam jumlah besar?",
    a: "Ya, kami siap memasok besi berkualitas untuk kebutuhan skala kecil maupun besar. Sejak 2018 kami telah melayani kontraktor dan industri dari berbagai kota di seluruh Indonesia.",
  },
  {
    q: "Apakah Kawitan Bejo Steel melayani project di luar Yogyakarta?",
    a: "Ya. Kami berpengalaman menangani proyek bongkaran besi di Jabodetabek, Surabaya, Semarang, Morowali, dan siap menggarap project di kota lainnya.",
  },
  {
    q: "Di mana lokasi gudang Kawitan Bejo Steel?",
    a: "Gudang kami berlokasi di RT 16/07 Dalangan, Tempelrejo, Triharjo, Wates, Kulon Progo, D.I. Yogyakarta. Buka Senin–Sabtu pukul 08.00–16.00 WIB.",
  },
];

const SCRAPS = [
  "Besi beton",
  "Pipa & hollow",
  "Besi siku",
  "Besi IWF / WF",
  "H Beam",
  "CNP / HNP",
  "Plat besi",
  "Jenis lainnya",
];

const STEPS = [
  {
    n: 1,
    title: "Hubungi via WhatsApp",
    body: "Kirim info jenis dan perkiraan jumlah besi bekas Anda.",
  },
  {
    n: 2,
    title: "Pengecekan barang",
    body: "Jadwalkan pengecekan di lokasi bila diperlukan.",
  },
  {
    n: 3,
    title: "Penimbangan di lokasi",
    body: "Penimbangan dilakukan langsung dan transparan.",
  },
  {
    n: 4,
    title: "Pembayaran di tempat",
    body: "Pembayaran diberikan langsung setelah penimbangan.",
  },
];

const CATS = [
  {
    name: "Besi Hollow",
    icon: "box",
    tag: "Baru & Bekas",
    desc: "Untuk rangka pagar, kanopi, dan konstruksi ringan.",
  },
  {
    name: "Pipa Besi",
    icon: "circle",
    tag: "Baru & Bekas",
    desc: "Berbagai ukuran untuk kebutuhan konstruksi dan industri.",
  },
  {
    name: "Besi Siku",
    icon: "triangle-right",
    tag: "Baru & Bekas",
    desc: "Untuk rangka dan penguat struktur.",
  },
  {
    name: "Besi Beton",
    icon: "grip",
    tag: "Baru",
    desc: "Untuk kebutuhan cor dan struktur bangunan.",
  },
  {
    name: "Pir / Per Bekas Mobil",
    icon: "recycle",
    tag: "Bekas",
    desc: "Untuk kebutuhan custom dan pengolahan ulang.",
  },
  {
    name: "Atap Galvanis",
    icon: "layers",
    tag: "Baru & Bekas",
    desc: "Untuk atap bangunan, kondisi terjaga.",
  },
];

const REASONS = [
  {
    icon: "layers",
    title: "Stok Lengkap",
    body: "Besi baru dan bekas yang lengkap untuk berbagai kebutuhan.",
  },
  {
    icon: "truck",
    title: "Sanggup Partai Besar",
    body: "Melayani pesanan dan pembelian dalam jumlah besar.",
  },
  {
    icon: "scale",
    title: "Penimbangan Akurat",
    body: "Proses penimbangan yang akurat dengan harga kompetitif.",
  },
  {
    icon: "message-circle",
    title: "Respons Cepat",
    body: "Respons cepat melalui WhatsApp untuk setiap kebutuhan.",
  },
];

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Cara Menjual Besi Bekas ke Kawitan Bejo Steel",
  description: "Proses penjualan besi bekas yang transparan dan mudah — dari kontak awal hingga pembayaran di tempat.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Hubungi via WhatsApp", text: "Kirim info jenis dan perkiraan jumlah besi bekas Anda ke WhatsApp kami di 0877-3858-5311." },
    { "@type": "HowToStep", position: 2, name: "Pengecekan barang", text: "Jadwalkan pengecekan di lokasi bila diperlukan untuk memastikan jenis dan kondisi besi." },
    { "@type": "HowToStep", position: 3, name: "Penimbangan di lokasi", text: "Penimbangan dilakukan langsung di lokasi secara transparan dan akurat." },
    { "@type": "HowToStep", position: 4, name: "Pembayaran di tempat", text: "Pembayaran diberikan langsung setelah proses penimbangan selesai." },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah pembelian besi bisa diantar?",
      acceptedAnswer: { "@type": "Answer", text: "Ya, kami melayani pengantaran sesuai kapasitas dan jarak. Hubungi kami via WhatsApp untuk konfirmasi ongkos kirim ke lokasi Anda." },
    },
    {
      "@type": "Question",
      name: "Apakah Kawitan Bejo Steel menerima pesanan besi untuk pembangunan dalam jumlah besar?",
      acceptedAnswer: { "@type": "Answer", text: "Ya, kami siap memasok besi berkualitas untuk kebutuhan skala kecil maupun besar, termasuk proyek konstruksi dan industri dari seluruh Indonesia." },
    },
    {
      "@type": "Question",
      name: "Apakah Kawitan Bejo Steel menerima penjualan besi tua atau besi bekas?",
      acceptedAnswer: { "@type": "Answer", text: "Ya, kami menerima segala jenis besi bekas dari perorangan, proyek konstruksi, maupun industri — termasuk hasil bongkaran gudang dan pabrik." },
    },
    {
      "@type": "Question",
      name: "Apakah bisa membeli besi dalam jumlah satuan atau kecil?",
      acceptedAnswer: { "@type": "Answer", text: "Ya. Gudang kami juga berfungsi sebagai toko — siapapun bisa datang langsung untuk membeli besi dalam jumlah kecil hingga sedang tanpa minimum order." },
    },
    {
      "@type": "Question",
      name: "Di mana lokasi gudang Kawitan Bejo Steel?",
      acceptedAnswer: { "@type": "Answer", text: "Gudang kami berlokasi di RT 16/07 Dalangan, Tempelrejo, Triharjo, Wates, Kulon Progo, D.I. Yogyakarta 55651. Buka Senin–Sabtu pukul 08.00–16.00 WIB." },
    },
    {
      "@type": "Question",
      name: "Apakah Kawitan Bejo Steel melayani project di luar Yogyakarta?",
      acceptedAnswer: { "@type": "Answer", text: "Ya. Kami berpengalaman menangani proyek bongkaran besi sejak 2018 di berbagai kota, termasuk Jabodetabek, Surabaya, Semarang, dan Morowali. Kami siap menggarap project di kota lainnya di seluruh Indonesia." },
    },
  ],
};

export default function BerandaPage() {
  return (
    <div style={{ background: "var(--surface-base)", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SiteHeader active="Beranda" />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="bj-pad-hero bj-hero-section"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "var(--surface-base)",
        }}
      >
        {/* Desktop watermark */}
        <Image
          src="/logo-mark.png"
          alt="logo"
          aria-hidden
          className="bj-hero-watermark absolute right-0 top-0 w-full h-auto"
          width={640}
          height={640}
          style={{
            width: "60%",
            height: "auto",
            opacity: 0.05,
            pointerEvents: "none",
          }}
        />
        {/* Mobile full-bleed background photo */}
        <Image
          src="/assets/images/depan.jpg"
          className="bj-hero-mobile-bg"
          alt="Background"
          width={900}
          height={600}
          sizes="100vw"
          priority
          aria-hidden
        />

        <div
          className="absolute inset-0 bg-linear-to-b from-black/80 via-black/10 to-transparent pointer-events-none md:hidden"
          style={{ zIndex: 1 }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "6px",
            background: "var(--hazard-stripes)",
            zIndex: 3,
          }}
        />
        <div
          className="bj-container bj-split-hero"
          style={{ position: "relative" }}
        >
          <div>
            <div className="bj-eyebrow bj-seq bj-seq-0" style={{ marginBottom: "18px" }}>
              Kawitan Bejo Steel · Distributor Besi Baru &amp; Bekas
            </div>
            <h1 className="bj-h1-home bj-seq bj-seq-1">
              DISTRIBUTOR BESI,
              <br />
              <span style={{ color: "var(--gold-500)" }}>
                SIAP LAYANI BORONGAN.
              </span>
            </h1>
            <p
              className="bj-seq bj-seq-2"
              style={{
                fontSize: "19px",
                lineHeight: 1.6,
                color: "var(--text-body)",
                maxWidth: "540px",
                marginTop: "22px",
              }}
            >
              Kawitan Bejo Steel menyediakan besi baru dan bekas untuk berbagai
              kebutuhan, sekaligus menerima pembelian besi bekas dalam jumlah
              besar.
            </p>
            <div
              className="bj-hero-ctas bj-seq bj-seq-3"
              style={{
                display: "flex",
                gap: "14px",
                marginTop: "32px",
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/produk"
                className="btn-gold bj-hero-cta-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  height: "48px",
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
                Lihat Produk{" "}
                <IconMask
                  icon="arrow-right"
                  size={18}
                  color="var(--text-on-gold)"
                />
              </Link>
              <a
                href="#jual-besi-bekas"
                className="btn-outline bj-hero-cta-secondary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  height: "48px",
                  padding: "0 28px",
                  background: "transparent",
                  color: "var(--text-strong)",
                  border: "1px solid var(--border-strong)",
                  borderRadius: "var(--radius-sm)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                <IconMask icon="recycle" size={18} color="currentColor" />
                Jual Besi Bekas
              </a>
            </div>
            <div
              className="bj-hero-stats bj-seq bj-seq-4"
              style={{
                display: "flex",
                gap: "40px",
                marginTop: "52px",
                flexWrap: "wrap",
              }}
            >
              {[
                { val: "Baru & Bekas", sub: "Stok Lengkap" },
                { val: "Partai Besar", sub: "Borongan & Eceran" },
                { val: "Respon Cepat", sub: "Via WhatsApp" },
              ].map(({ val, sub }) => (
                <div key={sub} className="bj-hero-stat">
                  <div
                    className="bj-hero-stat-val"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "32px",
                      color: "var(--gold-500)",
                    }}
                  >
                    {val}
                  </div>
                  <div
                    className="bj-hero-stat-sub"
                    style={{
                      fontFamily: "var(--font-cond)",
                      fontWeight: 600,
                      fontSize: "13px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      marginTop: "2px",
                    }}
                  >
                    {sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bj-hero-img bj-seq bj-seq-2" style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: "-12px",
                top: "-12px",
                right: "12px",
                bottom: "12px",
                background: "var(--hazard-stripes)",
                borderRadius: "var(--radius-lg)",
                opacity: 0.9,
              }}
            />
            <Image
              src="/assets/images/depan.jpg"
              alt="Gudang dan stok besi Kawitan Bejo Steel"
              width={1080}
              height={1080}
              style={{
                position: "relative",
                width: "100%",
                height: "440px",
                objectFit: "cover",
                borderRadius: "10px",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Jual Besi Bekas ──────────────────────────────────────────── */}
      <section
        id="jual-besi-bekas"
        className="bj-pad-section"
        style={{ background: "var(--steel-900)", scrollMarginTop: "90px" }}
      >
        <div className="bj-container bj-split-2">
          <div>
            <div style={{ display: "inline-flex", marginBottom: "18px" }}>
              <span
                style={{
                  fontFamily: "var(--font-cond)",
                  fontWeight: 700,
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-on-gold)",
                  background: "var(--gold-500)",
                  padding: "6px 12px",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                Layanan Unggulan
              </span>
            </div>
            <h2 className="bj-h2" style={{ lineHeight: 1.05 }}>
              Jual Besi Bekas Anda kepada Kami
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "var(--text-body)",
                lineHeight: 1.65,
                marginTop: "18px",
                maxWidth: "520px",
              }}
            >
              Kami menerima besi bekas dari perorangan, proyek konstruksi,
              maupun industri. Kami juga melayani pembelian besi bekas dalam
              jumlah besar untuk kebutuhan borongan, termasuk hasil bongkaran
              gudang atau pabrik.
            </p>
            <div
              style={{
                fontFamily: "var(--font-cond)",
                fontWeight: 600,
                fontSize: "13px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginTop: "28px",
                marginBottom: "12px",
              }}
            >
              Jenis besi bekas yang diterima
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                maxWidth: "540px",
              }}
            >
              {SCRAPS.map((s) => (
                <span
                  key={s}
                  style={{
                    fontSize: "14px",
                    color: "var(--text-body)",
                    background: "var(--surface-raised)",
                    border: "1px solid var(--border-subtle)",
                    padding: "7px 14px",
                    borderRadius: "999px",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
            <div style={{ marginTop: "32px" }}>
              <a
                href="https://wa.me/6287738585311?text=Halo%20Kawitan%20Bejo%20Steel%2C%20saya%20ingin%20menjual%20besi%20bekas."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  height: "48px",
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
                <IconMask
                  icon="message-circle"
                  size={18}
                  color="var(--text-on-gold)"
                />
                Hubungi untuk Jual Besi Bekas
              </a>
            </div>
          </div>
          <div
            style={{
              background: "var(--surface-raised)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
            }}
          >
            <div
              style={{ background: "var(--hazard-stripes)", height: "4px" }}
            />
            <div style={{ padding: "32px" }}>
              <div className="bj-eyebrow" style={{ marginBottom: "20px" }}>
                Cara Kerjanya
              </div>
              {STEPS.map((st, i) => (
                <div
                  key={st.n}
                  style={{
                    display: "flex",
                    gap: "16px",
                    padding: "14px 0",
                    borderBottom:
                      i < STEPS.length - 1
                        ? "1px solid var(--border-subtle)"
                        : "none",
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: "34px",
                      height: "34px",
                      borderRadius: "var(--radius-sm)",
                      background: "var(--surface-sunken)",
                      border: "1px solid var(--border-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "15px",
                      color: "var(--gold-500)",
                    }}
                  >
                    {st.n}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "16px",
                        color: "var(--text-strong)",
                      }}
                    >
                      {st.title}
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "var(--text-muted)",
                        lineHeight: 1.5,
                        marginTop: "3px",
                      }}
                    >
                      {st.body}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Katalog ──────────────────────────────────────────────────── */}
      <section
        className="bj-pad-section"
        style={{ background: "var(--steel-850)" }}
      >
        <div className="bj-container">
          <div className="bj-eyebrow" style={{ marginBottom: "10px" }}>
            Katalog Material
          </div>
          <h2 className="bj-h2" style={{ marginBottom: "14px" }}>
            Produk yang Kami Sediakan
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "24px",
              marginBottom: "32px",
              flexWrap: "wrap",
            }}
          >
            <p
              style={{
                fontSize: "16px",
                color: "var(--text-muted)",
                maxWidth: "620px",
                margin: 0,
              }}
            >
              Tersedia besi baru maupun bekas untuk berbagai kebutuhan, dari
              skala perorangan hingga proyek besar.
            </p>
            <Link
              href="/produk"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "var(--gold-500)",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "15px",
                whiteSpace: "nowrap",
                flexShrink: 0,
                textDecoration: "none",
              }}
            >
              Lihat Semua Produk{" "}
              <IconMask icon="arrow-right" size={16} color="var(--gold-500)" />
            </Link>
          </div>
          <div className="bj-grid-3">
            {CATS.map((c, i) => (
              <Reveal key={c.name} delay={i * 60} style={{ height: "100%" }}>
              <Link
                href="/produk"
                className="cat-card"
                style={{
                  position: "relative",
                  background: "var(--surface-raised)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-lg)",
                  padding: "24px",
                  boxShadow: "var(--shadow-md)",
                  color: "inherit",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "54px",
                      height: "54px",
                      borderRadius: "var(--radius-md)",
                      background: "var(--surface-sunken)",
                      border: "1px solid var(--border-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconMask icon={c.icon} size={27} color="var(--gold-500)" />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-cond)",
                      fontWeight: 700,
                      fontSize: "11px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--gold-300)",
                      background:
                        "color-mix(in srgb, var(--gold-500) 18%, var(--steel-800))",
                      padding: "3px 9px",
                      borderRadius: "var(--radius-sm)",
                    }}
                  >
                    {c.tag}
                  </span>
                </div>
                <h3 style={{ fontSize: "21px", marginTop: "18px" }}>
                  {c.name}
                </h3>
                <div
                  style={{
                    fontSize: "14px",
                    color: "var(--text-muted)",
                    marginTop: "8px",
                    lineHeight: 1.55,
                  }}
                >
                  {c.desc}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "18px",
                    color: "var(--gold-500)",
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "13px",
                  }}
                >
                  Tanya stok{" "}
                  <IconMask
                    icon="arrow-right"
                    size={14}
                    color="var(--gold-500)"
                  />
                </div>
              </Link>
              </Reveal>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "24px",
              color: "var(--text-faint)",
              fontSize: "14px",
            }}
          >
            <IconMask icon="info" size={16} color="var(--text-faint)" />
            Stok dan harga mengikuti kondisi pasar. Hubungi WhatsApp untuk info
            terbaru.
          </div>
        </div>
      </section>

      {/* ── Berpengalaman ────────────────────────────────────────────── */}
      <section style={{ background: "var(--surface-base)", padding: 0 }}>
        <div className="bj-container bj-split-exp">
          <ProjectCarousel />
          <div style={{ padding: "80px 40px 80px 56px" }}>
            <div className="bj-eyebrow" style={{ marginBottom: "12px" }}>
              Pengalaman
            </div>
            <h2 className="bj-h2" style={{ lineHeight: 1.06 }}>
              Berpengalaman Menangani Proyek Skala Besar
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "var(--text-body)",
                lineHeight: 1.65,
                marginTop: "18px",
                maxWidth: "480px",
              }}
            >
              Sejak 2018, Kawitan Bejo Steel berpengalaman dalam pekerjaan
              bongkar pabrik dan proyek sejenis — mampu menangani ribuan ton
              per proyek. Telah melayani project di Yogyakarta, Jabodetabek,
              Surabaya, Semarang, Morowali, dan siap menggarap project di
              kota lainnya di seluruh Indonesia.
            </p>
            <Link
              href="/tentang"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "26px",
                color: "var(--gold-500)",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
              }}
            >
              Selengkapnya tentang kami{" "}
              <IconMask icon="arrow-right" size={16} color="var(--gold-500)" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Kenapa Memilih Kami ──────────────────────────────────────── */}
      <section
        className="bj-pad-section"
        style={{ background: "var(--steel-900)" }}
      >
        <div className="bj-container">
          <div className="bj-eyebrow" style={{ marginBottom: "10px" }}>
            Kenapa Memilih Kami
          </div>
          <h2
            className="bj-h2"
            style={{ marginBottom: "40px", maxWidth: "620px" }}
          >
            Mitra Besi yang Bisa Diandalkan
          </h2>
          <div className="bj-grid-4">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={i * 70}>
              <div>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "var(--radius-md)",
                    background: "var(--gold-grad)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  <IconMask icon={r.icon} size={24} color="var(--steel-950)" />
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  {r.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {r.body}
                </p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bj-pad-section" style={{ background: "var(--surface-base)" }}>
        <div className="bj-container" style={{ maxWidth: "860px" }}>
          <div className="bj-eyebrow" style={{ marginBottom: "10px" }}>FAQ</div>
          <h2 className="bj-h2" style={{ marginBottom: "40px" }}>
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <div>
            {FAQS.map((item, i) => (
              <Reveal key={item.q} delay={i * 50}>
                <div
                  style={{
                    borderBottom: "1px solid var(--border-subtle)",
                    padding: "24px 0",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "18px",
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      color: "var(--text-strong)",
                      lineHeight: 1.4,
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: "var(--gold-500)", flexShrink: 0 }}>Q</span>
                    {item.q}
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-muted)",
                      lineHeight: 1.7,
                      marginTop: "10px",
                      paddingLeft: "30px",
                      maxWidth: "720px",
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section
        className="bj-pad-section"
        style={{ background: "var(--surface-base)" }}
      >
        <div className="bj-container" style={{ maxWidth: "1000px" }}>
          <div
            style={{
              background: "var(--steel-sheen)",
              border: "1px solid var(--border-default)",
              borderRadius: "var(--radius-2xl)",
              padding: "56px 48px",
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
              Butuh Besi atau Ingin Menjual Besi Bekas?
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "var(--text-body)",
                maxWidth: "540px",
                margin: "16px auto 0",
              }}
            >
              Hubungi kami untuk konsultasi kebutuhan Anda. Tim kami siap
              membantu via WhatsApp.
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
                href="https://wa.me/6287738585311?text=Halo%20Kawitan%20Bejo%20Steel%2C%20saya%20ingin%20konsultasi%20kebutuhan%20besi."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  height: "48px",
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
                <IconMask
                  icon="message-circle"
                  size={18}
                  color="var(--text-on-gold)"
                />
                Hubungi via WhatsApp
              </a>
              <Link
                href="/kontak"
                className="btn-outline"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  height: "48px",
                  padding: "0 28px",
                  background: "transparent",
                  color: "var(--text-strong)",
                  border: "1px solid var(--border-strong)",
                  borderRadius: "var(--radius-sm)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                Lihat Kontak
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
