import { LayoutDashboard, Store, Grid, Package, ShoppingCart, LogOut, Bell, Settings } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

export default function AdminSidebar({ activeMenu = 'dashboard', onNavigate, onLogout }) {
    const menuItems = [
        { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
        { id: 'kasir', name: 'Kasir', icon: Store },
        { id: 'kategori', name: 'Kategori', icon: Grid },
        { id: 'barang', name: 'Barang', icon: Package },
        { id: 'pesanan', name: 'Pesanan', icon: ShoppingCart },
    ];

    return (
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between shrink-0 select-none h-screen fixed left-0 top-0 z-20">
            <div>
                {/* Logo & Brand */}
                <div className="p-6 flex items-center space-x-3 border-b border-gray-100">
                    <div className="p-1 rounded-xl bg-gray-50 border border-gray-100 shadow-2xs">
                        <img 
                            src={logoImg} 
                            alt="Affan Frozen Food Logo" 
                            className="h-8 w-8 object-contain rounded-lg"
                        />
                    </div>
                    <div>
                        <h1 className="font-bold text-gray-900 text-base leading-tight">Affan Frozen</h1>
                        <p className="text-[11px] text-gray-400 font-medium tracking-wide">Inventory Admin</p>
                    </div>
                </div>

                {/* Navigasi Menu */}
                <nav className="p-4 space-y-1.5">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeMenu === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => onNavigate(item.id)}
                                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                                    isActive
                                        ? 'bg-red-50 text-red-700 shadow-2xs border border-red-100/60'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                            >
                                <Icon size={18} className={isActive ? 'text-red-700' : 'text-gray-400'} />
                                <span>{item.name}</span>
                            </button>
                        );
                    })}
                </nav>
            </div>

            {/* Tombol Logout di Bawah Sidebar */}
            <div className="p-4 border-t border-gray-100">
                <button
                    onClick={onLogout}
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                >
                    <LogOut size={18} />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
}