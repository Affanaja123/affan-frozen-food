import { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Search, ShoppingCart, User } from 'lucide-react';

export default function ProductDetail({ 
    searchTerm = '', 
    setSearchTerm = () => {}, 
    onAddToCart, 
    onBack, 
    cartCount = 0, 
    onOpenCart = () => {},
    onOpenProfile = () => {} 
}) {
    const [quantities, setQuantities] = useState({});

    const filteredProducts = PRODUCTS.filter((product) => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.variant.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const handleQtyChange = (productId, delta) => {
        setQuantities((prev) => {
            const current = prev[productId] || 1;
            const updated = current + delta;
            return { ...prev, [productId]: updated < 1 ? 1 : updated };
        });
    };

    return (
        <div className="bg-gray-100 min-h-screen text-gray-800">
            
            {/* --- NAVBAR DETAIL PRODUK --- */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-red-700 text-white shadow-md border-b border-red-800">
                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2 sm:gap-4">
                    
                    {/* Brand Kiri */}
                    <div className="flex items-center shrink-0">
                        <span className="font-bold text-xs sm:text-base lg:text-lg tracking-tight uppercase whitespace-nowrap">
                            Affan Frozen Food
                        </span>
                    </div>

                    {/* Kolom Search */}
                    <div className="flex-1 max-w-sm sm:max-w-md mx-1 sm:mx-4">
                        <div className="relative flex items-center">
                            <span className="absolute left-3 text-gray-400 pointer-events-none flex items-center">
                                <Search size={16} />
                            </span>
                            <input
                                type="text"
                                placeholder="Cari..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm rounded-full shadow-inner focus:outline-none focus:ring-2 focus:ring-red-300 transition bg-white text-gray-900 placeholder-gray-400 border border-gray-200"
                            />
                        </div>
                    </div>

                    {/* Ikon Keranjang & Profil di Kanan */}
                    <div className="flex items-center space-x-1 sm:space-x-3 shrink-0">
                        <button 
                            onClick={onOpenCart}
                            className="relative p-2 rounded-full transition text-white hover:bg-red-800/80 cursor-pointer"
                            aria-label="Keranjang Belanja"
                        >
                            <ShoppingCart size={20} className="transition transform hover:scale-105" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-yellow-400 text-red-950 font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        {/* Tombol Profil Langsung Pindah Halaman (Tanpa Alert / Dropdown) */}
                        <button 
                            onClick={onOpenProfile}
                            className="p-2 rounded-full transition text-white hover:bg-red-800/80 cursor-pointer"
                            aria-label="Profil Pengguna"
                            title="Profil Pengguna"
                        >
                            <User size={20} className="transition transform hover:scale-105" />
                        </button>
                    </div>

                </div>
            </header>
            {/* --- END OF NAVBAR --- */}


            {/* KONTEN UTAMA */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 space-y-6">

                {/* Bar Navigasi Atas Katalog */}
                <div className="flex items-center justify-between bg-white px-6 py-4 rounded-2xl shadow-xs border border-gray-200/60">
                    <div className="flex items-center space-x-3">
                        <span className="text-xs font-bold text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full uppercase tracking-wider">
                            Katalog Resmi
                        </span>
                    </div>
                    
                    <button
                        onClick={onBack}
                        className="bg-gray-900 hover:bg-black text-white font-medium px-6 py-2 rounded-xl text-xs sm:text-sm transition-all shadow-xs flex items-center space-x-1.5 cursor-pointer"
                    >
                        <span>&larr; Kembali</span>
                    </button>
                </div>

                {/* Judul Kategori Produk */}
                <div className="text-center py-4 space-y-1">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">PRODUK</p>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Sosis</h1>
                </div>

                {/* Grid Produk Lengkap */}
                {filteredProducts.length === 0 ? (
                    <div className="w-full text-center py-20 text-gray-400 bg-white rounded-2xl border border-dashed border-gray-300">
                        <p className="text-sm font-medium text-gray-600">Produk yang dicari tidak ditemukan.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => {
                            const qty = quantities[product.id] || 1;
                            return (
                                <div 
                                    key={product.id} 
                                    className="bg-white rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between group relative"
                                >
                                    <div className="absolute top-3 right-3 z-10 bg-red-700 text-white text-[9px] font-extrabold px-2.5 py-1 rounded shadow-md tracking-widest uppercase">
                                        Halal
                                    </div>

                                    <div>
                                        <div className="h-48 bg-gray-50 overflow-hidden relative border-b border-gray-100">
                                            <img 
                                                src={product.image} 
                                                alt={product.name} 
                                                className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out" 
                                            />
                                        </div>
                                        <div className="p-4 space-y-1.5">
                                            <h3 className="font-semibold text-gray-900 text-sm line-clamp-1 group-hover:text-red-700 transition">
                                                {product.name}
                                            </h3>
                                            <p className="text-xs text-gray-500 font-normal">{product.variant}</p>
                                            <div className="flex items-center justify-between pt-2">
                                                <span className="font-bold text-red-700 text-sm sm:text-base">
                                                    Rp {product.price.toLocaleString('id-ID')}
                                                </span>
                                                <span className="text-xs text-gray-500 font-medium">Stok: {product.stock}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 pt-0 space-y-3">
                                        <div className="flex items-center justify-between border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                                            <button
                                                onClick={() => handleQtyChange(product.id, -1)}
                                                className="px-3.5 py-1.5 text-gray-600 hover:bg-gray-200 font-semibold text-sm transition"
                                            >
                                                -
                                            </button>
                                            <span className="text-xs font-bold text-gray-800">{qty}</span>
                                            <button
                                                onClick={() => handleQtyChange(product.id, 1)}
                                                className="px-3.5 py-1.5 text-gray-600 hover:bg-gray-200 font-semibold text-sm transition"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => onAddToCart(product, qty)}
                                            className="w-full bg-red-700 hover:bg-red-800 active:scale-95 text-white font-medium py-2.5 rounded-xl text-xs sm:text-sm transition-all duration-200 flex items-center justify-center space-x-1.5 shadow-sm cursor-pointer"
                                        >
                                            <span>Tambah Keranjang</span>
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

            </div>
        </div>
    );
}