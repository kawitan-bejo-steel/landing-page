"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  AlignJustify,
  ArrowRight,
  Box,
  Building2,
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

const NAV_ITEMS = [
  { label: "Beranda", href: "/" },
  { label: "Produk", href: "/produk" },
  { label: "Galeri", href: "/galeri" },
  { label: "Tentang", href: "/tentang" },
  { label: "Kontak", href: "/kontak" },
] as const;

type NavLabel = (typeof NAV_ITEMS)[number]["label"];

export default function SiteHeader({ active }: { active: NavLabel }) {
  const [open, setOpen] = useState(false);

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
          {NAV_ITEMS.map(({ label, href }) => {
            const isActive = label === active;
            return (
              <Link
                key={label}
                href={href}
                className="nav-link"
                style={{
                  padding: "8px 14px",
                  borderRadius: "var(--radius-sm)",
                  fontFamily: "var(--font-display)",
                  fontSize: "14px",
                  color: isActive ? "var(--text-strong)" : "var(--text-muted)",
                  background: isActive
                    ? "var(--surface-raised)"
                    : "transparent",
                  fontWeight: isActive ? 700 : 600,
                  textDecoration: "none",
                }}
              >
                {label}
              </Link>
            );
          })}
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
          onClick={() => setOpen(false)}
        >
          {NAV_ITEMS.map(({ label, href }) => {
            const isActive = label === active;
            return (
              <Link
                key={label}
                href={href}
                style={{
                  display: "block",
                  padding: "14px 16px",
                  borderRadius: "var(--radius-md)",
                  fontFamily: "var(--font-display)",
                  fontSize: "18px",
                  color: isActive ? "var(--gold-500)" : "var(--text-strong)",
                  background: isActive
                    ? "var(--surface-raised)"
                    : "transparent",
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
