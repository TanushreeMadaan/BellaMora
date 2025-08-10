'use client'; 

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useIsMobile } from '@/hooks/useIsMobile'; 

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroCarousel: React.FC = () => {
  const isMobile = useIsMobile();

  const desktopImages = [
    '/banners/hero-1.png',
    '/banners/hero-2.png',
    '/banners/hero-3.png',
  ];

  const mobileImages = [
    '/banners/hero-4.png',
    '/banners/hero-5.png',
    '/banners/hero-6.png',  
  ]

  const images = isMobile ? mobileImages : desktopImages;

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className={`w-full ${isMobile ? 'h-[600px]' : 'h-[500px]'}`}
        key={isMobile ? 'mobile' : 'desktop'}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`BellaMora Nightwear Image ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
