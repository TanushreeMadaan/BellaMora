'use client'; 

import React, { useState } from 'react';
import HeroCarousel from '@/components/HeroCarousel';
import ProductCard from '@/components/ProductCard';
import QuickViewModal from '@/components/QuickViewModal';
import { products } from '@/data/products';
import { Product } from '@/types';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Split the products into two distinct collections
  const signatureStyles = products.slice(0, 4);
  const aLineStyles = products.slice(4, 7); // Assuming you have at least 7 products

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <main>
      <HeroCarousel />
      
      {/* Main container for all product sections */}
      <section className="py-16 bg-brand-rose/20">
        <div className="container mx-auto px-6">

          {/* --- Signature Styles Section --- */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-left text-brand-charcoal mb-12">
              Icons of Comfort
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {signatureStyles.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onQuickView={handleQuickView} 
                />
              ))}
            </div>
          </div>

          {/* --- A-Line Styles Section --- */}
          <div>
            <h2 className="text-3xl font-bold text-left text-brand-charcoal mb-12">
              Effortless A-Lines
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {aLineStyles.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onQuickView={handleQuickView} 
                />
              ))}
            </div>
          </div>
          
        </div>
      </section>
      
      <QuickViewModal product={selectedProduct} onClose={handleCloseModal} />
    </main>
  );
}
