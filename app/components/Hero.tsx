'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="w-full h-64 md:h-96 relative">
        <Image
          src="/tower1.jpg"
          alt="Cityland"
          fill
          className="object-cover"
          priority
        />
             <div className="absolute inset-0 bg-opacity-100"></div>
      
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Your New Home Awaits
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            Brand new, fully furnished studio unit ready for occupancy
          </p>
         
        </div>
      </div>
    </div>
  );
}