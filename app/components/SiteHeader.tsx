"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  AlignJustify,
  ArrowRight,
  Box,
  Building2,
  ChevronDown,
  Circle,
  CircleDashed,
  Clock,
  CreditCard,
  Grip,
  Handshake,
  ImageIcon,
  Info,
  Layers,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  Navigation,
  Phone,
  Recycle,
  Scale,
  Square,
  Store,
  Triangle,
  Truck,
  X,
  type LucideProps,
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  "align-justify": AlignJustify,
  "arrow-right": ArrowRight,
  "box": Box,
  "building-2": Building2,
  "circle": Circle,
  "circle-dashed": CircleDashed,
  "clock": Clock,
  "credit-card": CreditCard,
  "grip": Grip,
  "handshake": Handshake,
  "image": ImageIcon,
  "info": Info,
  "layers": Layers,
  "mail": Mail,
  "map-pin": MapPin,
  "menu": Menu,
  "message-circle": MessageCircle,
  "minus": Minus,
  "navigation": Navigation,
  "phone": Phone,
  "recycle": Recycle,
  "scale": Scale,
  "square": Square,
  "store": Store,
  "triangle": Triangle,
  "triangle-right": ArrowRight,
  "truck": Truck,
  "x": X,
};

const LAYANAN_ITEMS = [
  { label: "Jual Besi Bekas", href: "/jual-besi-bekas" },
  { label: "Bongkar Pabrik", href: "/bongkar-pabrik" },
  { label: "Borongan Besi Bekas", href: "/borongan-besi-bekas" },
];

const NAV_BEFORE = [
  { label: "Beranda", href: "/" },
  { label: "Produk", href: "/produk" },
] as const;

const NAV_AFTER = [
  { label: "Galeri", href: "/galeri" },
  { label: "Tentang", href: "/tentang" },
  { label: "Kontak", href: "/kontak" },
] as const;

export type NavLabel = "Beranda" | "Produk" | "Layanan" | "Galeri" | "Tentang" | "Kontak";

