import { useState } from 'react';
import { Search, Bell, Settings, ChevronDown, Camera, Save, Info } from 'lucide-react';
import AdminSidebar from '../../../components/AdminSidebar';
import logoImg from '../../../assets/logo.jpeg';

export default function AdminTambahBarang({ onLogout, onNavigateMenu, onBack }) {
    const [productName, setProductName] = useState('Nugget Ayam Premium');
    const [category, setCategory] = useState('Olahan Ayam');
    const [price, setPrice] = useState('45.000');
    const [stock, setStock] = useState('42');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Produk berhasil disimpan!');
        if (onBack) onBack();
    };

    return (
        <div className="flex h-screen bg-[#F8F9FA] font-sans overflow-hidden">
            {/* Panggil Sidebar Kiri dengan menu aktif 'barang' */}
            <AdminSidebar activeMenu="barang" onNavigate={onNavigateMenu} onLogout={onLogout} />

            {/* Area Utama di Kanan Sidebar (Responsif Mobile & Desktop) */}
            <div className="flex-1 flex flex-col lg:ml-64 ml-0 h-screen overflow-hidden pt-16 lg:pt-0">
                
                {/* Top Navbar Desktop */}
                <header className="hidden lg:flex h-20 bg-white border-b border-gray-200/60 px-8 items-center justify-between shrink-0 w-full z-10">
                    <div className="flex-1 max-w-md mx-4">
                        <div className="relative flex items-center">
                            <span className="absolute left-3.5 text-gray-400 flex items-center pointer-events-none">
                                <Search size={16} />
                            </span>
                            <input
                                type="text"
                                placeholder="Cari produk frozen..."
                                className="w-full pl-10 pr-4 py-2 text-xs text-gray-800 bg-gray-50/80 border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-red-600/20 focus:border-red-600 transition"
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-3 shrink-0">
                        <button className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition cursor-pointer">
                            <Bell size={18} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition cursor-pointer">
                            <Settings size={18} />
                        </button>
                        <div className="h-6 w-[1px] bg-gray-200 mx-1"></div>
                        <div className="flex items-center space-x-3 pl-1">
                            <div className="text-right">
                                <p className="text-xs font-semibold text-gray-800">Budi Admin</p>
                                <p className="text-[10px] text-gray-400 font-medium tracking-wide uppercase">Super Admin</p>
                            </div>
                            <div className="w-9 h-9 rounded-full bg-red-700 text-white font-medium flex items-center justify-center shadow-xs overflow-hidden">
                                <span className="text-xs">B</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Konten Utama Halaman Tambah Barang (Scrollable) */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6 bg-[#F8F9FA]">
                    
                    {/* Header Judul & Tombol Kembali */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <h2 className="text-base sm:text-xl font-bold text-gray-900 tracking-tight">Tambah Barang</h2>
                            <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">Perbarui informasi produk dan inventaris gudang.</p>
                        </div>
                        <button 
                            onClick={onBack}
                            className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white font-medium px-6 py-2.5 rounded-xl text-xs transition shadow-sm flex items-center justify-center space-x-2 cursor-pointer"
                        >
                            <span>KEMBALI</span>
                        </button>
                    </div>

                    {/* Form Layout Utama (Grid 2 Kolom) */}
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-12">
                        
                        {/* Kolom Kiri: Informasi Umum & Harga Inventaris */}
                        <div className="lg:col-span-2 space-y-6">
                            
                            {/* Kartu 1: Informasi Umum */}
                            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200/70 shadow-2xs space-y-5">
                                <h3 className="text-sm font-semibold text-gray-900">Informasi Umum</h3>
                                
                                <div className="space-y-4">
                                    <div className="space-y-1.5">
                                        <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                                            NAMA PRODUK
                                        </label>
                                        <input
                                            type="text"
                                            value={productName}
                                            onChange={(e) => setProductName(e.target.value)}
                                            className="w-full px-4 py-2.5 text-xs text-gray-900 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-red-600/20 focus:border-red-600 transition"
                                            placeholder="Masukkan nama produk..."
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                                            KATEGORI
                                        </label>
                                        <div className="relative">
                                            <select
                                                value={category}
                                                onChange={(e) => setCategory(e.target.value)}
                                                className="w-full px-4 py-2.5 text-xs text-gray-900 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-red-600/20 focus:border-red-600 transition appearance-none cursor-pointer"
                                            >
                                                <option value="Olahan Ayam">Olahan Ayam</option>
                                                <option value="Olahan Daging Sapi">Olahan Daging Sapi</option>
                                                <option value="Seafood">Seafood</option>
                                                <option value="Kentang & Lainnya">Kentang & Lainnya</option>
                                            </select>
                                            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                                                <ChevronDown size={16} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Kartu 2: Harga & Inventaris */}
                            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200/70 shadow-2xs space-y-5">
                                <h3 className="text-sm font-semibold text-gray-900">Harga & Inventaris</h3>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                                            HARGA JUAL (IDR)
                                        </label>
                                        <div className="relative flex items-center">
                                            <span className="absolute left-3.5 text-gray-400 text-xs font-medium">Rp</span>
                                            <input
                                                type="text"
                                                value={price}
                                                onChange={(e) => setPrice(e.target.value)}
                                                className="w-full pl-10 pr-4 py-2.5 text-xs text-gray-900 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-red-600/20 focus:border-red-600 transition font-semibold"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                                            STOK SAAT INI
                                        </label>
                                        <input
                                            type="number"
                                            value={stock}
                                            onChange={(e) => setStock(e.target.value)}
                                            className="w-full px-4 py-2.5 text-xs text-gray-900 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-red-600/20 focus:border-red-600 transition font-semibold"
                                        />
                                    </div>
                                </div>

                                {/* Kotak Informasi Catatan */}
                                <div className="p-4 bg-sky-50/60 border border-sky-100 rounded-xl flex items-start space-x-3 text-sky-900 text-xs">
                                    <Info size={18} className="text-sky-600 shrink-0 mt-0.5" />
                                    <p className="leading-relaxed font-normal">
                                        Stok ini akan langsung terupdate di semua kanal penjualan setelah perubahan disimpan. Pastikan hitungan fisik sudah sesuai.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Kolom Kanan: Foto Produk & Tombol Simpan */}
                        <div className="space-y-6">
                            
                            {/* Kartu Foto Produk */}
                            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200/70 shadow-2xs space-y-4">
                                <h3 className="text-sm font-semibold text-gray-900">Foto Produk</h3>
                                
                                <div className="w-full max-w-[200px] sm:max-w-none mx-auto aspect-square rounded-2xl bg-gray-100 overflow-hidden border border-gray-200/60 flex items-center justify-center relative">
                                    <img 
                                        src={logoImg} 
                                        alt="Pratinjau Produk" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <button
                                    type="button"
                                    className="w-full py-2.5 border border-dashed border-gray-300 hover:border-red-600 hover:bg-red-50/40 text-gray-700 hover:text-red-700 rounded-xl text-xs font-medium transition flex items-center justify-center space-x-2 cursor-pointer"
                                >
                                    <Camera size={16} />
                                    <span>GANTI FOTO</span>
                                </button>

                                <p className="text-[10px] text-center text-gray-400 font-normal">
                                    Format: JPG, PNG. Maksimal 2MB.
                                </p>
                            </div>

                            {/* Tombol Simpan Barang */}
                            <button
                                type="submit"
                                className="w-full bg-[#990000] hover:bg-red-800 active:scale-[0.98] text-white font-medium py-3.5 px-6 rounded-2xl text-xs transition shadow-md shadow-red-900/20 flex items-center justify-center space-x-2 cursor-pointer"
                            >
                                <Save size={16} />
                                <span>Simpan Barang</span>
                            </button>

                        </div>

                    </form>

                </div>

            </div>
        </div>
    );
}