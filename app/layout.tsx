import type { Metadata } from "next";
import {
  Oxanium,
  Barlow,
  Barlow_Semi_Condensed,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { BASE_URL } from "./lib/site";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  display: "swap",
});

const barlowSemiCondensed = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cond",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Kawitan Bejo Steel — Distributor Besi Baru & Bekas",
    template: "%s — Kawitan Bejo Steel",
  },
  description:
    "Distributor besi baru & bekas di Kulon Progo, D.I. Yogyakarta. Melayani pembelian eceran hingga pengadaan proyek skala besar dari seluruh Indonesia.",
  keywords: [
    "distributor besi",
    "Besi Termurah",
    "Harga Kiloan",
    "jual besi bekas",
    "Jasa Bongkaran Besi Bekas",
    "Jasa Bongkar Pabrik",
    "besi baru",
    "hollow",
    "pipa besi",
    "besi siku",
    "IWF",
    "H beam",
    "Kulon Progo",
    "Jogja",
    "Yogyakarta",
    "Melayani seluruh Indonesia",
    "borongan besi",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: BASE_URL,
    siteName: "Kawitan Bejo Steel",
    images: [
      {
        url: "/logo-full.png",
        width: 1200,
        height: 630,
        alt: "Kawitan Bejo Steel — Distributor Besi Baru & Bekas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/logo-full.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Kawitan Bejo Steel",
  description:
    "Distributor besi baru dan bekas. Melayani pembelian eceran hingga pengadaan proyek skala besar dari seluruh Indonesia.",
  url: BASE_URL,
  telephone: "+6287738585311",
  email: "kawitanbejo@gmail.com",
  image: `${BASE_URL}/logo-full.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "RT 16/07 Dalangan, Tempelrejo, Triharjo",
    addressLocality: "Wates",
    addressRegion: "Kulon Progo, Daerah Istimewa Yogyakarta",
    postalCode: "55651",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -7.87658056094402,
    longitude: 110.12467726991245,
  },
  hasMap: "https://maps.app.goo.gl/d6oNNp4LFEfi6qp98",
  sameAs: ["https://wa.me/6287738585311"],
  priceRange: "Rp 10.000 - 200.000",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "08:00",
    closes: "16:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${oxanium.variable} ${barlow.variable} ${barlowSemiCondensed.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
