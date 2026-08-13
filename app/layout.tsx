import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.oscarahumada.com.br"),

  title: {
    default: "Oscar Ahumada | Numerólogo das Estrelas",
    template: "%s | Oscar Ahumada",
  },

  description:
    "Numerologia Latina com Oscar Ahumada, o Numerólogo das Estrelas. Mapa Numerológico Pessoal e Empresarial, Poder do Nome, Nome do Bebê, Nome Profissional e Numerologia da Casa.",

  keywords: [
    "Oscar Ahumada",
    "numerologia",
    "numerólogo",
    "numerólogo das estrelas",
    "numerologia latina",
    "mapa numerológico",
    "mapa numerológico pessoal",
    "numerologia empresarial",
    "mapa numerológico empresarial",
    "poder do nome",
    "nome do bebê",
    "nome profissional",
    "numerologia da casa",
  ],

  authors: [
    {
      name: "Oscar Ahumada",
    },
  ],

  creator: "Oscar Ahumada",
  publisher: "Oscar Ahumada",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Oscar Ahumada - Numerólogo das Estrelas",

    title: "Oscar Ahumada | Numerólogo das Estrelas",

    description:
      "Descubra como a Numerologia Latina pode ajudar você a compreender talentos, desafios, ciclos, relacionamentos, negócios, nomes e momentos importantes da vida.",

    images: [
      {
        url: "/images/oscar-home-2026.png",
        width: 1200,
        height: 630,
        alt: "Oscar Ahumada - Numerólogo das Estrelas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Oscar Ahumada | Numerólogo das Estrelas",
    description:
      "Numerologia Latina aplicada à vida pessoal, profissional e empresarial.",
    images: ["/images/oscar-home-2026.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-[#123d73]">
        <SiteHeader />

        <div className="min-h-screen">{children}</div>

        <SiteFooter />
      </body>
    </html>
  );
}