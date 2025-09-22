'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <div>
    
    {/* Hero Image */}
      <div className="w-full h-64 md:h-96 relative">
        <Image
          src="/tower1.jpg" // Place your image in public/cityland.jpg
          alt="Cityland"
          fill
          className="object-cover"
          priority
        />
      </div>

      </div>
  );
}