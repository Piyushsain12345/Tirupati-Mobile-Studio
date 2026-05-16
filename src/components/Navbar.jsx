import React, { useState, useEffect } from 'react';

const Navbar = ({ cartCount, onOpenCart }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`sticky top-0 z-[1000] w-full transition-all duration-300 ${isScrolled ? 'bg-nav-bg/95 backdrop-blur-md shadow-lg' : 'bg-nav-bg'}`}>
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                    <div className="bg-primary-red text-white px-2 py-1 font-extrabold text-xl rounded">TMS</div>
                    <div className="font-bold text-lg tracking-wide text-white uppercase hidden sm:block">
                        TIRUPATI MOBILE STUDIO
                    </div>
                </div>

                <ul className="hidden lg:flex gap-6 items-center">
                    {['Categories', 'iPhone', 'Android', 'Repairing', 'Bulk Orders', 'Blogs', 'Support'].map((item) => (
                        <li key={item}>
                            <a 
                                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                                className="text-white font-medium text-[15px] hover:text-primary-red transition-colors"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-5 text-white text-lg">
                    <i className="fa-solid fa-magnifying-glass cursor-pointer hover:text-primary-red transition-colors"></i>
                    <div className="relative cursor-pointer group" onClick={onOpenCart}>
                        <i className="fa-solid fa-cart-shopping group-hover:text-primary-red transition-colors"></i>
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-primary-red text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                                {cartCount}
                            </span>
                        )}
                    </div>
                    <i className="fa-solid fa-user cursor-pointer hover:text-primary-red transition-colors"></i>
                    <div 
                        className="lg:hidden cursor-pointer text-2xl" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden absolute top-full left-0 w-full bg-nav-bg transition-all duration-300 ${isMenuOpen ? 'max-h-[500px] border-t border-white/10' : 'max-h-0 overflow-hidden'}`}>
                <ul className="flex flex-col p-6 gap-4">
                    {['Categories', 'iPhone', 'Android', 'Repairing', 'Bulk Orders', 'Blogs', 'Support'].map((item) => (
                        <li key={item}>
                            <a 
                                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                                className="text-white text-lg block"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
