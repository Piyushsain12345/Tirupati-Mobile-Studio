import React, { useState, useEffect } from 'react';

const slides = [
    {
        title: "TURBO CHARGE PRO",
        desc: "Experience ultra-fast 65W charging with universal compatibility and multi-layer protection for all your premium devices.",
        oldPrice: "₹1,999",
        newPrice: "₹1,299",
        img: "/hero-banner.png",
        accent: "#E8001C"
    },
    {
        title: "PREMIUM CASES",
        desc: "Military-grade protection meets slim aesthetics. Our new collection of matte cases is now available for all iPhone and Samsung models.",
        oldPrice: "₹999",
        newPrice: "₹599",
        img: "https://images.unsplash.com/photo-1603539281216-75842831a145?auto=format&fit=crop&q=80&w=1920",
        accent: "#1a73e8"
    },
    {
        title: "SONIC BASS PODS",
        desc: "Immerse yourself in pure sound. 40 hours of battery life, Active Noise Cancellation, and deep bass that moves you.",
        oldPrice: "₹2,499",
        newPrice: "₹1,799",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1920",
        accent: "#8a2be2"
    }
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imgErrors, setImgErrors] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleImgError = (index) => {
        setImgErrors(prev => ({ ...prev, [index]: true }));
    };

    return (
        <section
            className="relative h-[600px] w-full overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1c1c1c 60%, #111 100%)' }}
        >
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 flex items-center transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                    {/* Background Image — real <img> tag so onError works */}
                    {!imgErrors[index] && (
                        <img
                            src={slide.img}
                            alt=""
                            loading={index === 0 ? 'eager' : 'lazy'}
                            decoding="async"
                            aria-hidden="true"
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{ opacity: 0.35 }}
                            onError={() => handleImgError(index)}
                        />
                    )}

                    {/* Gradient overlay — always visible so hero is never blank white */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 55%, rgba(0,0,0,0.3) 100%)',
                        }}
                    />

                    {/* Bottom gradient for depth */}
                    <div className="absolute inset-x-0 bottom-0 h-32"
                        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }} />

                    {/* Content */}
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="w-full md:w-1/2 text-white">
                            {/* Accent line */}
                            <div className="w-12 h-1 rounded-full mb-5" style={{ background: slide.accent }} />

                            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 uppercase tracking-tight">
                                {slide.title}
                            </h1>
                            <p className="text-lg text-gray-300 mb-6 max-w-lg leading-relaxed">
                                {slide.desc}
                            </p>
                            <div className="text-2xl mb-8 flex items-center gap-4">
                                <span className="line-through text-gray-500 text-lg">{slide.oldPrice}</span>
                                <span className="font-bold text-3xl" style={{ color: slide.accent }}>{slide.newPrice}</span>
                            </div>
                            <a
                                href="#new-arrivals"
                                className="inline-block text-white px-8 py-3 font-semibold rounded border-2 transition-all duration-300"
                                style={{ background: slide.accent, borderColor: slide.accent }}
                                onMouseEnter={e => { e.target.style.background = 'transparent'; e.target.style.color = 'white'; }}
                                onMouseLeave={e => { e.target.style.background = slide.accent; }}
                            >
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            ))}

            {/* Slide Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`cursor-pointer transition-all duration-300 rounded-full ${index === currentIndex ? 'w-8 h-3' : 'w-3 h-3 bg-gray-600 hover:bg-gray-400'}`}
                        style={index === currentIndex ? { background: slides[currentIndex].accent } : {}}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
