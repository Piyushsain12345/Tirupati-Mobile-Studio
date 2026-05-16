import React from 'react';

const cats = [
    { name: 'Mobile Cases', icon: 'fa-mobile-screen-button', link: '#iphone' },
    { name: 'Power Banks', icon: 'fa-battery-full', link: '#android' },
    { name: 'Audio Gear', icon: 'fa-headphones', link: '#android' },
    { name: 'Computer Access.', icon: 'fa-laptop', link: '#new-arrivals' },
    { name: 'Car Accessories', icon: 'fa-car', link: '#new-arrivals' },
    { name: 'Cables & Adapters', icon: 'fa-plug', link: '#new-arrivals' },
];

const Categories = () => {
    return (
        <section className="container mx-auto px-4 py-16" id="categories">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold uppercase relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-primary-red">
                    Shop By Categories
                </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {cats.map((cat, i) => (
                    <div 
                        key={i} 
                        className="text-center cursor-pointer group transition-transform duration-300 hover:-translate-y-2"
                        onClick={(e) => {
                            e.preventDefault();
                            const targetId = cat.link.replace('#', '');
                            const targetElement = document.getElementById(targetId);
                            if (targetElement) {
                                targetElement.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        <div className="bg-[#f9f9f9] rounded-2xl aspect-square flex items-center justify-center mb-4 border border-[#eee] transition-colors group-hover:border-primary-red/20 group-hover:bg-primary-red/[0.02]">
                            <i className={`fa-solid ${cat.icon} text-5xl text-primary-red`}></i>
                        </div>
                        <p className="font-semibold text-base">{cat.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
