import React, { useState } from 'react';

const ImageFallback = ({ title }) => (
    <div style={{
        width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        background: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
        borderRadius: '12px', color: '#aaa'
    }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M4 16l4-4 4 4 4-6 4 6M4 20h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span style={{ fontSize: '11px', marginTop: '8px', textAlign: 'center', padding: '0 8px' }}>
            {title || 'Image unavailable'}
        </span>
    </div>
);

const ProductCard = ({ product, onOpen, onAddToCart, isGlassmorphism = false }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [imgError, setImgError] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);

    const cardClasses = isGlassmorphism
        ? "bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 transition-all duration-500 hover:bg-white/10 hover:border-primary-red/30 hover:-translate-y-2 group relative overflow-hidden"
        : "bg-white border border-[#eee] rounded-xl p-5 transition-all duration-300 hover:shadow-2xl hover:border-transparent cursor-pointer group relative overflow-hidden";

    return (
        <div className={cardClasses} onClick={() => onOpen(product)}>
            {/* Wishlist Button */}
            <button
                className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all ${isWishlisted ? 'bg-primary-red text-white' : 'bg-black/20 text-white hover:bg-black/40'}`}
                onClick={(e) => { e.stopPropagation(); setIsWishlisted(!isWishlisted); }}
            >
                <i className={`${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart`}></i>
            </button>

            {/* Image Area */}
            <div className="h-40 md:h-52 flex items-center justify-center mb-5 overflow-hidden relative">
                {imgError ? (
                    <ImageFallback title={product.title} />
                ) : (
                    <>
                        {/* Shimmer skeleton */}
                        {!imgLoaded && (
                            <div
                                className="absolute inset-0 rounded-lg"
                                style={{
                                    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                                    backgroundSize: '200% 100%',
                                    animation: 'shimmer 1.4s ease-in-out infinite',
                                }}
                            />
                        )}
                        <img
                            src={product.img}
                            alt={product.title}
                            loading="lazy"
                            decoding="async"
                            className={`max-h-full w-full object-contain group-hover:scale-110 transition-all duration-700 ease-out ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                            onLoad={() => setImgLoaded(true)}
                            onError={() => setImgError(true)}
                        />
                    </>
                )}
            </div>

            <div className="relative z-10">
                {product.badge && (
                    <div className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full mb-3 inline-block ${product.badge === 'New' ? 'bg-blue-500 text-white' : product.badge === 'Limited' ? 'bg-amber-500 text-white' : 'bg-primary-red text-white'}`}>
                        {product.badge}
                    </div>
                )}

                <h4 className={`text-base md:text-lg font-bold mb-1 truncate ${isGlassmorphism ? 'text-white' : 'text-black'}`}>
                    {product.title}
                </h4>
                <p className="text-xs text-gray-500 mb-3 line-clamp-1">{product.desc || 'Premium accessory'}</p>

                <div className="text-[#ffc107] text-xs mb-4 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <i key={i} className={`fa-solid fa-star ${i >= Math.floor(product.rating || 5) ? 'opacity-30' : ''}`}></i>
                    ))}
                    <span className="text-gray-500 ml-1">({product.reviews || 0})</span>
                </div>

                <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                        <span className={`font-bold text-lg md:text-xl ${isGlassmorphism ? 'text-white' : 'text-black'}`}>
                            {product.price}
                        </span>
                        {product.oldPrice && (
                            <span className="line-through text-gray-500 text-xs">{product.oldPrice}</span>
                        )}
                    </div>

                    <button
                        className="w-12 h-12 bg-primary-red text-white rounded-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-lg shadow-primary-red/20"
                        onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
                    >
                        <i className="fa-solid fa-plus text-lg"></i>
                    </button>
                </div>
            </div>

            {/* Hover Glow Effect for Glassmorphism */}
            {isGlassmorphism && (
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-red to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity pointer-events-none"></div>
            )}
        </div>
    );
};

export default ProductCard;
