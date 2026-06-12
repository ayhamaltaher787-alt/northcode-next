import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { BackgroundPaths } from "@/components/ui/background-paths";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Northcode – Webdesign & KI-Automatisierung für KMU",
  description:
    "Northcode von Esmail – professionelle Websites, Landingpages, KI-Chatbots und Business-Systeme für kleine und mittlere Unternehmen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${plusJakartaSans.variable} h-full antialiased`}
      style={{ background: "#F5FAFA" }}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col relative" style={{ background: "#F5FAFA" }}>
        {/* Fixed animated background — sits behind every page */}
        <BackgroundPaths />
        {/* Page content stack */}
        <div className="relative z-10 flex flex-col min-h-full">{children}</div>
      </body>
    </html>
  );
}
