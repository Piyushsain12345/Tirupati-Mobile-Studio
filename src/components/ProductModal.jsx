import React, { useState } from 'react';

const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
    const [imgError, setImgError] = useState(false);
    const [added, setAdded] = useState(false);

    if (!isOpen || !product) return null;

    const message = encodeURIComponent(`Hi Tirupati Mobile Studio! I'm interested in buying: ${product.title} for ${product.price}. Is it available?`);
    const waLink = `https://wa.me/918700638629?text=${message}`;

    const handleAddToCart = () => {
        if (onAddToCart) onAddToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div
            className="fixed inset-0 z-[2000] flex justify-center items-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl max-w-4xl w-full relative flex flex-col md:flex-row overflow-hidden animate-slideUp"
                onClick={(e) => e.stopPropagation()}
            >
                <span
                    className="absolute top-5 right-5 text-2xl cursor-pointer text-gray-500 hover:text-black z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all"
                    onClick={onClose}
                >
                    &times;
                </span>

                {/* Image Panel */}
                <div className="md:w-1/2 p-6 flex items-center justify-center bg-gray-50 min-h-[280px]">
                    {imgError ? (
                        <div style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center',
                            justifyContent: 'center', color: '#bbb', gap: '12px'
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                                    d="M4 16l4-4 4 4 4-6 4 6M4 20h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span style={{ fontSize: '13px' }}>Image unavailable</span>
                        </div>
                    ) : (
                        <img
                            src={product.img}
                            alt={product.title}
                            loading="lazy"
                            decoding="async"
                            className="max-h-[360px] w-auto rounded-lg shadow-sm object-contain"
                            onError={() => setImgError(true)}
                        />
                    )}
                </div>

                {/* Info Panel */}
                <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    {product.badge && (
                        <span className={`text-xs font-bold uppercase px-3 py-1 rounded-full mb-4 inline-block w-fit ${
                            product.badge === 'New' ? 'bg-blue-100 text-blue-600' :
                            product.badge === 'Limited' ? 'bg-amber-100 text-amber-600' :
                            'bg-red-100 text-primary-red'
                        }`}>{product.badge}</span>
                    )}

                    <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">{product.title}</h2>

                    <div className="text-[#ffc107] mb-3 flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <i key={i} className={`fa-solid fa-star text-sm ${i >= Math.floor(product.rating || 5) ? 'opacity-30' : ''}`}></i>
                        ))}
                        {product.reviews && <span className="text-gray-400 text-sm ml-2">({product.reviews} reviews)</span>}
                    </div>

                    <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                        {product.desc || 'A premium accessory from Tirupati Mobile Studio, designed for maximum durability, style, and compatibility with all modern devices.'}
                    </p>

                    <div className="mb-6 flex items-baseline gap-3">
                        <span className="text-3xl font-bold text-black">{product.price}</span>
                        {product.oldPrice && (
                            <span className="line-through text-gray-400 text-lg">{product.oldPrice}</span>
                        )}
                        {product.discount && (
                            <span className="text-green-600 text-sm font-bold">{product.discount}</span>
                        )}
                    </div>

                    <div className="flex flex-col gap-3">
                        <button
                            onClick={handleAddToCart}
                            className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 ${
                                added
                                    ? 'bg-green-500 text-white shadow-green-500/20'
                                    : 'bg-black text-white hover:bg-gray-800 shadow-black/20'
                            }`}
                        >
                            {added ? (
                                <><i className="fa-solid fa-check"></i> Added to Cart!</>
                            ) : (
                                <><i className="fa-solid fa-cart-shopping"></i> Add to Cart</>
                            )}
                        </button>

                        <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-primary-red text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-black transition-colors duration-300 shadow-lg shadow-primary-red/20 flex items-center justify-center gap-2"
                        >
                            <i className="fa-brands fa-whatsapp text-xl"></i>
                            Buy Now via WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
