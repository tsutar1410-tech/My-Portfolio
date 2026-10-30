import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tushar — Creative Developer & UI/UX Designer",
  description:
    "Portfolio of Tushar, a web developer and UI/UX designer based in Mumbai, India. Crafting modern digital experiences through thoughtful design, clean code, and creative interactions.",
  keywords: [
    "Tushar",
    "Portfolio",
    "Creative Developer",
    "UI/UX Designer",
    "Web Developer",
    "Mumbai",
    "Frontend Developer",
  ],
  authors: [{ name: "Tushar" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} font-body bg-bg text-text-primary antialiased selection:bg-[#4E85BF]/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
