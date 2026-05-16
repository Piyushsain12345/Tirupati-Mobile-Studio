import React from 'react';

const services = [
    { title: 'Screen Replacement', desc: 'Original & High-quality displays for iPhone, Samsung, etc.', icon: 'fa-mobile-screen' },
    { title: 'Battery Replacement', desc: 'Long-lasting batteries with 6 months warranty.', icon: 'fa-battery-half' },
    { title: 'Water Damage', desc: 'Advanced cleaning and chip-level repairing.', icon: 'fa-droplet-slash' },
    { title: 'Software Fix', desc: 'Unlock, Flash, and Software updates for all models.', icon: 'fa-microchip' },
];

const RepairSection = () => {
    return (
        <section className="container mx-auto px-4 py-16 mb-20 bg-black text-white rounded-3xl text-center" id="repairing">
            <div className="mb-12">
                <h2 className="text-3xl font-bold uppercase relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-primary-red">
                    Mobile Repairing Services
                </h2>
            </div>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                Fast, reliable, and professional mobile repairing services for all brands.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, i) => (
                    <div key={i} className="p-8 border border-[#333] rounded-xl transition-all hover:border-primary-red hover:bg-white/[0.03]">
                        <i className={`fa-solid ${service.icon} text-5xl text-primary-red mb-5 block`}></i>
                        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                    </div>
                ))}
            </div>
            <a 
                href="https://wa.me/918700638629?text=Hi!%20I%20need%20repair%20service%20for%20my%20phone." 
                className="mt-12 inline-block bg-primary-red text-white px-10 py-4 font-bold rounded-lg hover:bg-white hover:text-primary-red transition-all duration-300"
            >
                Get a Free Quote
            </a>
        </section>
    );
};

export default RepairSection;
