import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { Toaster } from 'react-hot-toast';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Sher Mitas - Next JS',
  description: 'Order premium quality mithai online from Sher Mitas. Traditional taste, modern packaging. Cash on Delivery, JazzCash, and Bank Transfer available.',
  keywords: ['Mithai', 'Sweets', 'Sher Mitas', 'Online Mithai Shop', 'Pakistan Sweets Delivery', 'Traditional Sweets'],
  openGraph: {
    title: 'Sher Mitas - Best Mithai Shop Online',
    description: 'Delicious traditional sweets with modern style. Order online for fast delivery in Pakistan.',
    url: 'https://sherrmitas.com',
    siteName: 'Sher Mitas',
    images: [
      {
        url: 'https://sherrmitas.com/og-image.jpg', // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: 'Sher Mitas - Mithai Box',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
                <Toaster position="top-center" reverseOrder={false} />
              <Navbar />

        {children}
        <Footer/>
      </body>
    </html>
  );
}
