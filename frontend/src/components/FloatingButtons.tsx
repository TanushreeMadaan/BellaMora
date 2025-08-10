'use client'; 

import React, { useState } from 'react';
import WhatsAppButton from '@/components/WhatsappBtn';
import WhatsAppOverlay from '@/components/WhatsappOverlay';

export default function FloatingButtons() {
  const [isOverlayOpen, setOverlayOpen] = useState(false);

  return (
    <>
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
