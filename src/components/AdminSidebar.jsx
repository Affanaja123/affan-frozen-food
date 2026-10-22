import { useState } from 'react';
import { LayoutDashboard, Store, Grid, Package, ShoppingCart, LogOut, Menu, X, ChevronRight } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function AdminSidebar({ activeMenu = 'dashboard', onNavigate, onLogout }) {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const menuItems = [
        { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
        { id: 'kasir', name: 'Kasir', icon: Store },
        { id: 'kategori', name: 'Kategori', icon: Grid },
        { id: 'barang', name: 'Barang', icon: Package },
        { id: 'pesanan', name: 'Pesanan', icon: ShoppingCart },
    ];

    const handleMenuClick = (id) => {
        onNavigate(id);
        setIsMobileOpen(false);
    };

    return (
        <>
            {/* Top Bar Khusus Mobile */}
            <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 px-4 flex items-center justify-between z-30 shadow-2xs">
                <div className="flex items-center space-x-3">
                    <button
                        onClick={() => setIsMobileOpen(true)}
                        className="p-2 bg-gray-50 text-gray-700 rounded-xl border border-gray-200 transition active:scale-95 cursor-pointer"
                    >
                        <Menu size={20} />
                    </button>
                    <div className="flex items-center space-x-2">
                        <img src={logoImg} alt="Logo" className="w-7 h-7 object-contain rounded-lg" />
                        <span className="font-bold text-gray-900 text-sm tracking-tight">Affan Frozen</span>
                    </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-red-700 text-white font-semibold text-xs flex items-center justify-center shadow-xs">
                    A
                </div>
            </div>

            {/* Backdrop Mobile */}
            {isMobileOpen && (
                <div 
                    onClick={() => setIsMobileOpen(false)}
                    className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-xs z-40 transition-opacity"
                />
            )}

            {/* Sidebar Utama (Lebar tetap w-64 agar proporsional di desktop) */}
            <aside className={`w-64 bg-white border-r border-gray-200 flex flex-col justify-between shrink-0 select-none h-screen fixed left-0 top-0 z-50 transition-transform duration-300 ease-out shadow-xl lg:shadow-none ${
                isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
            }`}>
                <div>
                    {/* Logo & Brand */}
                    <div className="p-6 flex items-center justify-between border-b border-gray-100">
                        <div className="flex items-center space-x-3">
                            <div className="p-1 rounded-xl bg-gray-50 border border-gray-100 shadow-2xs">
                                <img src={logoImg} alt="Logo" className="h-8 w-8 object-contain rounded-lg" />
                            </div>
                            <div>
                                <h1 className="font-bold text-gray-900 text-base leading-tight">Affan Frozen</h1>
                                <p className="text-[11px] text-gray-400 font-medium tracking-wide">Inventory Admin</p>
                            </div>
                        </div>
                        <button 
                            onClick={() => setIsMobileOpen(false)}
                            className="lg:hidden p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Navigasi Menu */}
                    <nav className="p-4 space-y-1.5">
                        <p className="px-4 pb-2 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Menu Utama</p>
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeMenu === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => handleMenuClick(item.id)}
                                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                                        isActive
                                            ? 'bg-red-50 text-red-700 shadow-2xs border border-red-100/60 font-semibold'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                                >
                                    <div className="flex items-center space-x-3">
                                        <Icon size={18} className={isActive ? 'text-red-700' : 'text-gray-400'} />
                                        <span>{item.name}</span>
                                    </div>
                                    {isActive && <ChevronRight size={14} className="text-red-600 lg:hidden" />}
                                </button>
                            );
                        })}
                    </nav>
                </div>

                {/* Tombol Logout */}
                <div className="p-4 border-t border-gray-100">
                    <button
                        onClick={onLogout}
                        className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                    >
                        <LogOut size={18} />
                        <span>Keluar Sistem</span>
                    </button>
                </div>
            </aside>
        </>
    );
}