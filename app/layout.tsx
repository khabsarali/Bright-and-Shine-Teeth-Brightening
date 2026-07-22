import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "@/components/ui/BookingProvider";
import { BookingModal } from "@/components/ui/BookingModal";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LogoIntro } from "@/components/layout/LogoIntro";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { MobileTextBar } from "@/components/ui/MobileTextBar";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brightandshine.com"),
  title: {
    default: "Bright & Shine Teeth Whitening | Luxury Smile Studio",
    template: "%s | Bright & Shine Teeth Whitening",
  },
  description:
    "Advanced luxury teeth-whitening treatments for stunning, long-lasting results in a safe, comfortable experience. Book your brighter smile today.",
  keywords: [
    "teeth whitening",
    "luxury teeth whitening",
    "professional whitening",
    "brighter smile",
    "Beverly Hills teeth whitening",
  ],
  openGraph: {
    title: "Bright & Shine Teeth Whitening",
    description:
      "Advanced luxury teeth-whitening treatments for stunning, long-lasting results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <BookingProvider>
          <LogoIntro />
          <Header />
          <main>{children}</main>
          <Footer />
          <BookingModal />
          <WhatsAppButton />
          <MobileTextBar />
        </BookingProvider>
      </body>
    </html>
  );
}
