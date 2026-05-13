import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "destroy dat denim",
  description: "denim doesn't lie.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: {
    title: "destroy dat denim",
    description: "denim doesn't lie.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-ink text-bone weave">
        {children}
      </body>
    </html>
  );
}
