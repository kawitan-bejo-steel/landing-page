import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader, { IconMask } from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Produk — Kawitan Bejo Steel",
  description:
    "Katalog besi baru dan bekas: Hollow, Pipa, Siku, Beton, Galvanis, Baja Ringan, IWF, Plat Strip, dan lainnya.",
  openGraph: {
    title: "Katalog Produk Besi — Kawitan Bejo Steel",
    description: "Tersedia besi baru dan bekas dalam berbagai profil: hollow, pipa, siku, IWF, H beam, baja ringan, plat strip, dan lainnya. Beli satuan maupun partai besar.",
    url: "/produk",
  },
};

type TagKind = "Baru" | "Bekas" | "both";

interface Product {
  name: string;
  icon: string;
  kind: TagKind;
  img: string;
  desc: string;
}

const PRODUCTS: Product[] = [
  {
    name: "Besi Hollow",
    icon: "box",
    kind: "both",
    img: "/assets/images/product/hollow_baru.webp",
    desc: "Untuk rangka pagar, kanopi, partisi, dan konstruksi ringan lainnya.",
  },
  {
    name: "Besi Hollow Kotak",
    icon: "square",
    kind: "Baru",
    img: "/assets/images/product/hollow-2_baru.webp",
    desc: "Hollow profil kotak untuk rangka dan furnitur besi.",
  },
  {
    name: "Pipa Besi Baru",
    icon: "circle",
    kind: "Baru",
    img: "/assets/images/product/pipa-baru.webp",
    desc: "Tersedia berbagai diameter untuk kebutuhan konstruksi dan industri.",
  },
  {
    name: "Pipa Besi Bekas",
    icon: "circle-dashed",
    kind: "Bekas",
    img: "/assets/images/product/pipa-bekas.webp",
    desc: "Pipa bekas berkualitas untuk kebutuhan non-struktural dan fabrikasi.",
  },
  {
    name: "Besi Siku",
    icon: "triangle-right",
    kind: "Baru",
    img: "/assets/images/product/siku_baru.webp",
    desc: "Untuk rangka, penguat struktur, dan rak besi.",
  },
  {
    name: "Besi Siku Lubang",
    icon: "triangle",
    kind: "Bekas",
    img: "/assets/images/product/siku-lubang_bekas.webp",
    desc: "Siku dengan lubang untuk konstruksi ringan dan rak adjustable.",
  },
  {
    name: "Besi Beton",
    icon: "grip",
    kind: "both",
    img: "/assets/images/product/besi-beton_bekas.webp",
    desc: "Untuk kebutuhan cor dan struktur bangunan.",
  },
  {
    name: "Pir / Per Bekas Mobil",
    icon: "recycle",
    kind: "Bekas",
    img: "/assets/images/product/per-bekas.jpg",
    desc: "Bahan baku untuk kebutuhan custom dan pengolahan ulang.",
  },
  {
    name: "Atap Galvanis",
    icon: "layers",
    kind: "Baru",
    img: "/assets/images/product/atap-galvanis_baru.webp",
    desc: "Untuk atap bangunan rumah maupun gudang, tahan karat.",
  },
  {
    name: "Baja Ringan",
    icon: "minus",
    kind: "Baru",
    img: "/assets/images/product/baja-ringan_baru.webp",
    desc: "Untuk rangka atap dan konstruksi ringan modern, ringan dan kuat.",
  },
  {
    name: "Besi IWF / WF",
    icon: "align-justify",
    kind: "Baru",
    img: "/assets/images/product/iwf_baru.png",
    desc: "Untuk konstruksi baja berat, kolom, dan balok utama bangunan.",
  },
  {
    name: "Plat Strip",
    icon: "credit-card",
    kind: "Baru",
    img: "/assets/images/product/plat-strip_baru.webp",
    desc: "Plat besi tipis untuk penguat las, braket, dan fabrikasi logam.",
  },
];

function tagStyle(kind: TagKind) {
  if (kind === "Baru")
    return { label: "Baru", fg: "var(--green-400)", bg: "var(--success-bg)" };
  if (kind === "Bekas")
    return { label: "Bekas", fg: "var(--rust-300)", bg: "var(--danger-bg)" };
  return {
    label: "Baru & Bekas",
    fg: "var(--gold-300)",
    bg: "color-mix(in srgb, var(--gold-500) 18%, var(--steel-800))",
  };
}