export default function SiteHeader({ active }: { active: NavLabel }) {
  const [open, setOpen] = useState(false);
  const [layananHover, setLayananHover] = useState(false);
  const [layananMobileOpen, setLayananMobileOpen] = useState(false);

  const isLayananActive = active === "Layanan";

  const navLinkStyle = (label: string) => ({
    padding: "8px 14px",
    borderRadius: "var(--radius-sm)",
    fontFamily: "var(--font-display)",
    fontSize: "14px",
    color: label === active ? "var(--text-strong)" : "var(--text-muted)",
    background: label === active ? "var(--surface-raised)" : "transparent",
    fontWeight: label === active ? 700 : 600,
    textDecoration: "none",
  } as const);

  return (
    <>
      <header
        className="bj-header-pad bj-header-anim"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          gap: "24px",
          height: "76px",
          background: "rgba(40,41,40,0.96)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-mark.png"
            alt="Kawitan Bejo Steel"
            width={0}
            height={0}
            sizes="140px"
            style={{ height: "38px", width: "auto", display: "block" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="bj-nav-links">
          {NAV_BEFORE.map(({ label, href }) => (
            <Link key={label} href={href} className="nav-link" style={navLinkStyle(label)}>
              {label}
            </Link>
          ))}

          {/* Layanan dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setLayananHover(true)}
            onMouseLeave={() => setLayananHover(false)}
          >
            <button
              style={{
                padding: "8px 14px",
                borderRadius: "var(--radius-sm)",
                fontFamily: "var(--font-display)",
                fontSize: "14px",
                color: isLayananActive || layananHover ? "var(--text-strong)" : "var(--text-muted)",
                background: isLayananActive || layananHover ? "var(--surface-raised)" : "transparent",
                fontWeight: isLayananActive ? 700 : 600,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                border: "none",
                letterSpacing: "inherit",
              }}
            >
              Layanan
              <ChevronDown
                size={13}
                style={{
                  transform: layananHover ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                  color: "var(--text-muted)",
                }}
              />
            </button>

            {layananHover && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  paddingTop: "6px",
                  zIndex: 100,
                }}
              >
              <div
                style={{
                  background: "var(--steel-900)",
                  border: "1px solid var(--border-default)",
                  borderRadius: "var(--radius-lg)",
                  padding: "6px",
                  minWidth: "230px",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                {LAYANAN_ITEMS.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="nav-link"
                    onClick={() => setLayananHover(false)}
                    style={{
                      display: "block",
                      padding: "10px 14px",
                      borderRadius: "var(--radius-md)",
                      fontFamily: "var(--font-display)",
                      fontSize: "14px",
                      color: "var(--text-body)",
                      textDecoration: "none",
                      fontWeight: 500,
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
              </div>
            )}
          </div>

          {NAV_AFTER.map(({ label, href }) => (
            <Link key={label} href={href} className="nav-link" style={navLinkStyle(label)}>
              {label}
            </Link>
          ))}
        </nav>

        <div style={{ flex: 1 }} />

        {/* Phone — hidden on mobile via CSS */}
        <a href="tel:087738585311" className="bj-header-phone">
          <IconMask icon="phone" size={16} color="var(--gold-500)" />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            0877-3858-5311
          </span>
        </a>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/6287738585311?text=Halo%20Kawitan%20Bejo%20Steel%2C%20saya%20ingin%20bertanya."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
          aria-label="Hubungi WhatsApp"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            height: "40px",
            padding: "0 20px",
            background: "var(--gold-500)",
            color: "var(--text-on-gold)",
            borderRadius: "var(--radius-sm)",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "14px",
            whiteSpace: "nowrap",
            letterSpacing: "0.01em",
            textDecoration: "none",
          }}
        >
          <IconMask
            icon="message-circle"
            size={16}
            color="var(--text-on-gold)"
          />
          <span className="bj-wa-label">Hubungi WhatsApp</span>
        </a>

        {/* Hamburger */}
        <button
          className="bj-hamburger"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <IconMask
            icon={open ? "x" : "menu"}
            size={24}
            color="var(--text-strong)"
          />
        </button>
      </header>

      {/* Mobile nav overlay — OUTSIDE <header> to avoid backdrop-filter stacking context bug */}
      {open && (
        <div
          className="bj-mobile-nav-anim"
          style={{
            position: "fixed",
            top: "76px",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
            background: "var(--steel-950)",
            borderTop: "1px solid var(--border-subtle)",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            overflowY: "auto",
          }}
        >
          {NAV_BEFORE.map(({ label, href }) => {
            const isActive = label === active;
            return (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  padding: "14px 16px",
                  borderRadius: "var(--radius-md)",
                  fontFamily: "var(--font-display)",
                  fontSize: "18px",
                  color: isActive ? "var(--gold-500)" : "var(--text-strong)",
                  background: isActive ? "var(--surface-raised)" : "transparent",
                  fontWeight: isActive ? 700 : 600,
                  textDecoration: "none",
                  borderBottom: "1px solid var(--border-subtle)",
                }}
              >
                {label}
              </Link>
            );
          })}

          {/* Layanan accordion */}
          <div>
            <button
              onClick={() => setLayananMobileOpen((v) => !v)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 16px",
                borderRadius: "var(--radius-md)",
                fontFamily: "var(--font-display)",
                fontSize: "18px",
                color: isLayananActive ? "var(--gold-500)" : "var(--text-strong)",
                background: isLayananActive ? "var(--surface-raised)" : "transparent",
                fontWeight: isLayananActive ? 700 : 600,
                border: "none",
                borderBottom: "1px solid var(--border-subtle)",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              Layanan
              <ChevronDown
                size={18}
                style={{
                  transform: layananMobileOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                  color: "var(--text-muted)",
                }}
              />
            </button>
            {layananMobileOpen && (
              <div style={{ paddingLeft: "16px", paddingBottom: "4px" }}>
                {LAYANAN_ITEMS.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: "block",
                      padding: "12px 16px",
                      fontFamily: "var(--font-display)",
                      fontSize: "16px",
                      color: "var(--text-body)",
                      textDecoration: "none",
                      fontWeight: 500,
                      borderBottom: "1px solid var(--border-subtle)",
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {NAV_AFTER.map(({ label, href }) => {
            const isActive = label === active;
            return (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  padding: "14px 16px",
                  borderRadius: "var(--radius-md)",
                  fontFamily: "var(--font-display)",
                  fontSize: "18px",
                  color: isActive ? "var(--gold-500)" : "var(--text-strong)",
                  background: isActive ? "var(--surface-raised)" : "transparent",
                  fontWeight: isActive ? 700 : 600,
                  textDecoration: "none",
                  borderBottom: "1px solid var(--border-subtle)",
                }}
              >
                {label}
              </Link>
            );
          })}

          <div style={{ marginTop: "16px", padding: "4px" }}>
            <a
              href="https://wa.me/6287738585311?text=Halo%20Kawitan%20Bejo%20Steel%2C%20saya%20ingin%20bertanya."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                height: "48px",
                padding: "0 24px",
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
              Hubungi WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export function IconMask({
  icon,
  size = 20,
  color = "currentColor",
}: {
  icon: string;
  size?: number;
  color?: string;
}) {
  const LucideIcon = ICON_MAP[icon];
  if (!LucideIcon) return null;
  return (
    <LucideIcon
      width={size}
      height={size}
      color={color}
      strokeWidth={2}
      style={{ flexShrink: 0, display: "inline-block" }}
    />
  );
}
