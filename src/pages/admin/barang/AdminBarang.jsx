import { useState } from 'react';
import { Search, Bell, Settings, Plus, Pencil, Trash2 } from 'lucide-react';
import AdminSidebar from '../../../components/AdminSidebar';
import frozenBagImg from '../../../assets/gambar_tanpa_teks.png';

export default function AdminBarang({ onLogout, onNavigateMenu, onAddProduct }) {
    // Data contoh barang/inventaris
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Nugget Ayam Premium',
            category: 'Olahan Ayam',
            price: 'Rp 45.000',
            stock: '10 UNIT',
            image: frozenBagImg,
        },
        {
            id: 2,
            name: 'Sosis Sapi Bakar',
            category: 'Olahan Daging Sapi',
            price: 'Rp 55.000',
            stock: '24 UNIT',
            image: frozenBagImg,
        },
    ]);

    const handleDelete = (id) => {
        setProducts(prev => prev.filter(item => item.id !== id));
    };

    return (
        <div className="flex h-screen bg-[#F8F9FA] font-sans overflow-hidden">
            {/* Sidebar Kiri */}
            <AdminSidebar activeMenu="barang" onNavigate={onNavigateMenu} onLogout={onLogout} />

            {/* Area Utama di Kanan Sidebar */}
            <div className="flex-1 flex flex-col ml-64 h-screen overflow-hidden">
                
                {/* Top Navbar */}
                <header className="h-20 bg-white border-b border-gray-200/60 px-8 flex items-center justify-between shrink-0 w-full z-10">
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

                {/* Konten Utama */}
                <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-[#F8F9FA]">
                    
                    {/* Header Judul & Tombol Tambah Barang */}
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 tracking-tight">Manajemen Barang</h2>
                            <p className="text-xs text-gray-500 mt-0.5">Kelola stok dan inventaris frozen food Anda secara real-time.</p>
                        </div>
                        <button 
                            onClick={onAddProduct}
                            className="bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white font-medium px-5 py-2.5 rounded-xl text-xs transition shadow-sm flex items-center space-x-2 cursor-pointer"
                        >
                            <Plus size={16} />
                            <span>Tambah Barang</span>
                        </button>
                    </div>

                    {/* Kartu Tabel Inventaris */}
                    <div className="bg-white rounded-2xl border border-gray-200/70 shadow-2xs overflow-hidden flex flex-col justify-between min-h-[500px]">
                        
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-100 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                                        <th className="py-4 px-8">Produk</th>
                                        <th className="py-4 px-6">Kategori</th>
                                        <th className="py-4 px-6">Harga</th>
                                        <th className="py-4 px-6">Stok</th>
                                        <th className="py-4 px-8 text-right">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50 text-xs text-gray-800">
                                    {products.length === 0 ? (
                                        <tr>
                                            <td colSpan="5" className="py-12 text-center text-gray-400 text-xs">
                                                Belum ada data barang tersedia.
                                            </td>
                                        </tr>
                                    ) : (
                                        products.map((item) => (
                                            <tr key={item.id} className="hover:bg-gray-50/40 transition">
                                                <td className="py-4 px-8 flex items-center space-x-3.5">
                                                    <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200/60 p-1 flex items-center justify-center shrink-0 overflow-hidden">
                                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                                                    </div>
                                                    <span className="font-semibold text-gray-900 text-sm">{item.name}</span>
                                                </td>
                                                <td className="py-4 px-6">
                                                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-medium bg-red-50 text-red-700 border border-red-100/50">
                                                        {item.category}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 font-semibold text-gray-900">{item.price}</td>
                                                <td className="py-4 px-6 font-medium text-gray-700">{item.stock}</td>
                                                <td className="py-4 px-8 text-right space-x-2">
                                                    {/* Tombol Edit Ikon */}
                                                    <button 
                                                        title="Edit Barang"
                                                        className="p-2 bg-gray-100 hover:bg-black hover:text-white text-gray-700 rounded-xl transition shadow-2xs inline-flex items-center justify-center cursor-pointer"
                                                    >
                                                        <Pencil size={15} />
                                                    </button>
                                                    {/* Tombol Delete Ikon */}
                                                    <button 
                                                        onClick={() => handleDelete(item.id)}
                                                        title="Hapus Barang"
                                                        className="p-2 bg-red-50 hover:bg-red-600 hover:text-white text-red-600 rounded-xl transition shadow-2xs inline-flex items-center justify-center cursor-pointer"
                                                    >
                                                        <Trash2 size={15} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Footer Tabel */}
                        <div className="px-8 py-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                            <span>Menampilkan {products.length} barang</span>
                            <div className="flex items-center space-x-1">
                                <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-gray-400 bg-gray-50 cursor-not-allowed">
                                    Sebelumnya
                                </button>
                                <button className="px-3 py-1.5 bg-red-700 text-white font-semibold rounded-lg shadow-2xs">
                                    1
                                </button>
                                <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition cursor-pointer">
                                    Berikutnya
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}