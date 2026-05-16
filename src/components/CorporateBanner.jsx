import React, { useEffect, useRef } from 'react';

// ── Floating tech icon ring ────────────────────────────────────
const orbitIcons = [
    { icon: '⚡', delay: '0s', label: 'Fast Charge' },
    { icon: '📶', delay: '-2s', label: 'Connectivity' },
    { icon: '🔋', delay: '-4s', label: 'Long Battery' },
    { icon: '🛡️', delay: '-6s', label: 'Protection' },
    { icon: '🎧', delay: '-8s', label: 'Audio' },
    { icon: '💾', delay: '-10s', label: 'Storage' },
];

// ── Particle dots ──────────────────────────────────────────────
const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: 2 + Math.random() * 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 4,
}));

const CorporateBanner = () => {
    const canvasRef = useRef(null);

    return (
        <section className="container mx-auto px-4 py-16" id="bulk-orders">
            <div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                style={{
                    background: 'linear-gradient(135deg, #080808 0%, #12001a 40%, #001020 100%)',
                    minHeight: '480px',
                }}
            >
                {/* ── Animated grid ──────────────────────────── */}
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(232,0,28,0.06) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(232,0,28,0.06) 1px, transparent 1px)
                    `,
                    backgroundSize: '48px 48px',
                }} />

                {/* ── Floating particles ─────────────────────── */}
                {particles.map(p => (
                    <div
                        key={p.id}
                        className="absolute rounded-full"
                        style={{
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            background: p.id % 3 === 0 ? '#E8001C' : p.id % 3 === 1 ? '#6c00cc' : '#0066ff',
                            opacity: 0.5,
                            animation: `floatParticle ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
                        }}
                    />
                ))}

                {/* ── Left content ───────────────────────────── */}
                <div className="relative z-10 flex flex-col lg:flex-row items-center min-h-[480px]">
                    <div className="flex-1 p-10 md:p-16 text-white">
                        {/* Label */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary-red animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-300">Bulk Orders</span>
                        </div>

                        <h2
                            className="text-4xl md:text-5xl font-extrabold mb-5 uppercase leading-tight"
                            style={{ background: 'linear-gradient(90deg, #fff 0%, #ccc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                        >
                            Corporate<br />
                            <span style={{ background: 'linear-gradient(90deg, #E8001C, #ff6b35)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                Gifting
                            </span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
                            Customize &amp; brand mobile accessories for your entire team. Premium quality, bulk pricing, and same-day dispatch available.
                        </p>

                        {/* Feature chips */}
                        <div className="flex flex-wrap gap-3 mb-10">
                            {['🏷️ Custom Branding', '📦 Bulk Pricing', '🚚 Fast Delivery', '🎁 Gift Packaging'].map(tag => (
                                <span
                                    key={tag}
                                    className="text-sm font-semibold px-3 py-1.5 rounded-full text-gray-300"
                                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <a
                            href="mailto:mobilestudio.sales@gmail.com"
                            className="inline-flex items-center gap-3 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 group"
                            style={{ background: 'linear-gradient(135deg, #E8001C, #b50015)', boxShadow: '0 8px 30px rgba(232,0,28,0.35)' }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(232,0,28,0.45)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 30px rgba(232,0,28,0.35)'; }}
                        >
                            <i className="fa-solid fa-envelope" />
                            Get Bulk Quote
                            <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* ── Right: Animated Phone ──────────────── */}
                    <div
                        className="flex-shrink-0 flex items-center justify-center p-10 lg:p-16 w-full lg:w-auto"
                        style={{ minWidth: '360px' }}
                    >
                        <div className="relative" style={{ width: '200px', height: '380px' }}>

                            {/* Outer pulsing rings */}
                            {[1, 2, 3].map(i => (
                                <div
                                    key={i}
                                    className="absolute rounded-full border border-primary-red/20"
                                    style={{
                                        inset: `-${i * 40}px`,
                                        animation: `pulseRing 3s ease-out ${i * 0.8}s infinite`,
                                    }}
                                />
                            ))}

                            {/* Phone body */}
                            <div
                                className="absolute inset-0 rounded-[36px]"
                                style={{
                                    background: 'linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 50%, #111 100%)',
                                    border: '2px solid rgba(255,255,255,0.15)',
                                    boxShadow: '0 0 60px rgba(232,0,28,0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
                                    animation: 'phoneFloat 4s ease-in-out infinite',
                                }}
                            >
                                {/* Side button */}
                                <div className="absolute -right-1 top-20 w-1 h-12 rounded-full bg-white/20" />
                                <div className="absolute -left-1 top-16 w-1 h-8 rounded-full bg-white/20" />
                                <div className="absolute -left-1 top-28 w-1 h-8 rounded-full bg-white/20" />

                                {/* Notch */}
                                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-5 rounded-full bg-black flex items-center justify-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                                </div>

                                {/* Screen */}
                                <div
                                    className="absolute rounded-[30px] overflow-hidden"
                                    style={{
                                        inset: '6px',
                                        background: 'linear-gradient(135deg, #0a0010 0%, #050020 50%, #0a0010 100%)',
                                    }}
                                >
                                    {/* Screen glow */}
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            background: 'radial-gradient(ellipse at 50% 40%, rgba(232,0,28,0.3) 0%, transparent 70%)',
                                            animation: 'screenGlow 2s ease-in-out infinite alternate',
                                        }}
                                    />

                                    {/* App icons grid */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
                                        <div className="text-[10px] text-white/60 font-bold uppercase tracking-widest mb-1">TMS Shop</div>
                                        <div className="grid grid-cols-3 gap-2">
                                            {['📱', '🎧', '🔌', '🔋', '💻', '⌚', '📷', '🖥️', '🎮'].map((icon, i) => (
                                                <div
                                                    key={i}
                                                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                                                    style={{
                                                        background: 'rgba(255,255,255,0.08)',
                                                        animation: `iconPop 0.5s ease ${i * 0.08}s both`,
                                                        border: '1px solid rgba(255,255,255,0.05)',
                                                    }}
                                                >
                                                    {icon}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Bottom bar */}
                                        <div className="mt-2 w-full h-1 rounded-full bg-primary-red/40" />
                                        <div className="w-full flex justify-between px-1">
                                            <div className="text-[8px] text-white/30">9:41</div>
                                            <div className="text-[8px] text-white/30">🔋 98%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Orbiting tech icons */}
                            {orbitIcons.map((item, i) => (
                                <div
                                    key={i}
                                    className="absolute top-1/2 left-1/2"
                                    style={{
                                        width: '300px',
                                        height: '300px',
                                        marginLeft: '-150px',
                                        marginTop: '-150px',
                                        animation: `orbit 12s linear ${item.delay} infinite`,
                                    }}
                                >
                                    <div
                                        className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                                        style={{
                                            background: 'rgba(255,255,255,0.07)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            backdropFilter: 'blur(4px)',
                                            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                                        }}
                                    >
                                        {item.icon}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Corner glow accents ─────────────────────── */}
                <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-20 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, #E8001C, transparent 70%)', transform: 'translate(-40%, -40%)' }} />
                <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-15 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, #6c00cc, transparent 70%)', transform: 'translate(40%, 40%)' }} />
            </div>
        </section>
    );
};

export default CorporateBanner;
