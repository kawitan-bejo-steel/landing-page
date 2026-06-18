import type { Metadata } from "next";
import SiteHeader, { IconMask } from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description:
    "Hubungi Kawitan Bejo Steel untuk pembelian besi, penjualan besi bekas, atau konsultasi kebutuhan proyek.",
  openGraph: {
    title: "Kontak Kawitan Bejo Steel",
    description: "Hubungi kami via WhatsApp, telepon, atau kunjungi gudang di Wates, Kulon Progo, D.I. Yogyakarta.",
    url: "/kontak",
  },
};

const CONTACTS = [
  {
    icon: "message-circle",
    label: "WhatsApp",
    value: "0877-3858-5311",
    sub: "Cara tercepat untuk respons — klik untuk chat langsung.",
    href: "https://wa.me/6287738585311?text=Halo%20Kawitan%20Bejo%20Steel%2C%20saya%20ingin%20bertanya.",
    external: true,
  },
  {
    icon: "phone",
    label: "Telepon",
    value: "0877-3858-5311",
    sub: "Hubungi langsung untuk pertanyaan cepat.",
    href: "tel:087738585311",
    external: false,
  },
  {
    icon: "mail",
    label: "Email",
    value: "kawitanbejo@gmail.com",
    sub: "Untuk penawaran resmi dan dokumen.",
    href: "mailto:kawitanbejo@gmail.com",
    external: false,
  },
  {
    icon: "map-pin",
    label: "Alamat Gudang",
    value: "Wates, Kulon Progo",
    sub: "Tempelrejo, Triharjo — D.I. Yogyakarta. Klik untuk arah.",
    href: "https://maps.app.goo.gl/d6oNNp4LFEfi6qp98",
    external: true,
  },
];

export default function KontakPage() {
  return (
    <div style={{ background: "var(--surface-base)", minHeight: "100vh" }}>
      <SiteHeader active="Kontak" />

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
            Hubungi Kami
          </div>
          <h1 className="bj-h1-page">Kontak Kawitan Bejo Steel</h1>
          <p
            style={{
              fontSize: "18px",
              color: "var(--text-body)",
              lineHeight: 1.6,
              marginTop: "20px",
              maxWidth: "640px",
            }}
          >
            Hubungi kami untuk pembelian besi, penjualan besi bekas, atau
            konsultasi kebutuhan proyek Anda.
          </p>
        </div>
      </section>

      {/* Contact + Map */}
      <section
        className="bj-pad-sm"
        style={{ background: "var(--surface-base)" }}
      >
        <div className="bj-container bj-split-contact">
          {/* Contact cards */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {CONTACTS.map((c, i) => (
              <Reveal key={c.label} delay={i * 60}>
              <a
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="contact-card"
                style={{
                  display: "flex",
                  gap: "18px",
                  alignItems: "flex-start",
                  background: "var(--surface-raised)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-lg)",
                  padding: "24px",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: "52px",
                    height: "52px",
                    borderRadius: "var(--radius-md)",
                    background: "var(--gold-grad)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconMask icon={c.icon} size={26} color="var(--steel-950)" />
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-cond)",
                      fontWeight: 700,
                      fontSize: "12px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                    }}
                  >
                    {c.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "18px",
                      color: "var(--text-strong)",
                      marginTop: "5px",
                      lineHeight: 1.35,
                    }}
                  >
                    {c.value}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "var(--text-muted)",
                      marginTop: "4px",
                      lineHeight: 1.5,
                    }}
                  >
                    {c.sub}
                  </div>
                </div>
              </a>
              </Reveal>
            ))}
            <div
              style={{
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
                background: "var(--steel-900)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-lg)",
                padding: "22px 24px",
              }}
            >
              <IconMask icon="clock" size={22} color="var(--gold-500)" />
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "16px",
                    color: "var(--text-strong)",
                  }}
                >
                  Jam Operasional
                </div>
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                    margin: "4px 0 0",
                  }}
                >
                  Senin – Sabtu, 08.00 – 16.00 WIB. Minggu tutup.
                </p>
              </div>
            </div>
          </div>

          {/* Map card */}
          <div
            style={{
              background: "var(--surface-raised)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <div
              style={{ background: "var(--hazard-stripes)", height: "4px" }}
            />
            <div style={{ padding: "28px" }}>
              <div className="bj-eyebrow" style={{ marginBottom: "6px" }}>
                Lokasi
              </div>
              <h3 style={{ fontSize: "22px", marginBottom: "14px" }}>
                Gudang Kawitan Bejo Steel
              </h3>
              <iframe
                title="Lokasi Kawitan Bejo Steel"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.1766205654067!2d110.12467726991245!3d-7.87658056094402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7ae4b091aa8845%3A0xb296a44eebffa182!2sKawitan%20Bejo%20Steel!5e0!3m2!1sid!2sid!4v1781768380584!5m2!1sid!2sid"
                style={{
                  width: "100%",
                  height: "300px",
                  border: 0,
                  borderRadius: "var(--radius-md)",
                  display: "block",
                  filter: "grayscale(0.2) contrast(1.05)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div
                style={{
                  display: "flex",
                  gap: "14px",
                  alignItems: "flex-start",
                  marginTop: "20px",
                }}
              >
                <IconMask icon="map-pin" size={22} color="var(--gold-500)" />
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--text-body)",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  RT 16/07 Dalangan, Tempelrejo, Triharjo, Kec. Wates, Kabupaten
                  Kulon Progo, Daerah Istimewa Yogyakarta 55651
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/d6oNNp4LFEfi6qp98"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "18px",
                  height: "44px",
                  padding: "0 22px",
                  background: "var(--gold-500)",
                  color: "var(--text-on-gold)",
                  borderRadius: "var(--radius-sm)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                <IconMask
                  icon="navigation"
                  size={16}
                  color="var(--text-on-gold)"
                />
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bj-pad-sm" style={{ background: "var(--steel-900)" }}>
        <div
          className="bj-container"
          style={{ maxWidth: "1000px", textAlign: "center" }}
        >
          <h2 className="bj-h2" style={{ lineHeight: 1.05 }}>
            Cara Tercepat: WhatsApp
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "var(--text-body)",
              maxWidth: "540px",
              margin: "14px auto 0",
            }}
          >
            Kirim daftar kebutuhan atau info besi bekas Anda, tim kami akan
            segera merespons.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "26px",
            }}
          >
            <a
              href="https://wa.me/6287738585311?text=Halo%20Kawitan%20Bejo%20Steel%2C%20saya%20ingin%20bertanya."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                height: "50px",
                padding: "0 32px",
                background: "var(--gold-500)",
                color: "var(--text-on-gold)",
                borderRadius: "var(--radius-sm)",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "17px",
                textDecoration: "none",
              }}
            >
              <IconMask
                icon="message-circle"
                size={20}
                color="var(--text-on-gold)"
              />
              Chat WhatsApp 0877-3858-5311
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
