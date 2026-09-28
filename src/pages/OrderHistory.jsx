import { ArrowLeft, Package } from 'lucide-react';
import Footer from '../components/Footer';

export default function OrderHistory({ onBack, orders = [] }) {
    const displayOrders = orders.length > 0 ? orders : [
        {
            id: 'ORD-2026-001',
            date: '28/03/2026',
            pickupDate: '28/03/2026',
            namaPemesan: 'Affan',
            items: [
                { name: 'Sosis Kanzler', quantity: 2, price: 10000, image: '' },
                { name: 'Nuget Kanzler', quantity: 2, price: 10000, image: '' }
            ],
            total: 40000,
            status: 'Sudah Selesai'
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col justify-between text-gray-800 font-sans">
            <div>
                {/* Header Riwayat Pesanan */}
                <header className="mt-0 bg-white border-b border-gray-200">
                    <div className="h-1 bg-red-700" />
                    <div className="max-w-5xl mx-auto px-6 sm:px-12 py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-red-50 text-red-700 font-semibold flex items-center justify-center ring-1 ring-red-100 shadow-2xs">
                                <Package size={28} />
                            </div>
                            <div>
                                <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight">
                                    Riwayat Pesanan
                                </h1>
                                <p className="mt-1 text-sm text-gray-500">
                                    Detail rincian transaksi pesanan Anda
                                </p>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={onBack}
                            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer shadow-2xs"
                        >
                            <ArrowLeft size={16} />
                            Kembali ke Profil
                        </button>
                    </div>
                </header>

                {/* Konten Utama Riwayat */}
                <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
                    {displayOrders.map((order) => (
                        <div key={order.id} className="bg-white rounded-2xl border border-gray-200/80 p-6 sm:p-8 shadow-xs space-y-8">
                            
                            {/* Card Banner Ucapan Terima Kasih (Teks sudah center penuh & rapi) */}
                            <div className="bg-red-50/60 border border-red-100 rounded-2xl p-6 sm:p-8 text-center space-y-3 shadow-2xs">
                                <h2 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight max-w-xl mx-auto">
                                    Terima kasih telah melakukan pesanan di toko kami
                                </h2>
                                <p className="text-xs sm:text-sm text-gray-600 italic  mx-auto leading-relaxed text-center">
                                    "Mohon konfirmasi pesanan di toko kami untuk penyelesaian transaksi dan pengambilan barang."
                                </p>
                                <p className="text-xs sm:text-sm font-bold text-gray-900 pt-1">
                                    Jam Operasional: 08.00 - 21.00 WIB
                                </p>
                            </div>

                            {/* Bagian Rincian Pesanan */}
                            <div className="space-y-6">
                                <h3 className="text-base sm:text-lg font-bold text-gray-900 border-b border-gray-100 pb-3">
                                    Rincian Pesanan
                                </h3>

                                {/* Header Label Tabel */}
                                <div className="bg-gray-100 text-gray-700 font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider">
                                    Produk
                                </div>

                                {/* Daftar Item Produk */}
                                <div className="divide-y divide-gray-100">
                                    {order.items.map((item, idx) => (
                                        <div key={idx} className="py-4 px-2 flex items-center justify-between gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-14 h-14 bg-gray-50 rounded-xl overflow-hidden shrink-0 border border-gray-200 flex items-center justify-center shadow-2xs">
                                                    {item.image ? (
                                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <Package size={22} className="text-gray-400" />
                                                    )}
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-sm sm:text-base text-gray-900">{item.name}</h4>
                                                    <p className="text-xs text-gray-500 mt-0.5">Qty: {item.quantity}</p>
                                                </div>
                                            </div>
                                            <span className="font-semibold text-sm sm:text-base text-gray-900">
                                                Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Informasi Tambahan Pesanan */}
                                <div className="divide-y divide-gray-100 pt-2 text-sm border-t border-gray-100">
                                    <div className="py-3.5 flex justify-between">
                                        <span className="text-gray-500">Nama pemesan:</span>
                                        <span className="font-semibold text-gray-900">{order.namaPemesan}</span>
                                    </div>
                                    <div className="py-3.5 flex justify-between">
                                        <span className="text-gray-500">Tanggal Pemesanan:</span>
                                        <span className="font-semibold text-gray-900">{order.date}</span>
                                    </div>
                                    <div className="py-3.5 flex justify-between">
                                        <span className="text-gray-500">Jadwal Pengambilan:</span>
                                        <span className="font-semibold text-gray-900">{order.pickupDate}</span>
                                    </div>
                                </div>

                                {/* Subtotal */}
                                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                                    <span className="text-base font-bold text-gray-900">Subtotal:</span>
                                    <span className="text-lg font-extrabold text-red-700">Rp {order.total.toLocaleString('id-ID')}</span>
                                </div>

                                {/* Status Pesanan & Tombol Aksi */}
                                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <span className="font-bold text-xs sm:text-sm text-gray-700 uppercase tracking-wide">Status Pesanan:</span>
                                        {order.status === 'Sudah Selesai' ? (
                                            <span className="px-4 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 text-white shadow-2xs">
                                                Sudah Selesai
                                            </span>
                                        ) : (
                                            <span className="px-4 py-1.5 rounded-lg text-xs font-bold bg-red-600 text-white shadow-2xs">
                                                Belum Selesai
                                            </span>
                                        )}
                                    </div>

                                    <button
                                        onClick={onBack}
                                        className="w-full sm:w-auto px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gray-900 hover:bg-black rounded-xl transition cursor-pointer shadow-sm tracking-wide"
                                    >
                                        Kembali Ke Home
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}
                </main>
            </div>

            {/* Footer Bawah */}
            <Footer />
        </div>
    );
}