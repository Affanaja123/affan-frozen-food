import { TrendingUp, Wallet, AlertTriangle, ShoppingBag, Bell, Settings, MoreHorizontal, Package, Clock, Truck } from 'lucide-react';
import AdminSidebar from '../../components/AdminSidebar';

export default function AdminDashboard({ onLogout, onNavigateMenu }) {
    return (
        <div className="flex h-screen bg-[#F8F9FA] font-sans overflow-hidden">
            {/* Panggil Sidebar Kiri */}
            <AdminSidebar activeMenu="dashboard" onNavigate={onNavigateMenu} onLogout={onLogout} />

            {/* Area Utama di Kanan Sidebar */}
            <div className="flex-1 flex flex-col ml-64 h-screen overflow-hidden">
                
                {/* Top Navbar */}
                <header className="h-20 bg-white border-b border-gray-200/60 px-8 flex items-center justify-between shrink-0 w-full z-10">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900 tracking-tight">Dashboard Overview</h2>
                        <p className="text-xs text-gray-500 mt-0.5">Selamat datang kembali, Admin. Berikut ringkasan operasional toko hari ini.</p>
                    </div>

                    {/* Bagian Kanan Navbar */}
                    <div className="flex items-center space-x-3">
                        <button className="p-2.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition cursor-pointer">
                            <Bell size={18} />
                        </button>
                        <button className="p-2.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition cursor-pointer">
                            <Settings size={18} />
                        </button>
                        <div className="h-6 w-[1px] bg-gray-200 mx-1"></div>
                        <div className="flex items-center space-x-3 pl-1">
                            <div className="text-right">
                                <p className="text-xs font-semibold text-gray-900">Administrator</p>
                                <p className="text-[10px] text-gray-400 font-medium tracking-wider uppercase">Super Admin</p>
                            </div>
                            <div className="w-9 h-9 rounded-full bg-red-700 text-white font-semibold flex items-center justify-center shadow-sm shadow-red-700/20">
                                <span className="text-xs">A</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Konten Dashboard Utama (Scrollable) */}
                <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-[#F8F9FA]">
                    
                    {/* Grid 6 Kartu Metrik */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        
                        {/* 1. PENJUALAN HARI INI */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-200/70 shadow-2xs flex flex-col justify-between space-y-3 relative overflow-hidden">
                            <div className="flex justify-between items-start">
                                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">PENJUALAN HARI INI</span>
                                <div className="p-2 rounded-xl bg-red-50 text-red-700">
                                    <TrendingUp size={16} />
                                </div>
                            </div>
                            <div className="flex items-baseline justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 tracking-tight">142 Item</h3>
                                    <p className="text-[11px] text-gray-400 font-normal mt-0.5">+18 item dari kemarin</p>
                                </div>
                                <span className="inline-flex items-center text-emerald-600 bg-emerald-50 text-[11px] font-semibold px-2 py-0.5 rounded-md">
                                    +12%
                                </span>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-700"></div>
                        </div>

                        {/* 2. TOTAL PENDAPATAN */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-200/70 shadow-2xs flex flex-col justify-between space-y-3 relative overflow-hidden">
                            <div className="flex justify-between items-start">
                                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">TOTAL PENDAPATAN</span>
                                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                                    <Wallet size={16} />
                                </div>
                            </div>
                            <div className="flex items-baseline justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 tracking-tight">Rp 12.450k</h3>
                                    <p className="text-[11px] text-gray-400 font-normal mt-0.5">Rp 2.100k hari ini</p>
                                </div>
                                <span className="inline-flex items-center text-emerald-600 bg-emerald-50 text-[11px] font-semibold px-2 py-0.5 rounded-md">
                                    +8.5%
                                </span>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500"></div>
                        </div>

                        {/* 3. PESANAN MASUK */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-200/70 shadow-2xs flex flex-col justify-between space-y-3 relative overflow-hidden">
                            <div className="flex justify-between items-start">
                                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">PESANAN MASUK</span>
                                <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
                                    <ShoppingBag size={16} />
                                </div>
                            </div>
                            <div className="flex items-baseline justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 tracking-tight">28 Baru</h3>
                                    <p className="text-[11px] text-gray-400 font-normal mt-0.5">4 menunggu pickup kurir</p>
                                </div>
                                <span className="inline-flex items-center text-emerald-600 bg-emerald-50 text-[11px] font-semibold px-2 py-0.5 rounded-md">
                                    +3%
                                </span>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500"></div>
                        </div>

                        {/* 4. JUMLAH STOK GUDANG */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-200/70 shadow-2xs flex flex-col justify-between space-y-3 relative overflow-hidden">
                            <div className="flex justify-between items-start">
                                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">JUMLAH STOK</span>
                                <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                                    <Package size={16} />
                                </div>
                            </div>
                            <div className="flex items-baseline justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 tracking-tight">2,840 Kg</h3>
                                    <p className="text-[11px] text-gray-400 font-normal mt-0.5">Kapasitas cold storage 85%</p>
                                </div>
                                <span className="inline-flex items-center text-blue-600 bg-blue-50 text-[11px] font-semibold px-2 py-0.5 rounded-md">
                                    Stabil
                                </span>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"></div>
                        </div>

                        {/* 5. STOK PRODUK RENDAH */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-200/70 shadow-2xs flex flex-col justify-between space-y-3 relative overflow-hidden">
                            <div className="flex justify-between items-start">
                                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">PERINGATAN STOK</span>
                                <div className="p-2 rounded-xl bg-red-50 text-red-600">
                                    <AlertTriangle size={16} />
                                </div>
                            </div>
                            <div className="flex items-baseline justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 tracking-tight">5 Produk</h3>
                                    <p className="text-[11px] text-red-500 font-normal mt-0.5">Perlu restock segera</p>
                                </div>
                                <span className="inline-flex items-center text-red-600 bg-red-50 text-[11px] font-semibold px-2 py-0.5 rounded-md">
                                    Urgent
                                </span>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600"></div>
                        </div>

                        {/* 6. PENGIRIMAN & KURIR */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-200/70 shadow-2xs flex flex-col justify-between space-y-3 relative overflow-hidden">
                            <div className="flex justify-between items-start">
                                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">PENGIRIMAN HARI INI</span>
                                <div className="p-2 rounded-xl bg-purple-50 text-purple-600">
                                    <Truck size={16} />
                                </div>
                            </div>
                            <div className="flex items-baseline justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 tracking-tight">32 Paket</h3>
                                    <p className="text-[11px] text-gray-400 font-normal mt-0.5">24 selesai dikirim</p>
                                </div>
                                <span className="inline-flex items-center text-emerald-600 bg-emerald-50 text-[11px] font-semibold px-2 py-0.5 rounded-md">
                                    +22%
                                </span>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-600"></div>
                        </div>

                    </div>

                    {/* Bagian Bawah: Grafik & Aktivitas */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        
                        {/* Kolom Kiri: Grafik Penjualan */}
                        <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/70 shadow-2xs space-y-6">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900">Grafik Penjualan</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-xl font-bold text-gray-900">Rp 12.450k</span>
                                        <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">+12%</span>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-0.5">Performa transaksi 7 hari terakhir</p>
                                </div>

                                <div className="flex items-center bg-gray-100 p-1 rounded-xl text-xs font-medium text-gray-600">
                                    <button className="px-3 py-1.5 bg-white text-gray-900 shadow-2xs rounded-lg cursor-pointer">7 days</button>
                                    <button className="px-3 py-1.5 hover:text-gray-900 transition cursor-pointer">30 days</button>
                                    <button className="px-3 py-1.5 hover:text-gray-900 transition cursor-pointer">90 days</button>
                                </div>
                            </div>

                            {/* Grafik Garis */}
                            <div className="relative h-64 w-full pt-4">
                                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-30">
                                    <div className="border-b border-gray-200 w-full"></div>
                                    <div className="border-b border-gray-200 w-full"></div>
                                    <div className="border-b border-gray-200 w-full"></div>
                                    <div className="border-b border-gray-200 w-full"></div>
                                </div>

                                <div className="relative h-48 w-full px-2">
                                    <svg className="w-full h-full overflow-visible" viewBox="0 0 700 200" preserveAspectRatio="none">
                                        <path
                                            d="M 0 140 Q 116 80, 233 110 T 466 50 T 700 40 L 700 200 L 0 200 Z"
                                            fill="#b91c1c"
                                            fillOpacity="0.06"
                                        />
                                        <path
                                            d="M 0 140 Q 116 80, 233 110 T 466 50 T 700 40"
                                            fill="none"
                                            stroke="#b91c1c"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M 0 170 Q 116 110, 233 135 T 466 80 T 700 65"
                                            fill="none"
                                            stroke="#3B82F6"
                                            strokeWidth="2"
                                            strokeDasharray="4 4"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>

                                <div className="flex justify-between px-2 pt-2 text-xs font-medium text-gray-400">
                                    <span>Sen</span>
                                    <span>Sel</span>
                                    <span>Rab</span>
                                    <span>Kam</span>
                                    <span>Jum</span>
                                    <span>Sab</span>
                                    <span>Min</span>
                                </div>
                            </div>

                            <div className="flex items-center space-x-6 pt-2 text-xs font-medium text-gray-600">
                                <div className="flex items-center space-x-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-red-700 inline-block"></span>
                                    <span>Pendapatan Aktual</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span>
                                    <span>Target Penjualan</span>
                                </div>
                            </div>
                        </div>

                        {/* Kolom Kanan: Aktivitas Toko */}
                        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/70 shadow-2xs flex flex-col justify-between space-y-6">
                            <div className="flex justify-between items-center">
                                <h3 className="text-sm font-semibold text-gray-900">Aktivitas Toko</h3>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <MoreHorizontal size={18} />
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-xs flex items-center justify-center shrink-0">AF</div>
                                    <div className="text-xs space-y-0.5">
                                        <p className="text-gray-700 font-normal"><strong className="text-gray-900 font-medium">Affan Al Riziq</strong> memesan Nugget</p>
                                        <p className="text-gray-400 text-[10px]">2 min ago</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs flex items-center justify-center shrink-0">RS</div>
                                    <div className="text-xs space-y-0.5">
                                        <p className="text-gray-700 font-normal"><strong className="text-gray-900 font-medium">Restock Gudang</strong> — 50 Kg Sosis</p>
                                        <p className="text-gray-400 text-[10px]">18 min ago</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-xs flex items-center justify-center shrink-0">BY</div>
                                    <div className="text-xs space-y-0.5">
                                        <p className="text-gray-700 font-normal"><strong className="text-gray-900 font-medium">Pembayaran Diterima</strong> — #INV-8821</p>
                                        <p className="text-gray-400 text-[10px]">45 min ago</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-semibold text-xs flex items-center justify-center shrink-0">ST</div>
                                    <div className="text-xs space-y-0.5">
                                        <p className="text-gray-700 font-normal"><strong className="text-gray-900 font-medium">Stok Menipis</strong> — Bakso Sapi tersisa 3</p>
                                        <p className="text-gray-400 text-[10px]">1 hour ago</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-semibold text-xs flex items-center justify-center shrink-0">DL</div>
                                    <div className="text-xs space-y-0.5">
                                        <p className="text-gray-700 font-normal"><strong className="text-gray-900 font-medium">Kurir Pickup</strong> — 4 Pesanan</p>
                                        <p className="text-gray-400 text-[10px]">4 hours ago</p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl text-xs font-semibold transition cursor-pointer">
                                Lihat Semua Aktivitas
                            </button>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}