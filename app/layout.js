import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Links from "./ui/nav_link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kapila Jared-Alexandre",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ),
  description: "Kapila Jared-Alexandre's personal website",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon_32x32.png",
    apple: "/favicon_152x152.png",
    android: "/favicon_152x152.png",
  },
  keywords: [
    "Kapila",
    "Jared",
    "Kapila Jared-Alexandre",
    "Kapila Jared",
    "Développeur",
    "Développeur web",
    "Développeur mobile",
  ],
  openGraph: {
    title: "Kapila Jared-Alexandre",
    description: "Portfolio de Kapila Jared-Alexandre",
    images: ["/favicon_192x192.png"],
    url: process.env.NEXT_PUBLIC_APP_URL,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export const viewport = {
  themeColor: "#4a5568",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Links />
        <main>{children}</main>
      </body>
    </html>
  );
}
