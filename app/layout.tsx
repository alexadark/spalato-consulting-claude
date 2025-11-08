import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Spalato Consulting - AI Automation for SMBs",
    template: "%s | Spalato Consulting",
  },
  description: "Unlock efficiency with AI automations that save your business time and money. Tailored solutions for SMBs without the hype.",
  openGraph: {
    title: "Spalato Consulting - AI Automation for SMBs",
    description: "Unlock efficiency with AI automations that save your business time and money.",
    url: "https://spalato-consulting.com",
    siteName: "Spalato Consulting",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