function ProductCard({
  product,
  priority,
}: {
  product: Product;
  priority?: boolean;
}) {
  const tag = tagStyle(product.kind);
  return (
    <div
      className="product-card"
      style={{
        position: "relative",
        background: "var(--surface-raised)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        boxShadow: "var(--shadow-md)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ background: "var(--hazard-stripes)", height: "4px" }} />
      <div
        className="product-card-img"
        style={{
          position: "relative",
          height: "200px",
          overflow: "hidden",
          background: "var(--surface-sunken)",
        }}
      >
        <Image
          src={product.img}
          alt={product.name}
          fill
          sizes="(max-width: 768px) calc(100vw - 40px), (max-width: 1200px) calc(50vw - 32px), 589px"
          style={{ objectFit: "cover" }}
          priority={priority}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, color-mix(in srgb, var(--steel-950) 78%, transparent), transparent 55%)",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            fontFamily: "var(--font-cond)",
            fontWeight: 700,
            fontSize: "11px",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: tag.fg,
            background: tag.bg,
            padding: "4px 10px",
            borderRadius: "var(--radius-sm)",
            backdropFilter: "blur(4px)",
          }}
        >
          {tag.label}
        </span>
      </div>
      <div
        style={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              flexShrink: 0,
              width: "50px",
              height: "50px",
              borderRadius: "var(--radius-md)",
              background: "var(--surface-sunken)",
              border: "1px solid var(--border-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconMask icon={product.icon} size={26} color="var(--gold-500)" />
          </div>
          <h3
            style={{
              fontSize: "23px",
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              color: "var(--text-strong)",
              letterSpacing: "-0.01em",
            }}
          >
            {product.name}
          </h3>
        </div>
        <p
          style={{
            fontSize: "15px",
            color: "var(--text-muted)",
            lineHeight: 1.6,
            marginTop: "14px",
          }}
        >
          {product.desc}
        </p>
      </div>
    </div>
  );
}

export default function ProdukPage() {
  return (
    <div style={{ background: "var(--surface-base)", minHeight: "100vh" }}>
      <SiteHeader active="Produk" />

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
            Katalog Material
          </div>
          <h1 className="bj-h1-page">Produk Besi Baru &amp; Bekas</h1>
          <p
            style={{
              fontSize: "18px",
              color: "var(--text-body)",
              lineHeight: 1.6,
              marginTop: "20px",
              maxWidth: "660px",
            }}
          >
            Kawitan Bejo Steel menyediakan berbagai jenis besi baru maupun bekas
            dengan kualitas terjaga. Tersedia untuk pembelian satuan maupun
            partai besar.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section
        className="bj-pad-sm"
        style={{ background: "var(--surface-base)" }}
      >
        <div className="bj-container">
          <div className="bj-grid-2">
            {PRODUCTS.map((product, i) => (
              <Reveal key={product.name} delay={i % 2 === 0 ? 0 : 80}>
                <ProductCard product={product} priority={i < 2} />
              </Reveal>
            ))}
          </div>

          {/* Price note */}
          <div
            style={{
              marginTop: "32px",
              display: "flex",
              alignItems: "flex-start",
              gap: "14px",
              background: "var(--steel-900)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-lg)",
              padding: "22px 24px",
            }}
          >
            <IconMask icon="info" size={22} color="var(--gold-500)" />
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "var(--text-strong)",
                }}
              >
                Catatan Harga
              </div>
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                  marginTop: "4px",
                  maxWidth: "760px",
                }}
              >
                Harga besi mengikuti kondisi pasar dan jenis barang. Hubungi
                WhatsApp untuk info stok dan harga terbaru. Ukuran spesifik
                dapat dikonfirmasikan langsung kepada tim kami.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bj-pad-md" style={{ background: "var(--steel-900)" }}>
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
              Tidak Menemukan yang Anda Cari?
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "var(--text-body)",
                maxWidth: "560px",
                margin: "16px auto 0",
              }}
            >
              Kami juga menerima permintaan jenis besi lain. Hubungi kami untuk
              konfirmasi ketersediaan dan harga.
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
                href="https://wa.me/6287738585311?text=Halo%20Kawitan%20Bejo%20Steel%2C%20saya%20ingin%20menanyakan%20ketersediaan%20produk%20besi."
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
                Tanya via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
