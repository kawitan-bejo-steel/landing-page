import Image from "next/image";
import Link from "next/link";
import { IconMask } from "./SiteHeader";

export default function SiteFooter() {
  return (
    <footer style={{ background: "var(--steel-900)", borderTop: "1px solid var(--border-subtle)" }}>
      <div style={{ background: "var(--hazard-stripes)", height: "8px", width: "100%" }} />
      <div className="bj-footer-inner">

        {/* Brand column */}
        <div style={{ maxWidth: "300px", minWidth: "220px" }}>
          <Image
            src="/logo-mark.png" alt="Kawitan Bejo Steel"
            width={0} height={0} sizes="160px"
            style={{ height: "46px", width: "auto", marginBottom: "18px", display: "block" }}
          />
          <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65, margin: 0 }}>
            UD. Kawitan Bejo Steel — distributor besi baru &amp; bekas. Melayani perorangan, kontraktor, hingga industri, termasuk pembelian besi bekas dalam jumlah besar dan bongkar pabrik.
          </p>
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            {[
              { href: "https://wa.me/6287738585311", icon: "message-circle", label: "WhatsApp" },
              { href: "mailto:kawitanbejo@gmail.com", icon: "mail", label: "Email" },
              { href: "https://maps.app.goo.gl/d6oNNp4LFEfi6qp98", icon: "map-pin", label: "Lokasi" },
            ].map(({ href, icon, label }) => (
              <a key={label} href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="footer-social"
                style={{ width: "38px", height: "38px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-sm)", background: "var(--surface-raised)", textDecoration: "none" }}
              >
                <IconMask icon={icon} size={18} color="var(--gold-500)" />
              </a>
            ))}
          </div>
        </div>

        {/* Links columns */}
        <div className="bj-footer-links">
          <div>
            <div className="bj-eyebrow" style={{ marginBottom: "16px" }}>Produk</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
              {["Besi Hollow", "Pipa Besi", "Besi Siku", "Besi Beton", "Atap Galvanis"].map((name) => (
                <Link key={name} href="/produk" style={{ fontSize: "14px", color: "var(--text-body)", textDecoration: "none" }}>{name}</Link>
              ))}
            </div>
          </div>
          <div>
            <div className="bj-eyebrow" style={{ marginBottom: "16px" }}>Layanan</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
              <Link href="/#jual-besi-bekas" style={{ fontSize: "14px", color: "var(--text-body)", textDecoration: "none" }}>Beli Besi Bekas</Link>
              <Link href="/tentang" style={{ fontSize: "14px", color: "var(--text-body)", textDecoration: "none" }}>Bongkar Pabrik</Link>
              <Link href="/produk" style={{ fontSize: "14px", color: "var(--text-body)", textDecoration: "none" }}>Pembelian Partai Besar</Link>
              <Link href="/galeri" style={{ fontSize: "14px", color: "var(--text-body)", textDecoration: "none" }}>Galeri Proyek</Link>
            </div>
          </div>
          <div>
            <div className="bj-eyebrow" style={{ marginBottom: "16px" }}>Hubungi</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
              <a href="https://wa.me/6287738585311" target="_blank" rel="noopener noreferrer" style={{ fontSize: "14px", color: "var(--text-body)", fontFamily: "var(--font-mono)", textDecoration: "none" }}>0877-3858-5311</a>
              <a href="mailto:kawitanbejo@gmail.com" style={{ fontSize: "14px", color: "var(--text-body)", textDecoration: "none" }}>kawitanbejo@gmail.com</a>
              <a href="https://maps.app.goo.gl/d6oNNp4LFEfi6qp98" target="_blank" rel="noopener noreferrer" style={{ fontSize: "14px", color: "var(--text-body)", maxWidth: "220px", lineHeight: 1.5, textDecoration: "none" }}>Wates, Kulon Progo, D.I. Yogyakarta</a>
              <Link href="/kontak" style={{ fontSize: "14px", color: "var(--gold-500)", fontFamily: "var(--font-display)", fontWeight: 700, textDecoration: "none" }}>Lihat Kontak Lengkap →</Link>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid var(--border-subtle)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "18px 40px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", fontSize: "13px", color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
          <span>© 2026 UD. Kawitan Bejo Steel</span>
          <span>Kulon Progo · D.I. Yogyakarta</span>
        </div>
      </div>
    </footer>
  );
}
