import type { Metadata } from "next";
import InsightClient from "./InsightClient";

export const metadata: Metadata = {
  title: "Insight | Twenti Studio",
  description:
    "Catatan proses, riset produk, dan eksperimen pengembangan dari tim Twenti Studio.",
  alternates: { canonical: "/insight" },
  openGraph: {
    title: "Insight | Twenti Studio",
    description:
      "Catatan proses, riset produk, dan eksperimen pengembangan dari tim Twenti Studio.",
    url: "/insight",
    type: "website",
  },
};

export default function InsightPage() {
  return <InsightClient />;
}
