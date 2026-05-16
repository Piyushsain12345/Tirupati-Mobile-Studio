import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { shopProducts } from '../data';

const categories = ['All', 'Cases', 'Cables', 'Chargers', 'Stands', 'Audio', 'Wearables'];

const ShopSection = ({ onOpenProduct, onAddToCart }) => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('newest');
    const [filteredProducts, setFilteredProducts] = useState(shopProducts);

    useEffect(() => {
        let result = shopProducts;

        // Filter by Category
        if (activeCategory !== 'All') {
            result = result.filter(p => p.category === activeCategory);
        }

        // Search filter
        if (searchQuery) {
            result = result.filter(p => 
                p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.desc.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Sort
        result = [...result].sort((a, b) => {
            const priceA = parseInt(a.price.replace('₹', '').replace(',', ''));
            const priceB = parseInt(b.price.replace('₹', '').replace(',', ''));
            
            if (sortBy === 'low-high') return priceA - priceB;
            if (sortBy === 'high-low') return priceB - priceA;
            if (sortBy === 'top-rated') return b.rating - a.rating;
            return 0; // Default newest (original order)
        });

        setFilteredProducts(result);
    }, [activeCategory, searchQuery, sortBy]);

    return (
        <section className="container mx-auto px-4 py-20" id="accessories">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="w-full md:w-auto">
                    <h2 className="text-4xl font-bold uppercase mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-primary-red to-white">
                        Gear Up
                    </h2>
                    <p className="text-gray-400">Premium accessories for your modern lifestyle.</p>
                </div>
                
                {/* Search & Sort */}
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <div className="relative group">
                        <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary-red transition-colors"></i>
                        <input 
                            type="text" 
                            placeholder="Search gear..." 
                            className="bg-black border border-white/10 rounded-full py-3 pl-12 pr-6 text-white w-full sm:w-64 focus:outline-none focus:border-primary-red/50 transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <select 
                        className="bg-black border border-white/10 rounded-full py-3 px-6 text-white focus:outline-none focus:border-primary-red/50 cursor-pointer"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="newest">Newest First</option>
                        <option value="low-high">Price: Low to High</option>
                        <option value="high-low">Price: High to Low</option>
                        <option value="top-rated">Top Rated</option>
                    </select>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex overflow-x-auto pb-4 mb-10 gap-3 scrollbar-hide">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2.5 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                            activeCategory === cat 
                            ? 'bg-primary-red text-white shadow-lg shadow-primary-red/20' 
                            : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/5'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 min-h-[400px]">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div key={product.id} className="reveal active">
                            <ProductCard 
                                product={product} 
                                onOpen={onOpenProduct} 
                                onAddToCart={onAddToCart}
                                isGlassmorphism={true}
                            />
                        </div>
                    ))
                ) : (
                    <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-500">
                        <i className="fa-solid fa-box-open text-6xl mb-4 opacity-20"></i>
                        <p className="text-xl">No accessories found matching your criteria.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ShopSection;
