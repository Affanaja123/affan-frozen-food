import { useState } from 'react';
import { Search, Bell, Settings, Plus, Edit3, Trash2 } from 'lucide-react';
import AdminSidebar from "../../../components/AdminSidebar";

export default function AdminKategori({ onNavigate, onLogout }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const [categories, setCategories] = useState([
        { id: 1, name: 'Nugget', totalProduct: '142 Item', createdAt: '12 Okt 2023', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=100&auto=format&fit=crop&q=60' },
        { id: 2, name: 'Sosis', totalProduct: '98 Item', createdAt: '14 Okt 2023', image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?w=100&auto=format&fit=crop&q=60' },
        { id: 3, name: 'Bakso', totalProduct: '76 Item', createdAt: '15 Okt 2023', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=100&auto=format&fit=crop&q=60' },
        { id: 4, name: 'Kentang Goreng', totalProduct: '50 Item', createdAt: '18 Okt 2023', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=100&auto=format&fit=crop&q=60' },
    ]);

    return (
        <div className="flex h-screen bg-[#F8F9FA] font-sans overflow-hidden">
            <AdminSidebar activeMenu="kategori" onNavigate={onNavigate} onLogout={onLogout} />

            <main className="flex-1 flex flex-col lg:ml-64 ml-0 h-screen overflow-hidden pt-16 lg:pt-0">
                <header className="hidden lg:flex h-20 bg-white border-b border-gray-200/60 px-8 items-center justify-between shrink-0 w-full z-10">
                    <div className="flex-1 max-w-md mx-4">
                        <div className="relative flex items-center">
                        <span className="absolute left-3.5 text-gray-400 flex items-center pointer-events-none">
                            <Search size={16} />
                        </span>
                        <input
                            type="text"
                            placeholder="Cari produk frozen..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
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

                <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6 bg-[#F8F9FA]">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <h2 className="text-base sm:text-xl font-bold text-gray-900 tracking-tight">Manajemen Kategori</h2>
                            <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">Atur kategori produk frozen food untuk pengorganisasian inventaris yang lebih baik.</p>
                        </div>
                        <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white font-medium px-5 py-2.5 rounded-xl text-xs transition shadow-sm flex items-center justify-center space-x-2 cursor-pointer">
                            <Plus size={16} />
                            <span>Tambah Kategori</span>
                        </button>
                    </div>

                    <div className="bg-white rounded-2xl border border-gray-200/70 shadow-2xs overflow-hidden flex flex-col justify-between">
                        <div className="px-4 sm:px-8 py-4 border-b border-gray-100 bg-white">
                            <h3 className="text-sm font-semibold text-gray-900">Daftar Kategori</h3>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[650px] sm:min-w-full">
                                <thead>
                                    <tr className="border-b border-gray-100 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                                        <th className="py-4 px-4 sm:px-8">Nama Kategori</th>
                                        <th className="py-4 px-4 sm:px-6">Total Produk</th>
                                        <th className="py-4 px-4 sm:px-6">Tanggal Dibuat</th>
                                        <th className="py-4 px-4 sm:px-8 text-right">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50 text-xs text-gray-800">
                                    {categories.map((cat) => (
                                        <tr key={cat.id} className="hover:bg-gray-50/50 transition">
                                            <td className="py-4 px-4 sm:px-8 flex items-center space-x-3">
                                                <img src={cat.image} alt={cat.name} className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover border border-gray-100 shadow-2xs shrink-0" />
                                                <span className="font-semibold text-gray-900 text-xs sm:text-sm">{cat.name}</span>
                                            </td>
                                            <td className="py-4 px-4 sm:px-6 text-gray-600 font-medium">{cat.totalProduct}</td>
                                            <td className="py-4 px-4 sm:px-6 text-gray-500">{cat.createdAt}</td>
                                            <td className="py-4 px-4 sm:px-8 text-right">
                                                <div className="inline-flex items-center justify-end space-x-2">
                                                    <button 
                                                        title="Edit"
                                                        className="w-10 h-10 rounded-xl bg-gray-100/80 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition cursor-pointer shadow-2xs"
                                                    >
                                                        <Edit3 size={16} />
                                                    </button>
                                                    <button 
                                                        title="Delete"
                                                        className="w-10 h-10 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 flex items-center justify-center transition cursor-pointer shadow-2xs"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="px-4 sm:px-8 py-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
                            <span>Menampilkan 1-4 dari 24 kategori</span>
                            <div className="flex items-center space-x-1">
                                <button disabled className="px-3 py-1.5 rounded-lg border border-gray-200 text-gray-300 bg-gray-50 cursor-not-allowed">Sebelumnya</button>
                                <button onClick={() => setCurrentPage(1)} className={`px-3 py-1.5 rounded-lg font-semibold ${currentPage === 1 ? 'bg-red-700 text-white shadow-2xs' : 'border border-gray-200 text-gray-600'}`}>1</button>
                                <button onClick={() => setCurrentPage(2)} className={`px-3 py-1.5 rounded-lg font-semibold ${currentPage === 2 ? 'bg-red-700 text-white shadow-2xs' : 'border border-gray-200 text-gray-600'}`}>2</button>
                                <button onClick={() => setCurrentPage(3)} className="px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition">Berikutnya</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
