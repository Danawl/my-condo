'use client'

import Image from 'next/image'

export default function Media() {
    return (
        <section id="media" className="bg-[#a89c91]  py-12 px-6 md:px-16">
            <div className="container grid grid-cols-2 md:grid-cols-3 gap-6">
                {[1,2,3,4,5,6].map(num => (
                  <div key={num} className="aspect-square bg-gray-100 overflow-hidden relative rounded-lg shadow transition-transform duration-200 hover:scale-105 hover:shadow-lg">
                    <Image
                      src={`/condo${num}.jpg`}
                      alt={`Media ${num}`}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                ))}
            </div>
        </section>
    );
}