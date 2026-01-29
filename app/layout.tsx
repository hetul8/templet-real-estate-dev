import type { Metadata } from 'next';
import './globals.css';

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
            <body className="antialiased bg-black text-white" suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
