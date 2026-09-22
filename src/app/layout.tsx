import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";
import ContactModalProvider from "@/components/ContactModalProvider";
import JsonLd from "@/components/JsonLd";
import ChatWidget from "@/components/ChatWidget";
import { site } from "@/lib/site";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | מרכזייה עסקית חכמה עם AI מובנה`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "מרכזיה בענן",
    "מרכזייה וירטואלית",
    "מרכזייה לעסק",
    "מרכזייה טלפונית",
    "ניהול נציגים",
    "בוט טלפוני",
    "בוט קולי",
    "מענה קולי חכם",
    "קמפיין שיחות אוטומטי",
    "ניתוח שיחות AI",
  ],
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | בוט טלפוני חכם, קמפיינים אוטומטיים ומרכזיה בענן`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | בוט טלפוני חכם ומרכזיה בענן`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  email: site.email,
  telephone: site.phoneIntl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "תל אביב",
    addressCountry: "IL",
  },
  description: site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className="min-h-screen bg-brand-dark text-white font-sans">
        <JsonLd data={organizationJsonLd} />
        <ContactModalProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingCta />
          <ChatWidget />
        </ContactModalProvider>
      </body>
    </html>
  );
}
