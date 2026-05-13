import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WelcomeModal } from "@/components/welcome-modal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dervision — AI-Powered Skin Disease Detection System",
  description:
    "Dervision uses Deep Learning and InceptionV3 architecture to classify skin conditions into 11 categories through an offline desktop software experience. A final year engineering project.",
  keywords: [
    "skin disease detection",
    "AI healthcare",
    "InceptionV3",
    "deep learning",
    "dermatology",
    "skin cancer detection",
    "medical AI",
  ],
  authors: [{ name: "Dervision Team" }],
  openGraph: {
    title: "Dervision — AI-Powered Skin Disease Detection",
    description:
      "Deep Learning-based skin disease classification into 11 categories. Offline, private, and secure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WelcomeModal />
      </body>
    </html>
  );
}
