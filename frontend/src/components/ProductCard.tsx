import React from 'react';
import Image from 'next/image';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

const ProductCard = ({ product, onQuickView }: ProductCardProps) => {
  const displayImage = product.variants[0]?.images[0] || '/images/placeholder.jpg';

  return (
    <div className="group border border-brand-rose/50 rounded-lg shadow-lg overflow-hidden flex flex-col">
      <div className="relative w-full h-80">
        <Image
          src={displayImage}
          alt={product.name}
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
          {/* 1. Quick View button opacity changed from 100 to 90 */}
          <button
            onClick={() => onQuickView(product)}
            className="text-brand-charcoal bg-brand-rose px-6 py-2 rounded-md font-bold opacity-0 group-hover:opacity-90 transition-all duration-300 hover:bg-opacity-80"
          >
            Quick View
          </button>
        </div>
      </div>
      <div className="p-6 bg-white flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-brand-charcoal mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
        
        {/* 2. Buy on Amazon button hover effect changed */}
        <a
          href={product.amazonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center bg-brand-cream text-brand-charcoal py-3 px-6 rounded-md font-bold hover:bg-brand-rose transition-colors duration-300"
        >
          Buy on Amazon
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
