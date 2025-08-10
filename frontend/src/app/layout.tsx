import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import FloatingButtons from '@/components/FloatingButtons';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BellaMora - Elegant Nightwear',
  description: 'Discover the finest collection of elegant and comfortable nightwear. Shop our signature styles and drift into dreams with BellaMora.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white flex flex-col min-h-screen`}>
        <Header />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <FloatingButtons />
      </body>
    </html>
  );
}
