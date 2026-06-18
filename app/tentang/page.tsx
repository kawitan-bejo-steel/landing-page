import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader, { IconMask } from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Kawitan Bejo Steel, didirikan Suryana sejak 2018. Toko sekaligus distributor besi di Wates, Kulon Progo — melayani pembelian eceran hingga proyek bongkaran skala besar dari seluruh Indonesia.",
  openGraph: {
    title: "Tentang Kawitan Bejo Steel",
    description: "Toko sekaligus distributor besi di Kulon Progo. Melayani pembelian eceran hingga proyek skala besar, dengan pengalaman menangani bongkaran industri dari seluruh Indonesia.",
    url: "/tentang",
  },
};

const BLOCKS = [
  {
    icon: "store",
    title: "Toko & Distributor",
    body: "Gudang kami juga berfungsi sebagai toko — siapapun dapat datang langsung untuk membeli material besi dalam jumlah kecil hingga sedang tanpa minimum order. Untuk kebutuhan partai besar atau proyek, kami siap melayani pengadaan dalam volume tinggi dengan harga yang kompetitif.",
  },
  {
    icon: "building-2",
    title: "Kapasitas Proyek Besar",
    body: "Sejak 2018, kami berpengalaman menangani pengadaan dan pembelian material bekas dari proyek bongkaran skala besar — mampu menangani ribuan ton per proyek. Telah melayani kontraktor dan industri di Yogyakarta, Jabodetabek, Surabaya, Semarang, Morowali, dan siap menggarap project di seluruh Indonesia.",
  },
  {
    icon: "handshake",
    title: "Komitmen Kami",
    body: "Setiap transaksi dilandasi transparansi penuh — mulai dari penimbangan yang akurat, penetapan harga yang wajar, hingga kejelasan proses serah terima. Kepercayaan pelanggan, baik pembeli eceran maupun mitra bisnis jangka panjang, adalah prioritas kami.",
  },
];

export default function TentangPage() {
  return (
    <div style={{ background: "var(--surface-base)", minHeight: "100vh" }}>
      <SiteHeader active="Tentang" />

      {/* Hero */}
      <section
        className="bj-pad-section"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "var(--surface-base)",
          paddingBottom: "56px",
        }}
      >
        <Image
          src="/logo-mark.png"
          alt=""
          aria-hidden
          width={560}
          height={560}
          style={{
            position: "absolute",
            right: "-140px",
            top: "-60px",
            width: "560px",
            height: "auto",
            opacity: 0.05,
            pointerEvents: "none",
          }}
        />
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
        <div
          className="bj-container bj-split-about"
          style={{ position: "relative" }}
        >
          <div>
            <div className="bj-eyebrow" style={{ marginBottom: "14px" }}>
              Tentang Kami
            </div>
            <h1 className="bj-h1-page">Toko & Distributor Besi,<br />dari Eceran hingga Borongan</h1>
            <p
              style={{
                fontSize: "18px",
                color: "var(--text-body)",
                lineHeight: 1.65,
                marginTop: "22px",
                maxWidth: "560px",
              }}
            >
              Didirikan oleh Suryana sejak 2018, Kawitan Bejo Steel hadir
              sebagai toko sekaligus distributor material besi — melayani
              pembelian satuan langsung di gudang maupun pengadaan skala besar
              untuk proyek konstruksi dan industri. Berbasis di Wates, Kulon
              Progo, D.I. Yogyakarta, dengan pengalaman menangani project
              bongkaran besi di Yogyakarta, Jabodetabek, Surabaya, Semarang,
              Morowali, dan siap melayani kota lainnya di seluruh Indonesia.
            </p>
          </div>
          <div style={{ position: "relative" }}>
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
              src="/assets/images/galeri/depan.jpg"
              alt="Tampak depan gudang Kawitan Bejo Steel di Wates, Kulon Progo"
              width={1000}
              height={380}
              style={{
                position: "relative",
                width: "100%",
                height: "380px",
                objectFit: "cover",
                borderRadius: "10px",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      {/* Info blocks */}
      <section className="bj-pad-md" style={{ background: "var(--steel-900)" }}>
        <div className="bj-container">
          <div className="bj-grid-3">
            {BLOCKS.map((b, i) => (
              <Reveal key={b.title} delay={i * 80} style={{ height: "100%" }}>
                <div
                  style={{
                    position: "relative",
                    background: "var(--surface-raised)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                    boxShadow: "var(--shadow-md)",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      background: "var(--hazard-stripes)",
                      height: "4px",
                    }}
                  />
                  <div style={{ padding: "28px" }}>
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "var(--radius-md)",
                        background: "var(--gold-grad)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "18px",
                      }}
                    >
                      <IconMask
                        icon={b.icon}
                        size={26}
                        color="var(--steel-950)"
                      />
                    </div>
                    <h3 style={{ fontSize: "22px" }}>{b.title}</h3>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "var(--text-muted)",
                        lineHeight: 1.65,
                        margin: "12px 0 0",
                      }}
                    >
                      {b.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="bj-pad-md"
        style={{ background: "var(--surface-base)" }}
      >
        <div className="bj-container" style={{ maxWidth: "1000px" }}>
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
              Butuh Besi? Datang atau Hubungi Kami
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "var(--text-body)",
                maxWidth: "560px",
                margin: "16px auto 0",
              }}
            >
              Beli satuan langsung di gudang, atau konsultasikan kebutuhan
              proyek skala besar Anda. Kami siap melayani semua skala — dari
              perorangan hingga kontraktor dan industri.
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
                href="https://wa.me/6287738585311?text=Halo%20Kawitan%20Bejo%20Steel%2C%20saya%20ingin%20berkonsultasi."
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
                href="/produk"
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
                Lihat Produk
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
