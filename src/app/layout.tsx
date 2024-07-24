import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nest',
  description:
    'Nest is an innovative platform that connects property owners with travelers seeking short-term accommodations, similar to Airbnb. The platform facilitates the seamless rental of various property types, including apartments, houses, villas, and unique spaces.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
