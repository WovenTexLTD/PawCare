import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Pacifico } from "next/font/google";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

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
    <body className="min-h-dvh bg-white text-black antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
