import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from "next/font/google";
import { SmoothScroll } from "../src/components/SmoothScroll";
import './globals.css';

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

const cormorantGaramond = Cormorant_Garamond({
    subsets: ["latin"],
    variable: "--font-serif",
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: 'Digital Showroom for Developers',
    description: 'Luxury Real Estate Showcase',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} ${cormorantGaramond.variable} antialiased bg-black text-white`} suppressHydrationWarning>
                <SmoothScroll />
                <div className="noise-overlay" />
                {children}
            </body>
        </html>
    );
}
