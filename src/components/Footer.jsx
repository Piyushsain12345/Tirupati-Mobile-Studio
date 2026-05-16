import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-nav-bg text-gray-400 pt-20 pb-8 mt-20">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div>
                    <div className="flex items-center gap-2.5 mb-6">
                        <div className="bg-primary-red text-white px-2 py-1 font-extrabold text-xl rounded">TMS</div>
                        <div className="font-bold text-lg tracking-wide text-white uppercase">
                            MOBILE STUDIO
                        </div>
                    </div>
                    <p className="leading-relaxed">
                        Tirupati Mobile Studio is your one-stop destination for premium, durable, and stylish mobile
                        accessories. We bring you the latest technology at unbeatable prices.
                    </p>
                </div>

                <div>
                    <h4 className="text-white text-lg font-bold uppercase mb-8">Quick Links</h4>
                    <ul className="space-y-3.5">
                        {['Home', 'Categories', 'New Arrivals', 'Track Order', 'Contact Us'].map((link) => (
                            <li key={link}>
                                <a href="#" className="hover:text-primary-red transition-all hover:pl-1.5">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-white text-lg font-bold uppercase mb-8">Support</h4>
                    <ul className="space-y-3.5">
                        {['Warranty Policy', 'Return & Refund', 'Shipping Info', 'Terms of Service', 'Privacy Policy'].map((link) => (
                            <li key={link}>
                                <a href="#" className="hover:text-primary-red transition-all hover:pl-1.5">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-white text-lg font-bold uppercase mb-8">Contact Info</h4>
                    <ul className="space-y-4">
                        <li className="flex gap-3.5">
                            <i className="fa-solid fa-location-dot text-primary-red mt-1"></i>
                            <span className="text-sm">AG24 Park Town, Aditya world city Wave city, Mehrauli, Ghaziabad, Uttar Pradesh 201002</span>
                        </li>
                        <li className="flex gap-3.5">
                            <i className="fa-solid fa-phone text-primary-red"></i>
                            <span>+91 8700638629</span>
                        </li>
                        <li className="flex gap-3.5">
                            <i className="fa-solid fa-envelope text-primary-red"></i>
                            <a href="mailto:mobilestudio.sales@gmail.com" className="hover:text-primary-red">mobilestudio.sales@gmail.com</a>
                        </li>
                        <li className="flex gap-3.5">
                            <i className="fa-brands fa-instagram text-primary-red"></i>
                            <a href="https://instagram.com/mobile_studio_gzb" target="_blank" rel="noreferrer" className="hover:text-primary-red">@mobile_studio_gzb</a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="container mx-auto px-4 pt-8 border-t border-white/10 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Tirupati Mobile Studio. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
