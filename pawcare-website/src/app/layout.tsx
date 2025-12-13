// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Pacifico } from "next/font/google";

const pawcareFont = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "PawCare — Pet care, made simple",
  description:
    "Discover trusted vets, groomers, daycares, trainers, and pet services — all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${pawcareFont.className} min-h-dvh bg-white text-black antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
