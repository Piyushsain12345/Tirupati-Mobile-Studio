import React from 'react';

const blogs = [
    {
        tag: 'GUIDE',
        title: 'How to Choose the Best MagSafe Case',
        desc: 'A complete guide to understanding MagSafe technology and choosing the right protection for your iPhone.',
        img: 'https://images.unsplash.com/photo-1512428559083-a4019321945c?auto=format&fit=crop&q=80&w=600'
    },
    {
        tag: 'TECH',
        title: 'The Future of Wireless Audio',
        desc: 'Discover the latest trends in TWS earbuds and how noise cancellation is changing the way we listen to music.',
        img: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=600'
    },
    {
        tag: 'REPAIR',
        title: 'Common Mobile Screen Issues',
        desc: "Learn about different types of screen damage and why professional repair is essential for your phone's longevity.",
        img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600'
    }
];

const BlogSection = () => {
    return (
        <section className="container mx-auto px-4 py-16 reveal" id="blog">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold uppercase relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-primary-red">
                    Latest From Our Blog
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogs.map((blog, i) => (
        <div className="bg-white border border-[#eee] rounded-xl overflow-hidden group" key={i}>
                        <div className="h-52 overflow-hidden bg-gray-100">
                            <img 
                                src={blog.img} 
                                alt={blog.title} 
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                onError={(e) => { e.target.style.display='none'; e.target.parentNode.style.background='linear-gradient(135deg,#f0f0f0,#e0e0e0)'; }}
                            />
                        </div>
                        <div className="p-6">
                            <span className="text-primary-red text-xs font-bold uppercase">{blog.tag}</span>
                            <h3 className="text-xl font-bold mt-2.5 mb-2.5 leading-tight">{blog.title}</h3>
                            <p className="text-gray-500 text-sm mb-4 leading-relaxed">{blog.desc}</p>
                            <a href="#" className="text-primary-red font-bold text-sm inline-flex items-center gap-1 hover:translate-x-1 transition-transform">
                                Read More &rarr;
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogSection;
