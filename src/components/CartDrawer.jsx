import React from 'react';

const CartDrawer = ({ isOpen, onClose, cartItems, onRemoveItem, onUpdateQuantity }) => {
    const total = cartItems.reduce((acc, item) => {
        const price = parseInt(item.price.replace('₹', '').replace(',', ''));
        return acc + (price * item.quantity);
    }, 0);

    return (
        <>
            {/* Backdrop */}
            <div 
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[2000] transition-opacity duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={onClose}
            ></div>

            {/* Side Drawer */}
            <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#111] z-[2001] shadow-2xl transition-transform duration-500 transform ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <div className="flex flex-col h-full">
                    <div className="p-6 border-b border-white/10 flex justify-between items-center">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            <i className="fa-solid fa-cart-shopping text-primary-red"></i>
                            Your Cart
                        </h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <div key={item.id} className="flex gap-4 group">
                                    <div className="w-24 h-24 bg-white/5 rounded-xl flex items-center justify-center border border-white/5 shrink-0 overflow-hidden">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            loading="lazy"
                                            decoding="async"
                                            className="max-h-16 max-w-[64px] object-contain"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentNode.innerHTML = '<i class="fa-solid fa-box text-gray-600 text-2xl"></i>';
                                            }}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-white font-bold mb-1">{item.title}</h3>
                                        <p className="text-primary-red font-bold mb-3">{item.price}</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center bg-white/5 rounded-lg p-1 border border-white/10">
                                                <button 
                                                    onClick={() => onUpdateQuantity(item.id, -1)}
                                                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white"
                                                >
                                                    <i className="fa-solid fa-minus text-xs"></i>
                                                </button>
                                                <span className="w-8 text-center text-white font-bold">{item.quantity}</span>
                                                <button 
                                                    onClick={() => onUpdateQuantity(item.id, 1)}
                                                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white"
                                                >
                                                    <i className="fa-solid fa-plus text-xs"></i>
                                                </button>
                                            </div>
                                            <button 
                                                onClick={() => onRemoveItem(item.id)}
                                                className="text-gray-500 hover:text-primary-red transition-colors"
                                            >
                                                <i className="fa-solid fa-trash-can"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-center opacity-30">
                                <i className="fa-solid fa-cart-arrow-down text-7xl mb-6"></i>
                                <p className="text-xl font-medium">Your cart is empty</p>
                            </div>
                        )}
                    </div>

                    <div className="p-8 bg-black/40 border-t border-white/10">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-gray-400 text-lg">Subtotal</span>
                            <span className="text-white text-2xl font-bold">₹{total.toLocaleString()}</span>
                        </div>
                        <button 
                            disabled={cartItems.length === 0}
                            className="w-full bg-primary-red text-white py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary-red transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-primary-red/20"
                        >
                            Checkout Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartDrawer;
