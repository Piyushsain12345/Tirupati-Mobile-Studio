import React, { useState, useEffect } from 'react';

const FloatingActions = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Floating Gift Icon */}
            <a 
                href="#bulk-orders" 
                className="fixed left-6 bottom-24 w-14 h-14 bg-white border-2 border-primary-red text-primary-red rounded-full flex items-center justify-center text-xl shadow-lg z-[1000] animate-bounce hover:bg-primary-red hover:text-white transition-all duration-300"
                title="Bulk Inquiry"
            >
                <i className="fa-solid fa-gift"></i>
            </a>

            {/* WhatsApp Button */}
            <a 
                href="https://wa.me/918700638629?text=Hi!%20I'm%20interested%20in%20your%20mobile%20accessories.%20Can%20you%20help%20me?" 
                target="_blank" 
                rel="noreferrer"
                className="fixed right-6 bottom-6 w-16 h-16 bg-[#25d366] text-white rounded-full flex items-center justify-center text-3xl shadow-xl z-[1000] hover:scale-110 transition-transform animate-pulse"
            >
                <i className="fa-brands fa-whatsapp"></i>
            </a>

            {/* Scroll to Top */}
            <div 
                className={`fixed right-8 bottom-28 w-12 h-12 bg-primary-red text-white rounded-full flex items-center justify-center text-lg cursor-pointer shadow-lg z-[999] transition-all duration-500 ${showScroll ? 'opacity-100 visible' : 'opacity-0 invisible translate-y-4'}`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <i className="fa-solid fa-arrow-up"></i>
            </div>
        </>
    );
};

export default FloatingActions;
