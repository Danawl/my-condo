'use client'

export default function Map() {
  return (
    <section id="map" className="container pt-30 pb-20 px-6 md:px-16">
      <h2 className="text-4xl font-semibold mb-10 text-center text-primary">Map</h2>
      <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
        <iframe
          title="Condo Location"
          src="https://maps.google.com/maps?q=14.429186521690436,121.02170643500976&z=15&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}