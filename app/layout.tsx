import type { Metadata } from "next";
import { Cormorant_Garamond, Mulish } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Bar Association Kattappana | Court Complex, Kattappana, Idukki",
    template: "%s | The Bar Association Kattappana",
  },
  description:
    "Official website of The Bar Association Kattappana, Court Complex, ITI Junction, Kattappana, Idukki. Meet our office bearers and the presiding officers of the Kattappana courts.",
  openGraph: {
    title: "The Bar Association Kattappana | Court Complex, Kattappana, Idukki",
    description: "Firm On The Hills, Devoted To Justice.",
    type: "website",
  },
  icons: {
    icon: "/assets/logo-icon.png",
    apple: "/assets/logo-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Bar Association Kattappana",
  description: "Bar association of the Kattappana courts, Idukki, Kerala.",
  telephone: "+919747221318",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Court Complex, ITI Junction",
    addressLocality: "Kattappana",
    addressRegion: "Idukki, Kerala",
    postalCode: "685508",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${mulish.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
