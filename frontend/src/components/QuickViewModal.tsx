'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Product, ProductVariant } from '@/types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

const QuickViewModal = ({ product, onClose }: QuickViewModalProps) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
    }
  }, [product]);

  if (!product || !selectedVariant) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-full overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-20">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Carousel Section */}
          <div className="w-full h-[550px] p-4">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              className="w-full h-full"
              key={selectedVariant.color}
            >
              {selectedVariant.images.map((imgSrc, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full">
                    <Image src={imgSrc} alt={`${product.name} - ${selectedVariant.color} - view ${index + 1}`} fill style={{ objectFit: 'cover' }} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-center p-8">
            <h2 className="text-3xl font-bold text-brand-charcoal mb-4">{product.name}</h2>
            
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Fabric</h3>
              <span className="inline-block border border-gray-300 rounded-md px-3 py-1 text-brand-charcoal">{product.fabric}</span>
            </div>

            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Color: <span className="font-bold text-brand-charcoal">{selectedVariant.color}</span></h3>
              <div className="flex items-center gap-3">
                {product.variants.map((variant) => (
                  <button key={variant.color} onClick={() => setSelectedVariant(variant)} className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-all ${selectedVariant.color === variant.color ? 'border-brand-gold' : 'border-transparent'}`}>
                    <Image src={variant.colorSwatch} alt={variant.color} width={40} height={40} />
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Available Sizes</h3>
              <p className="text-brand-charcoal font-medium text-base">
                M / L / XL / 2XL
              </p>
            </div>
            
            {/* The "Buy on Amazon" button is now updated to match the product card */}
            <a 
              href={product.amazonLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full text-center bg-brand-cream text-brand-charcoal py-3 px-6 rounded-md font-bold hover:bg-brand-rose transition-colors duration-300"
            >
              Buy on Amazon
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
