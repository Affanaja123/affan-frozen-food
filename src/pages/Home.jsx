import { useState, useEffect } from 'react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import heroBannerImg from '../assets/gambar_tanpa_teks.png';
import heroBannerImg2 from '../assets/gambar_tanpa_teks.png';
import logoImg from '../assets/logo.jpeg';

export default function Home({ searchTerm, onAddToCart, onNavigateToDetail, onActiveSectionChange }) {
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

    // Efek untuk mendeteksi posisi scroll dan memperbarui menu aktif di Navbar
    useEffect(() => {
        const sections = ['home', 'tentang', 'kategori', 'produk'];

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200; // Offset agar deteksi lebih pas

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;

                    if (scrollPosition >= top && scrollPosition < top + height) {
                        if (onActiveSectionChange) {
                            onActiveSectionChange(sectionId);
                        }
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [onActiveSectionChange]);

    return (
        <div className="bg-gray-50 min-h-screen text-gray-800">

            {/* 1. Hero Section Full Layar dengan Background Fixed & Overlay Transparan Tipis */}
            <section
                id='home'
                className="relative min-h-screen flex items-center justify-center md:justify-end w-full bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden pt-20 md:pt-0"
                style={{ backgroundImage: `url(${heroBannerImg})` }}
            >
                {/* Overlay Transparan Merah-Putih yang Lebih Tipis & Lembut */}
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white/70 via-white/50 to-red-950/20 md:from-white/30 md:via-white/20 md:to-red-900/10 pointer-events-none"></div>

                {/* Konten Utama */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center md:justify-end items-center text-center md:text-right">
                    <div className="flex flex-col items-center md:items-end pr-0 md:pr-4 space-y-3 select-none w-full md:w-auto">
                        <span className="text-[11px] sm:text-sm font-bold tracking-[0.2em] sm:tracking-[0.25em] text-black uppercase bg-white/90 backdrop-blur-xs px-4 py-1.5 rounded-full shadow-xs border border-red-100">
                            Premium Quality
                        </span>
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-sm font-sans">
                            <span className="text-red-800 font-semibold">Affan Frozen Food</span>
                        </h2>
                        <p className="text-xs sm:text-sm font-medium text-gray-700 md:text-gray-600 tracking-wide">
                            Terpercaya & Higienis untuk Keluarga
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Tentang Kami Section */}
            <section id="tentang" className="relative w-full bg-white text-gray-900 scroll-mt-32 overflow-hidden py-16 sm:py-24 lg:py-28">
                {/* Outline watermark, repeated across the top like the reference */}
                <div aria-hidden="true" className="absolute top-2 left-0 w-full overflow-hidden pointer-events-none select-none">
                    <div
                        className="whitespace-nowrap text-[4.5rem] sm:text-[7rem] lg:text-[8rem] font-normal leading-none tracking-tight text-transparent"
                        style={{
                            WebkitTextStroke: '2px #e6e7e1',
                            fontFamily: 'Poppins, sans-serif'
                        }}
                    >
                        aboutus aboutus aboutas
                    </div>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <h2 className="relative z-10 mb-8 sm:mb-10 ml-6 sm:ml-10 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-emerald-800">
                        About Us
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-end">
                        {/* Gambar disembunyikan di HP/Mobile (hidden), dan muncul kembali di layar MD ke atas (md:block) */}
                        <div className="relative z-0 h-72 sm:h-[380px] lg:h-[420px] overflow-hidden rounded-tl-[76px] rounded-bl-[76px] bg-white md:mr-[-3rem] lg:mr-[-5rem] md:translate-x-6 lg:translate-x-10 hidden md:block">
                            <div className="absolute inset-0 bg-cover bg-center" style={{
                                backgroundImage: `url(${heroBannerImg2})`,
                                maskImage: 'linear-gradient(to right, #000 38%, rgba(0,0,0,0.96) 54%, rgba(0,0,0,0.72) 70%, rgba(0,0,0,0.3) 86%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to right, #000 38%, rgba(0,0,0,0.96) 54%, rgba(0,0,0,0.72) 70%, rgba(0,0,0,0.3) 86%, transparent 100%)'
                            }} />
                            <div aria-hidden="true" className="absolute inset-0 scale-105 bg-cover bg-center blur-xl" style={{
                                backgroundImage: `url(${heroBannerImg2})`,
                                maskImage: 'linear-gradient(to right, transparent 38%, rgba(0,0,0,0.35) 52%, rgba(0,0,0,0.8) 68%, rgba(0,0,0,0.55) 82%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to right, transparent 38%, rgba(0,0,0,0.35) 52%, rgba(0,0,0,0.8) 68%, rgba(0,0,0,0.55) 82%, transparent 100%)'
                            }} />
                            <div aria-hidden="true" className="absolute inset-y-0 right-0 w-[42%] bg-gradient-to-r from-transparent via-white/55 to-white" />
                        </div>

                        <div className="relative z-10 space-y-6 pt-1 sm:pt-3 text-left sm:text-xl lg:text-[1.40rem] leading-[1.7] text-gray-900 md:-ml-8 lg:-ml-12" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                            <div className="space-y-6">
                                <p>
                                    <strong className="text-gray-900 font-semibold">Affan Frozen Food</strong> merupakan salah satu distributor terpercaya di Indonesia yang bergerak di bidang pengolahan hasil perikanan dan manufaktur frozen food berkualitas tinggi untuk memenuhi kebutuhan keluarga Anda.
                                </p>
                                <p>
                                    Berdiri dengan komitmen tinggi terhadap mutu, kami selalu menghadirkan produk yang higienis, halal, bergizi, serta siap saji untuk menemani setiap momen spesial di rumah.
                                </p>
                            </div>

                            <div className="pt-1">
                                <a
                                    href="#produk"
                                    className="inline-flex items-center justify-center bg-red-800 hover:bg-red-900 text-white font-medium px-7 py-3 rounded-full text-sm shadow-md transition-all duration-300 cursor-pointer"
                                >
                                    Lihat Katalog
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Kategori */}
            <section id="kategori" className="relative w-full bg-white px-5 sm:px-8 lg:px-10 py-16 sm:py-20 scroll-mt-32 overflow-hidden">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(ellipse at 18% 8%, rgba(229, 231, 235, 0.65), transparent 42%), radial-gradient(ellipse at 78% 42%, rgba(243, 244, 246, 0.8), transparent 44%), linear-gradient(115deg, #ffffff 0%, #f7f8f8 52%, #ffffff 100%)',
                    clipPath: 'ellipse(180% 100% at 50% 100%)'
                }} />
                <div className="relative z-10 w-full max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-8 sm:mb-10">
                        <div className="relative isolate py-4 sm:py-5">
                            <div aria-hidden="true" className="absolute -inset-x-8 -inset-y-5 -z-10 rounded-full blur-2xl opacity-80" style={{
                                backgroundImage: 'radial-gradient(ellipse at 35% 55%, rgba(220, 38, 38, 0.34), transparent 48%), radial-gradient(ellipse at 68% 45%, rgba(250, 204, 21, 0.38), transparent 52%)',
                                filter: 'blur(30px)'
                            }} />
                            <span
                                aria-hidden="true"
                                className="absolute left-0 top-0 -translate-y-1/4 whitespace-nowrap text-[4.5rem] sm:text-[7rem] lg:text-[8rem] font-normal leading-none tracking-tight text-transparent pointer-events-none select-none"
                                style={{
                                    WebkitTextStroke: '2px #e6e7e1',
                                    fontFamily: 'Poppins, sans-serif'
                                }}
                            >
                                category category category
                            </span>
                            <h2 className="relative text-4xl sm:text-5xl lg:text-6xl font-extrabold text-emerald-800 tracking-tight">
                                Category
                            </h2>
                        </div>

                        <div className="hidden sm:flex items-center space-x-2">
                            <button
                                onClick={() => {
                                    const container = document.getElementById('category-scroll-container');
                                    if (container) container.scrollBy({ left: -300, behavior: 'smooth' });
                                }}
                                className="p-2.5 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 transition-all cursor-pointer"
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
                                className="p-2.5 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 transition-all cursor-pointer"
                                aria-label="Scroll Kanan"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div
                        id="category-scroll-container"
                        className="flex space-x-5 sm:space-x-6 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth snap-x snap-mandatory"
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
                                className={`group relative min-w-[260px] sm:min-w-[280px] h-64 rounded-2xl overflow-hidden shadow-sm cursor-pointer transition-all duration-300 shrink-0 snap-start border
                                    ${selectedCategory === cat.id
                                        ? 'border-emerald-700 ring-2 ring-emerald-700/15'
                                        : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                                    }`}
                            >
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-500 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>

                                <div className="absolute bottom-0 inset-x-0 p-5 text-center">
                                    <h4 className="font-semibold text-white text-base sm:text-lg tracking-wide drop-shadow-md">
                                        {cat.name}
                                    </h4>
                                    <span className="text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                                        Lihat Produk &rarr;
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Katalog Produk (Dibatasi 4 Produk + Tombol Lihat Selengkapnya) */}
            <section id="produk" className="relative w-full px-5 sm:px-8 lg:px-10 py-16 sm:py-20 bg-white scroll-mt-32 overflow-hidden">
                <div className="relative z-10 w-full max-w-7xl mx-auto">
                    <div className="mb-10 sm:mb-12">
                        <div className="relative isolate inline-block py-4 sm:py-5">
                            <div aria-hidden="true" className="absolute -inset-x-8 -inset-y-5 -z-10 rounded-full blur-2xl opacity-70" style={{
                                backgroundImage: 'radial-gradient(ellipse at 35% 55%, rgba(220, 38, 38, 0.24), transparent 48%), radial-gradient(ellipse at 68% 45%, rgba(250, 204, 21, 0.27), transparent 52%)',
                                filter: 'blur(28px)'
                            }} />
                            <span aria-hidden="true" className="absolute left-0 top-0 -translate-y-1/4 whitespace-nowrap text-[4.5rem] sm:text-[7rem] lg:text-[8rem] font-normal leading-none tracking-tight text-transparent pointer-events-none select-none" style={{ WebkitTextStroke: '2px #e6e7e1', fontFamily: 'Poppins, sans-serif' }}>
                                product product product
                            </span>
                            <h2 className="relative text-4xl sm:text-5xl lg:text-6xl font-extrabold text-red-800 tracking-tight">
                                Product
                            </h2>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer border ${selectedCategory === cat.id ? 'bg-red-800 border-red-800 text-white shadow-sm' : 'bg-white/80 border-gray-200 text-gray-600 hover:border-red-700/40 hover:text-red-800'}`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {displayedProducts.length === 0 ? (
                        <div className="w-full text-center py-16 text-gray-400 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                            <p className="text-sm font-medium text-gray-600">Produk tidak ditemukan.</p>
                        </div>
                    ) : (
                        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
                            {displayedProducts.map((product) => {
                                const qty = quantities[product.id] || 1;
                                return (
                                    <div key={product.id} className="bg-white/95 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
                                        <div>
                                            <div className="h-36 sm:h-44 bg-gray-50 overflow-hidden relative">
                                                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out" />
                                                <span className="absolute top-3 right-3 bg-white/95 text-red-800 text-[9px] font-bold px-2 py-1 rounded-full shadow-sm tracking-wider">
                                                    HALAL
                                                </span>
                                            </div>
                                            <div className="p-4 space-y-1.5">
                                                <h3 className="font-semibold text-gray-900 text-sm sm:text-base line-clamp-1 group-hover:text-red-800 transition">
                                                    {product.name}
                                                </h3>
                                                <p className="text-xs text-gray-500 font-normal truncate">{product.variant}</p>
                                                <div className="flex items-center justify-between pt-0.5">
                                                    <span className="font-semibold text-red-800 text-sm">
                                                        Rp {product.price.toLocaleString('id-ID')}
                                                    </span>
                                                    <span className="text-[11px] text-gray-400 font-normal">Stok: {product.stock}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 pt-0 space-y-2.5">
                                            <div className="flex items-center justify-between border border-gray-200 rounded-xl overflow-hidden bg-gray-50/70">
                                                <button
                                                    onClick={() => handleQtyChange(product.id, -1)}
                                                    className="px-2.5 py-0.5 text-gray-500 hover:bg-gray-200 font-medium text-xs transition cursor-pointer"
                                                >
                                                    -
                                                </button>
                                                <span className="text-[11px] font-semibold text-gray-700">{qty}</span>
                                                <button
                                                    onClick={() => handleQtyChange(product.id, 1)}
                                                    className="px-2.5 py-0.5 text-gray-500 hover:bg-gray-200 font-medium text-xs transition cursor-pointer"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <button
                                                onClick={() => onAddToCart(product, qty)}
                                                className="w-full bg-red-800 hover:bg-red-900 active:scale-95 text-white font-medium py-2.5 rounded-xl text-xs transition-all duration-200 flex items-center justify-center space-x-1 shadow-sm cursor-pointer"
                                            >
                                                <span>Tambah Keranjang</span>
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    <div className="mt-12 text-center">
                        <button
                            onClick={onNavigateToDetail}
                            className="inline-flex items-center space-x-2 bg-white hover:bg-red-800 hover:text-white border border-gray-200 text-gray-800 font-medium px-8 py-3 rounded-full text-xs sm:text-sm transition-all duration-300 shadow-sm cursor-pointer"
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
