import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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

  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

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
  const whatsappUrl =
    "https://wa.me/5531972159908?text=" +
    encodeURIComponent(
      "Olá, Oscar. Vim pelo seu site e gostaria de saber mais sobre a Numerologia e os atendimentos."
    );

  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-[#123d73]">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6F9PZ326TS"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6F9PZ326TS');
          `}
        </Script>

        <SiteHeader />

        <div className="min-h-screen">{children}</div>

        <SiteFooter />

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fale com Oscar pelo WhatsApp"
          className="fixed bottom-5 right-4 z-[100] flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-bold text-white shadow-2xl transition hover:scale-105 hover:bg-[#20bd5a] sm:bottom-6 sm:right-6 sm:px-5"
        >
          <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
            className="h-6 w-6 shrink-0 fill-current"
          >
            <path d="M19.11 17.21c-.26-.13-1.53-.75-1.77-.84-.24-.09-.41-.13-.59.13-.17.26-.68.84-.83 1.01-.15.17-.3.2-.56.07-.26-.13-1.09-.4-2.08-1.28-.77-.68-1.29-1.53-1.44-1.79-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.02-.46-.07-.13-.59-1.42-.81-1.94-.21-.51-.43-.44-.59-.45h-.5c-.17 0-.46.07-.7.33-.24.26-.92.9-.92 2.2 0 1.29.94 2.54 1.07 2.72.13.17 1.85 2.82 4.48 3.96.63.27 1.11.43 1.49.55.63.2 1.2.17 1.65.1.5-.07 1.53-.63 1.75-1.23.22-.61.22-1.12.15-1.23-.06-.11-.24-.17-.5-.3Z" />
            <path d="M16.03 3.2c-7.05 0-12.79 5.74-12.79 12.79 0 2.25.59 4.45 1.7 6.39L3.13 29l6.78-1.78a12.75 12.75 0 0 0 6.12 1.56h.01c7.05 0 12.79-5.74 12.79-12.79S23.08 3.2 16.03 3.2Zm0 23.42h-.01a10.6 10.6 0 0 1-5.41-1.48l-.39-.23-4.02 1.05 1.07-3.92-.25-.4a10.58 10.58 0 0 1-1.63-5.65c0-5.87 4.78-10.64 10.65-10.64 5.87 0 10.64 4.78 10.64 10.64 0 5.87-4.78 10.63-10.65 10.63Z" />
          </svg>

          <span className="hidden sm:inline">FALE COM OSCAR</span>
        </a>
      </body>
    </html>
  );
}
