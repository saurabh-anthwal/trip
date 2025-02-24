import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"], // Use "latin" instead of "Poppins"
  weight: ["400", "500", "600", "700"], // Add required font weights
  variable: "--font-poppins", // Optional: Define a CSS variable for usage
});

export const metadata: Metadata = {
  title: "Triplanza - Your Travel Companion",
  description: "Book your next adventure with Triplanza. We create unforgettable travel experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
