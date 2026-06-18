"use client";

import { useEffect } from "react";

declare function gtag(command: string, action: string, params?: Record<string, unknown>): void;

export default function AnalyticsTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor?.href) return;

      const href = anchor.href;
      const page = window.location.pathname;

      if (href.includes("wa.me") || href.includes("whatsapp")) {
        gtag("event", "whatsapp_click", {
          event_category: "engagement",
          page_location: page,
        });
      } else if (href.startsWith("tel:")) {
        gtag("event", "phone_click", {
          event_category: "engagement",
          page_location: page,
        });
      } else if (
        href.includes("maps.app.goo.gl") ||
        href.includes("google.com/maps")
      ) {
        gtag("event", "maps_click", {
          event_category: "engagement",
          page_location: page,
        });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
