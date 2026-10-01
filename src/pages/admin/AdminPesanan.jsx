import { useState } from 'react';
import { Search, Bell, Settings, X, Check, Trash2 } from 'lucide-react';
import AdminSidebar from '../../components/AdminSidebar';

export default function AdminPesanan({ onLogout, onNavigateMenu }) {
    const [orders, setOrders] = useState([
        {
            id: 1,
            orderNumber: '#ORD-88209',
            customerName: 'Sari Frozen Mart',
            customerType: 'Retail Member',
            date: '12 Okt 2023, 14:30 WIB',
            status: 'DIPROSES',
            items: [
                { name: 'Fiesta Chicken Nugget 500g', qty: 24, price: 'Rp 45.000', subtotal: 'Rp 1.080k' },
                { name: 'So Good Bakso Kuah 200g', qty: 50, price: 'Rp 15.000', subtotal: 'Rp 750k' },
                { name: 'Champ Sosis Ayam 1kg', qty: 40, price: 'Rp 86.250', subtotal: 'Rp 3.450k' },
            ],
            subtotal: 'Rp 5.280.000',
            total: 'Rp 5.280.000',
        },
        {
            id: 2,
            orderNumber: '#ORD-88210',
            customerName: 'Andi Pratama',
            customerType: 'Retail Member',
            date: '12 Okt 2023, 10:15 WIB',
            status: 'SELESAI',
            items: [
                { name: 'Belfoods Nugget Ayam 500g', qty: 10, price: 'Rp 45.000', subtotal: 'Rp 450.000' },
            ],
            subtotal: 'Rp 450.000',
            total: 'Rp 450.000',
        },
    ]);

    const [selectedOrder, setSelectedOrder] = useState(null);

    const handleUpdateStatus = (id, newStatus) => {
        setOrders(prev => prev.map(order => 
            order.id === id ? { ...order, status: newStatus } : order
        ));
        setSelectedOrder(null);
    };

    return (
        <div className="flex h-screen bg-[#F8F9FA] font-sans overflow-hidden">
            {/* Sidebar Kiri */}
            <AdminSidebar activeMenu="pesanan" onNavigate={onNavigateMenu} onLogout={onLogout} />

            {/* Area Utama */}
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

                {/* Konten Halaman Pesanan */}
                <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-[#F8F9FA]">
                    <div className="bg-white rounded-2xl border border-gray-200/70 shadow-2xs overflow-hidden">
                        
                        <div className="px-8 py-5 border-b border-gray-100">
                            <h3 className="text-sm font-semibold text-gray-800">Daftar Pesanan Terbaru</h3>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-100 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                                        <th className="py-3.5 px-8 w-16">No</th>
                                        <th className="py-3.5 px-6">Customer Name</th>
                                        <th className="py-3.5 px-6">Date</th>
                                        <th className="py-3.5 px-6">Status</th>
                                        <th className="py-3.5 px-6">Total</th>
                                        <th className="py-3.5 px-8 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50 text-xs text-gray-700">
                                    {orders.map((order, idx) => (
                                        <tr key={order.id} className="hover:bg-gray-50/40 transition">
                                            <td className="py-4 px-8 font-medium text-gray-900">{idx + 1}</td>
                                            <td className="py-4 px-6">
                                                <p className="font-semibold text-gray-900 text-xs">{order.customerName}</p>
                                                <p className="text-gray-400 text-[11px] font-normal">{order.customerType}</p>
                                            </td>
                                            <td className="py-4 px-6 text-gray-500 font-normal">{order.date.split(',')[0]}</td>
                                            <td className="py-4 px-6">
                                                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide ${
                                                    order.status === 'SELESAI' 
                                                        ? 'bg-emerald-50 text-emerald-700' 
                                                        : 'bg-amber-50 text-amber-700'
                                                }`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6 font-semibold text-gray-900">{order.total}</td>
                                            <td className="py-4 px-8 text-right">
                                                <button 
                                                    onClick={() => setSelectedOrder(order)}
                                                    className="bg-gray-900 hover:bg-black text-white font-medium px-4 py-1.5 rounded-xl text-[11px] transition shadow-2xs cursor-pointer"
                                                >
                                                    DETAIL
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

            </div>

            {/* MODAL DETAIL PESANAN */}
            {selectedOrder && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
                    <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden border border-gray-100 animate-fadeIn">
                        
                        {/* Header Modal */}
                        <div className="bg-[#990000] text-white p-6 relative flex justify-between items-start">
                            <div className="space-y-0.5">
                                <span className="text-[10px] font-semibold tracking-wider uppercase opacity-80">DETAIL PESANAN</span>
                                <h2 className="text-xl font-bold tracking-tight">{selectedOrder.orderNumber}</h2>
                                <p className="text-[11px] opacity-90 font-normal">Dibuat pada {selectedOrder.date}</p>
                            </div>
                            <div className="flex items-center space-x-2.5">
                                <span className="px-2.5 py-0.5 bg-white/20 rounded-full text-[10px] font-semibold">
                                    {selectedOrder.status}
                                </span>
                                <button 
                                    onClick={() => setSelectedOrder(null)}
                                    className="p-1 hover:bg-white/10 rounded-full transition cursor-pointer"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Konten Detail */}
                        <div className="p-6 space-y-5 max-h-[55vh] overflow-y-auto">
                            
                            <div className="space-y-1">
                                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                                    INFORMASI PELANGGAN
                                </p>
                                <p className="text-xs font-semibold text-gray-900">{selectedOrder.customerName}</p>
                            </div>

                            <hr className="border-gray-100" />

                            <div className="space-y-2.5">
                                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                                    DAFTAR PRODUK
                                </p>
                                <div className="space-y-2.5 pt-0.5">
                                    {selectedOrder.items.map((item, index) => (
                                        <div key={index} className="flex justify-between items-start text-xs">
                                            <div>
                                                <p className="font-medium text-gray-800">{item.name}</p>
                                                <p className="text-gray-400 text-[11px]">{item.qty} unit x {item.price}</p>
                                            </div>
                                            <p className="font-semibold text-gray-800">{item.subtotal}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <hr className="border-gray-100" />

                            <div className="space-y-1.5 pt-0.5 text-xs">
                                <div className="flex justify-between text-gray-500 font-normal">
                                    <span>Subtotal</span>
                                    <span className="text-gray-800 font-medium">{selectedOrder.subtotal}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm pt-2 border-t border-gray-100 font-semibold text-gray-900">
                                    <span>Total</span>
                                    <span className="text-sm text-red-700 font-bold">{selectedOrder.total}</span>
                                </div>
                            </div>

                        </div>

                        {/* Footer Modal */}
                        <div className="p-5 bg-gray-50/80 border-t border-gray-100 flex items-center justify-end space-x-3">
                            <button
                                onClick={() => handleUpdateStatus(selectedOrder.id, 'SELESAI')}
                                className="flex-1 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-medium py-2.5 px-5 rounded-xl text-xs transition shadow-sm flex items-center justify-center space-x-1.5 cursor-pointer"
                            >
                                <Check size={14} />
                                <span>Selesaikan</span>
                            </button>
                            <button
                                onClick={() => handleUpdateStatus(selectedOrder.id, 'DIBATALKAN')}
                                className="flex-1 bg-white hover:bg-red-50 text-red-600 border border-red-200 active:scale-[0.98] font-medium py-2.5 px-5 rounded-xl text-xs transition flex items-center justify-center space-x-1.5 cursor-pointer"
                            >
                                <Trash2 size={14} />
                                <span>Batalkan Pesanan</span>
                            </button>
                        </div>

                    </div>
                </div>
            )}

        </div>
    );
}