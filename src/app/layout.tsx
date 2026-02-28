import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Cuisine Sen | L'Authenticité Khmère à Niort",
  description: "Découvrez l'alliance parfaite entre les recettes traditionnelles du Cambodge et les meilleurs ingrédients locaux des Deux-Sèvres. 100% Fait Maison, 100% Locavore.",
  keywords: ["cuisine cambodgienne", "Niort", "traiteur asiatique", "Locavore Niort", "Cuisine Sen", "plats khmers", "amok", "lok lak"],
  openGraph: {
    title: "Cuisine Sen | L'Authenticité Khmère à Niort",
    description: "L'alliance parfaite entre les recettes traditionnelles du Cambodge et les ingrédients locaux de Niort.",
    url: "https://cuisine-sen.vercel.app/",
    siteName: "Cuisine Sen",
    images: [
      {
        url: "https://cuisine-sen.vercel.app/images/sen_hero.png",
        width: 1200,
        height: 630,
        alt: "Cuisine Sen Logo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuisine Sen | L'Authenticité Khmère à Niort",
    description: "L'alliance parfaite entre les recettes traditionnelles du Cambodge et les ingrédients locaux de Niort.",
    images: ["https://cuisine-sen.vercel.app/images/sen_hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Cuisine Sen",
    "image": "https://cuisine-sen.vercel.app/images/sen_hero.png",
    "description": "L'alliance parfaite entre les recettes traditionnelles du Cambodge et les ingrédients locaux de Niort. 100% Fait Maison, 100% Locavore.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Laboratoire entre le petit Leclerc et les quais Metayer",
      "addressLocality": "Niort",
      "postalCode": "79000",
      "addressCountry": "FR"
    },
    "telephone": "+33768099661",
    "email": "contact@cuisine-sen.com",
    "url": "https://cuisine-sen.vercel.app/",
    "servesCuisine": "Cambodian",
    "priceRange": "€€",
    "acceptsReservations": "True"
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${sora.variable} ${inter.variable} bg-[#F4F6F0] text-[#172111] antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
