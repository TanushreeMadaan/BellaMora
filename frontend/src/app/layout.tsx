// src/app/layout.tsx
"use client"; // This is now a client component to manage state

import "./globals.css";
import { Inter } from "next/font/google";
import React, { useState } from "react"; // Import useState
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsappBtn";
import WhatsAppOverlay from "@/components/WhatsappOverlay"; // Import the new overlay

const inter = Inter({ subsets: ["latin"] });

// Metadata must be handled differently in client components, but for this project's scope, we can keep it simple.
// In a larger app, you'd move metadata to page.tsx or use a template.tsx.
/*
export const metadata = {
  title: 'BellaMora - Elegant Nightwear',
  description: 'Discover comfortable and stylish nightwear from BellaMora.',
};
*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // State to manage the overlay's visibility
  const [isOverlayOpen, setOverlayOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <Header />
        <main>{children}</main>

        {/* The overlay is always in the DOM but its visibility is controlled by its own internal state */}
        <WhatsAppOverlay
          isOpen={isOverlayOpen}
          onClose={() => setOverlayOpen(true)}
        />

        {/* The button now toggles the state */}
        <WhatsAppButton
          isOpen={isOverlayOpen}
          onClick={() => setOverlayOpen(!isOverlayOpen)} // This toggles the state
        />
      </body>
    </html>
  );
}
