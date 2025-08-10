import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-brand-cream shadow-md sticky top-0 z-50">
      <nav className="container mx-auto my-0  flex justify-center">
        <div>
          <Image
            src="/images/logo.png"
            alt="BellaMora Logo"
            width={260}
            height={40}
            priority
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
