import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import BlogSection from './components/BlogSection';
import RepairSection from './components/RepairSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import CartDrawer from './components/CartDrawer';
import CorporateBanner from './components/CorporateBanner';
import { newArrivals, iphoneProducts, androidProducts } from './data';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ── Cart State ──────────────────────────────────────────────
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    // Briefly open cart on add
    setIsCartOpen(true);
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleUpdateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  // ── Product Modal ────────────────────────────────────────────
  const handleOpenProduct = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Announcement Bar */}
      <div className="bg-primary-red text-white py-2 text-sm font-medium text-center overflow-hidden relative">
        <div className="whitespace-nowrap animate-scroll-text inline-block px-4">
          India's Best Mobile Accessories — Starting from ₹199! Free Delivery on orders above ₹499! &nbsp;&nbsp;&nbsp;
          | &nbsp;&nbsp;&nbsp; Same Day Dispatch on all orders! &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Shop Now &amp; Save Big!
        </div>
      </div>

      <Navbar cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />

      <main>
        <Hero />

        <Categories />

        {/* Mid-Page Promo */}
        <section className="container mx-auto px-4 mb-16">
          <div className="bg-gradient-to-br from-[#111] to-[#333] h-[350px] rounded-xl flex items-center relative overflow-hidden group">
            <div className="pl-12 md:pl-20 text-white z-10 relative">
              <h3 className="text-4xl md:text-5xl font-bold mb-3">WIRELESS CHARGERS</h3>
              <p className="text-xl text-gray-400 mb-8">Cut the cords. Power up in style.<br />Starting from ₹599</p>
              <a href="#new-arrivals" className="bg-primary-red text-white px-10 py-3 font-bold rounded hover:bg-transparent border-2 border-primary-red transition-all">Shop Now</a>
            </div>
            <img
              src="/promo-banner.png"
              alt="Wireless Charger"
              loading="lazy"
              className="absolute right-0 md:right-12 top-1/2 -translate-y-1/2 w-[400px] opacity-40 md:opacity-100 group-hover:scale-105 transition-transform duration-700"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        </section>

        {/* New Arrivals */}
        <section className="container mx-auto px-4 py-16" id="new-arrivals">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold uppercase relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-primary-red">
              New Arrivals
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} onOpen={handleOpenProduct} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </section>

        {/* iPhone Section */}
        <section className="container mx-auto px-4 py-16" id="iphone">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold uppercase relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-primary-red">
              iPhone Exclusive
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {iphoneProducts.map(product => (
              <ProductCard key={product.id} product={product} onOpen={handleOpenProduct} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </section>

        {/* Android Section */}
        <section className="container mx-auto px-4 py-16" id="android">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold uppercase relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-primary-red">
              Android Essentials
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {androidProducts.map(product => (
              <ProductCard key={product.id} product={product} onOpen={handleOpenProduct} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </section>

        <CorporateBanner />

        <BlogSection />

        <RepairSection />

        {/* Warranty Section */}
        <section className="container mx-auto px-4 py-16" id="support">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold uppercase relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-primary-red">
              Warranty &amp; Support
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-10 border border-[#eee] rounded-2xl hover:shadow-xl transition-shadow group">
              <i className="fa-solid fa-shield-halved text-4xl text-primary-red mb-6 block group-hover:scale-110 transition-transform"></i>
              <h4 className="text-xl font-bold mb-4">1 Year Warranty</h4>
              <p className="text-gray-500 leading-relaxed">All our electronic products come with a 1-year limited warranty against manufacturing defects.</p>
            </div>
            <div className="p-10 border border-[#eee] rounded-2xl hover:shadow-xl transition-shadow group">
              <i className="fa-solid fa-truck-fast text-4xl text-primary-red mb-6 block group-hover:scale-110 transition-transform"></i>
              <h4 className="text-xl font-bold mb-4">7-Day Returns</h4>
              <p className="text-gray-500 leading-relaxed">Not satisfied with your purchase? We offer a hassle-free 7-day return policy for unused products.</p>
            </div>
            <div className="p-10 border border-[#eee] rounded-2xl hover:shadow-xl transition-shadow group">
              <i className="fa-solid fa-headset text-4xl text-primary-red mb-6 block group-hover:scale-110 transition-transform"></i>
              <h4 className="text-xl font-bold mb-4">24/7 Support</h4>
              <p className="text-gray-500 leading-relaxed">Have questions? Our support team is available 24/7 via WhatsApp and Email to assist you.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <FloatingActions />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}
      />

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default App;
