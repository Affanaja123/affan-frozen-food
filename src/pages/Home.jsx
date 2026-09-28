import { useState } from 'react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import heroBannerImg from '../assets/gambar_tanpa_teks.png';
import heroBannerImg2 from '../assets/gambar_tanpa_teks.png';
import logoImg from '../assets/logo.jpeg';

export default function Home({ searchTerm, onAddToCart, onNavigateToDetail }) {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [quantities, setQuantities] = useState({});

    // Filter produk berdasarkan kategori dan search term
    const filteredProducts = PRODUCTS.filter((product) => {
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.variant.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Batasi hanya menampilkan maksimal 4 produk di halaman home
    const displayedProducts = filteredProducts.slice(0, 4);

    const handleQtyChange = (productId, delta) => {
        setQuantities((prev) => {
            const current = prev[productId] || 1;
            const updated = current + delta;
            return { ...prev, [productId]: updated < 1 ? 1 : updated };
        });
    };

    return (
        <div className="bg-gray-50 min-h-screen text-gray-800">

            {/* 1. Hero Section Full Layar dengan Kotak Teks Sangat Transparan */}
            <section
                id='home'
                className="relative min-h-screen flex items-center w-full bg-cover bg-center bg-no-repeat overflow-hidden"
                style={{ backgroundImage: `url(${heroBannerImg})` }}
            >
                {/* Overlay tipis */}
                <div className="absolute inset-0 bg-black/10"></div>

                {/* Konten Utama */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center pt-20">

                    {/* Teks Branding di Sebelah Kanan */}
                    <div className="hidden md:flex flex-col items-end text-right pr-4 space-y-2 select-none">
                        <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-red-700 uppercase bg-white/70 backdrop-blur-xs px-4 py-1.5 rounded-full shadow-2xs border border-red-100">
                            Premium Quality
                        </span>
                        <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight drop-shadow-sm font-sans">
                            <span className="text-red-800 font-semibold">Affan Frozen Food</span>
                        </h2>
                        <p className="text-xs sm:text-sm font-medium text-gray-600 tracking-wide">
                            Terpercaya & Higienis untuk Keluarga
                        </p>
                    </div>

                </div>
            </section>

            {/* 2. Tentang Kami Section dengan Banner Gambar Tanpa Tulisan di Kanan */}
            <section id="tentang" className="relative w-full px-4 sm:px-6 lg:px-8 py-24 bg-gray-100/90 text-gray-800 scroll-mt-32 overflow-hidden">

                {/* Banner Gambar di Sisi Kanan Tanpa Tulisan dengan Efek Transparan (Fade Gradient) */}
                <div className="absolute top-0 right-0 bottom-0 w-full md:w-1/2 pointer-events-none z-0 overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-40 sm:opacity-50"
                        style={{
                            backgroundImage: `url(${heroBannerImg2})`,
                            maskImage: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 50%)',
                            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 50%)'
                        }}
                    ></div>
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Sisi Kiri: Judul, Deskripsi, dan Tombol Baca Selengkapnya */}
                    <div className="space-y-6">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-bold text-red-700 tracking-wide">
                            Kenal Lebih Dekat
                        </h2>

                        <div className="space-y-4 text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                            <p>
                                <strong className="text-gray-900 font-semibold">Affan Frozen Food</strong> merupakan salah satu distributor terpercaya di Indonesia yang bergerak di bidang pengolahan hasil perikanan dan manufaktur frozen food berkualitas tinggi untuk memenuhi kebutuhan keluarga Anda.
                            </p>
                            <p>
                                Berdiri dengan komitmen tinggi terhadap mutu, kami selalu menghadirkan produk yang higienis, halal, bergizi, serta siap saji untuk menemani setiap momen spesial di rumah.
                            </p>
                        </div>

                        <div className="pt-2">
                            <a
                                href="#produk"
                                className="inline-flex items-center justify-center bg-red-700 hover:bg-red-800 text-white font-medium px-7 py-3 rounded-full text-xs sm:text-sm shadow-md transition-all duration-300 cursor-pointer"
                            >
                                Baca Selengkapnya
                            </a>
                        </div>
                    </div>

                    {/* Sisi Kanan: Tampilan Logo Brand yang Elegan */}
                    {/* <div className="flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-gray-200/60 shadow-sm group">
                        <div className="overflow-hidden mb-4">
                            <img 
                                src={logoImg} 
                                alt="Affan Frozen Food Logo" 
                                className="h-48 sm:h-56 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 tracking-wide">Affan Frozen Food</h3>
                        <p className="text-xs text-red-700 font-semibold tracking-widest uppercase mt-0.5">Terpercaya & Higienis</p>
                    </div> */}

                </div>
            </section>

            {/* 3. Pilihan Kategori / Carousel dengan Background Motif Gelombang Ombak Melingkar (Seigaiha) */}
            <section id="kategori" className="relative w-full px-4 sm:px-6 lg:px-8 py-24 bg-red-700 text-white scroll-mt-32 overflow-hidden">

                {/* Motif Gelombang Ombak Melingkar (Seigaiha) */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-25">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                        <defs>
                            <pattern id="wave-pattern-cat" width="60" height="30" patternUnits="userSpaceOnUse">
                                <path d="M 0 30 A 30 30 0 0 1 60 30 Z M 30 30 A 30 30 0 0 1 90 30 Z M 15 15 A 15 15 0 0 1 45 15 Z" fill="none" stroke="#8B0000" strokeWidth="3" />
                                <path d="M -30 30 A 30 30 0 0 1 30 30 Z" fill="none" stroke="#8B0000" strokeWidth="3" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#wave-pattern-cat)" />
                    </svg>
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <span className="text-xs font-sans text-red-800 uppercase tracking-widest bg-white px-3.5 py-1.5 rounded-md border border-red-600">
                                Kategori Pilihan
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-serif italic !text-white mt-3 tracking-tight" style={{ color: '#ffffff' }}>
                                Jelajahi Kategori Populer
                            </h2>
                        </div>

                        {/* Tombol Navigasi Panah Scroll Kanan-Kiri */}
                        <div className="hidden sm:flex items-center space-x-2">
                            <button
                                onClick={() => {
                                    const container = document.getElementById('category-scroll-container');
                                    if (container) container.scrollBy({ left: -300, behavior: 'smooth' });
                                }}
                                className="p-2.5 rounded-full bg-white/90 hover:bg-white text-red-700 shadow-sm transition-all"
                                aria-label="Scroll Kiri"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <button
                                onClick={() => {
                                    const container = document.getElementById('category-scroll-container');
                                    if (container) container.scrollBy({ left: 300, behavior: 'smooth' });
                                }}
                                className="p-2.5 rounded-full bg-white/90 hover:bg-white text-red-700 shadow-sm transition-all"
                                aria-label="Scroll Kanan"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Container Scroll Horizontal */}
                    <div
                        id="category-scroll-container"
                        className="flex space-x-6 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth snap-x snap-mandatory"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                            <div
                                key={cat.id}
                                onClick={() => {
                                    setSelectedCategory(cat.id);
                                    const produkSection = document.getElementById('produk');
                                    if (produkSection) {
                                        produkSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className={`group relative min-w-[260px] sm:min-w-[280px] h-64 rounded-xl overflow-hidden shadow-xl cursor-pointer transition-all duration-500 shrink-0 snap-start 
                                    ${selectedCategory === cat.id
                                        ? 'border-2 border-white ring-4 ring-white/30 scale-[1.02]'
                                        : 'border border-white/50 ring-1 ring-inset ring-white/20 hover:border-white hover:ring-white/50'
                                    }`} 
                            >
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent group-hover:from-black/95 transition-colors"></div>

                                <div className="absolute bottom-0 inset-x-0 p-5 text-center">
                                    <h4 className="font-bold !text-white text-base sm:text-lg tracking-wide drop-shadow-md">
                                        {cat.name}
                                    </h4>
                                    <span className="text-xs text-red-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                                        Lihat Produk &rarr;
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Katalog Produk (Dibatasi 4 Produk + Tombol Lihat Selengkapnya) */}
            <section id="produk" className="w-full px-4 sm:px-6 lg:px-8 py-24 bg-white scroll-mt-32">
                <div className="w-full max-w-7xl mx-auto flex flex-col items-center">

                    {/* Header Katalog */}
                    <div className="w-full max-w-xl text-center mb-12 space-y-3">
                        <span className="inline-block text-xs font-sans text-red-700 uppercase tracking-wider bg-red-50 px-3 py-1 rounded-md">
                            Katalog Pilihan
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-serif italic text-gray-900 tracking-tight">
                            Semua Produk Pilihan
                        </h2>
                        {/* <p className="text-gray-400 text-xs sm:text-sm font-normal leading-relaxed">
                            Temukan berbagai produk makanan beku berkualitas tinggi siap saji untuk keluarga Anda.
                        </p> */}

                        {/* Filter Tabs Minimalis */}
                        <div className="flex flex-wrap justify-center gap-2 pt-3">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-normal transition-all ${selectedCategory === cat.id ? 'bg-red-700 text-white shadow-sm font-medium' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Grid (Maksimal 4 Produk) */}
                    {displayedProducts.length === 0 ? (
                        <div className="w-full text-center py-16 text-gray-400 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                            <p className="text-sm font-medium text-gray-600">Produk tidak ditemukan.</p>
                        </div>
                    ) : (
                        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
                            {displayedProducts.map((product) => {
                                const qty = quantities[product.id] || 1;
                                return (
                                    <div key={product.id} className="bg-white rounded-xl border border-gray-100 shadow-2xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between group">
                                        <div>
                                            <div className="h-36 bg-gray-50 overflow-hidden relative">
                                                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out" />
                                                <span className="absolute top-2 right-2 bg-red-700 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow-2xs tracking-wider">
                                                    HALAL
                                                </span>
                                            </div>
                                            <div className="p-3 space-y-1">
                                                <h3 className="font-medium text-gray-900 text-xs sm:text-sm line-clamp-1 group-hover:text-red-700 transition">
                                                    {product.name}
                                                </h3>
                                                <p className="text-[11px] text-gray-400 font-normal truncate">{product.variant}</p>
                                                <div className="flex items-center justify-between pt-0.5">
                                                    <span className="font-semibold text-red-700 text-xs sm:text-sm">
                                                        Rp {product.price.toLocaleString('id-ID')}
                                                    </span>
                                                    <span className="text-[10px] text-gray-400 font-normal">Stok: {product.stock}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Quantity & Add to Cart Controls */}
                                        <div className="p-3 pt-0 space-y-2">
                                            <div className="flex items-center justify-between border border-gray-200 rounded-lg overflow-hidden bg-gray-50/50">
                                                <button
                                                    onClick={() => handleQtyChange(product.id, -1)}
                                                    className="px-2.5 py-0.5 text-gray-500 hover:bg-gray-200 font-medium text-xs transition"
                                                >
                                                    -
                                                </button>
                                                <span className="text-[11px] font-semibold text-gray-700">{qty}</span>
                                                <button
                                                    onClick={() => handleQtyChange(product.id, 1)}
                                                    className="px-2.5 py-0.5 text-gray-500 hover:bg-gray-200 font-medium text-xs transition"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <button
                                                onClick={() => onAddToCart(product, qty)}
                                                className="w-full bg-red-700 hover:bg-red-800 active:scale-95 text-white font-medium py-1.5 rounded-lg text-[11px] transition-all duration-200 flex items-center justify-center space-x-1 shadow-2xs"
                                            >
                                                <span>Tambah Keranjang</span>
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* Tombol Lihat Selengkapnya untuk pindah ke halaman detail produk */}
                    <div className="mt-12 text-center">
                        <button
                            onClick={onNavigateToDetail}
                            className="inline-flex items-center space-x-2 bg-gray-100 hover:bg-red-700 hover:text-white text-gray-800 font-medium px-8 py-3 rounded-full text-xs sm:text-sm transition-all duration-300 shadow-2xs cursor-pointer"
                        >
                            <span>Lihat Selengkapnya</span>
                            <span>&rarr;</span>
                        </button>
                    </div>

                </div>
            </section>

        </div>
    );
}