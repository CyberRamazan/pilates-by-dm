import type { Metadata } from "next";
import { Great_Vibes, Manrope, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MIND BODY pilates center — PILATES CENTER | Актау",
  description:
    "Женская студия Pilates by Diana Muratova в Актау. Реформер, коврик, персональные занятия, йога.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${montserrat.variable} ${greatVibes.variable} ${manrope.variable}`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
