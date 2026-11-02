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
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E⚖️%3C/text%3E%3C/svg%3E",
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
