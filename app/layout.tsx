import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./login.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://b2b-builders-ph.b2bbuildersph.chatgpt.site"),
  title: "B2B Builders PH | Construction ERP",
  description: "Built to build. One premium command center for projects, people, materials, and money.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "B2B Builders PH | Built to Build",
    description: "A beautifully simple Construction ERP for Philippine builders.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "B2B Builders PH Construction ERP" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Builders PH | Built to Build",
    description: "A beautifully simple Construction ERP for Philippine builders.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
