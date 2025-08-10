'use client';

import React, { useState } from 'react';
import WhatsAppButton from '@/components/WhatsappBtn';
import WhatsAppOverlay from '@/components/WhatsappOverlay';

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOverlayOpen, setOverlayOpen] = useState(false);

  return (
    <>
      {children}

      <WhatsAppOverlay
        isOpen={isOverlayOpen}
        onClose={() => setOverlayOpen(false)}
      />
      <WhatsAppButton
        isOpen={isOverlayOpen}
        onClick={() => setOverlayOpen(!isOverlayOpen)}
      />
    </>
  );
}
