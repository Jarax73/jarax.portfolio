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
  description: "Kapila Jared-Alexandre's personal website",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon_32x32.png",
    apple: "/favicon_152x152.png",
    android: "/favicon_152x152.png",
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
