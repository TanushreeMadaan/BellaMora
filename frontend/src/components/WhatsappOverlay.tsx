'use client';

import React from 'react';

interface WhatsAppOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const WhatsAppOverlay = ({ isOpen, onClose }: WhatsAppOverlayProps) => {
  if (!isOpen) return null;

  const phoneNumber = "9761633155";
  const countryCode = "91";
  const message = "Hi BellaMora, I have a question about your nightwear.";
  const whatsappLink = `https://wa.me/${countryCode}${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    // Backdrop to close the modal on click
    <div className="fixed inset-0 z-40" onClick={onClose}>
      <div 
        className="fixed bottom-28 right-8 bg-white rounded-2xl shadow-2xl w-80 p-6 z-50 transform transition-all duration-300 ease-out text-center"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the box
      >
        {/* Updated Headline */}
        <h3 className="text-2xl font-extrabold text-brand-charcoal mb-2">
          Let's Get in Touch🤗
        </h3>
        
        {/* New Body Text */}
        <p className="text-gray-600 mb-6">
          Message us for any queries or feedback
        </p>
        
        {/* Updated "Start Chat" button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-b from-green-400 to-green-500 text-white py-3 px-4 rounded-xl font-bold hover:opacity-90 transition-opacity duration-300"
        >
          {/* WhatsApp icon inside button */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.06.098-1.165 4.251 4.356-1.144.105.068z" />
          </svg>
          START CHAT
        </a>

      </div>
    </div>
  );
};

export default WhatsAppOverlay;
