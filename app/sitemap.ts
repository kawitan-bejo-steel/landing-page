import type { MetadataRoute } from "next";
import { BASE_URL } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL,                              lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE_URL}/produk`,                  lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/jual-besi-bekas`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/bongkar-pabrik`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/borongan-besi-bekas`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/kontak`,                  lastModified: new Date(), changeFrequency: "yearly",  priority: 0.8 },
    { url: `${BASE_URL}/galeri`,                  lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tentang`,                 lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },
  ];
}
