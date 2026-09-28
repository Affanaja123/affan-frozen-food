import { useState } from 'react';
import { ArrowLeft, Trash2, ShoppingBag } from 'lucide-react';
import Footer from '../components/Footer';

export default function CartDetail({ cartItems = [], onUpdateQuantity, onRemoveItem, onBack, onOrderSuccess }) {
    const [namaPemesan, setNamaPemesan] = useState('');
    const [tglPengambilan, setTglPengambilan] = useState('');

    // Hitung total harga
    const totalHarga = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const handlePesanSekarang = (e) => {
        e.preventDefault();
        if (!namaPemesan.trim()) {
            alert('Mohon masukkan nama pemesan terlebih dahulu!');
            return;
        }
        if (!tglPengambilan) {
            alert('Mohon pilih tanggal pengambilan terlebih dahulu!');
            return;
        }
        if (cartItems.length === 0) {
            alert('Keranjang belanja Anda masih kosong!');
            return;
        }
        
        alert(`Pesanan berhasil dibuat atas nama ${namaPemesan} untuk tanggal ${tglPengambilan}!`);
        if (onOrderSuccess) onOrderSuccess();
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col justify-between text-gray-800 font-sans">
            <div>
                {/* Header Keranjang (Dibuat konsisten dengan halaman profil) */}
                <header className="mt-0 bg-white border-b border-gray-200">
                    <div className="h-1 bg-red-700" />

                    <div className="max-w-5xl mx-auto px-6 sm:px-12 py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-red-50 text-red-700 font-semibold text-2xl flex items-center justify-center ring-1 ring-red-100">
                                <ShoppingBag size={28} />
                            </div>
                            <div>
                                <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight">
                                    Keranjang belanja
                                </h1>
                                <p className="mt-1 text-sm text-gray-500">
                                    <span className="font-medium text-red-700">{cartItems.length} Produk</span>
                                    <span className="mx-2 text-gray-300">|</span>
                                    Affan Frozen Food
                                </p>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={onBack}
                            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600/30 transition-colors cursor-pointer"
                        >
                            <ArrowLeft size={16} aria-hidden="true" />
                            Kembali ke Beranda
                        </button>
                    </div>
                </header>

                {/* Konten Utama Rincian Keranjang */}
                <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
                    
                    {/* Tabel Daftar Produk */}
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs">
                        
                        {/* Header Tabel */}
                        <div className="grid grid-cols-12 bg-gray-100 text-gray-700 font-semibold py-3.5 px-6 text-xs sm:text-sm uppercase tracking-wider border-b border-gray-200">
                            <div className="col-span-6">Produk</div>
                            <div className="col-span-3 sm:col-span-4 text-center sm:text-left">Harga</div>
                            <div className="col-span-3 sm:col-span-2 text-center">Jumlah</div>
                        </div>

                        {/* Baris Item Keranjang */}
                        {cartItems.length === 0 ? (
                            <div className="py-16 text-center text-gray-400 text-sm">
                                Belum ada produk di dalam keranjang.
                            </div>
                        ) : (
                            <div className="divide-y divide-gray-100">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="grid grid-cols-12 items-center py-4 px-6 gap-4">
                                        
                                        {/* Kolom Produk (Gambar & Nama) */}
                                        <div className="col-span-6 flex items-center space-x-4">
                                            <div className="w-16 h-16 bg-gray-50 rounded-lg overflow-hidden shrink-0 border border-gray-200">
                                                <img 
                                                    src={item.image} 
                                                    alt={item.name} 
                                                    className="w-full h-full object-cover" 
                                                />
                                            </div>
                                            <span className="font-medium text-sm sm:text-base text-gray-900">
                                                {item.name}
                                            </span>
                                        </div>

                                        {/* Kolom Harga */}
                                        <div className="col-span-3 sm:col-span-4 text-sm sm:text-base text-gray-700 font-medium">
                                            Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                                        </div>

                                        {/* Kolom Jumlah (< 1 >) */}
                                        <div className="col-span-3 sm:col-span-2 flex justify-center">
                                            <div className="inline-flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white shadow-2xs">
                                                <button
                                                    onClick={() => {
                                                        if (item.quantity <= 1) {
                                                            onRemoveItem(item.id);
                                                        } else {
                                                            onUpdateQuantity(item.id, item.quantity - 1);
                                                        }
                                                    }}
                                                    className="px-3 py-1 text-xs sm:text-sm font-bold text-gray-700 hover:bg-gray-100 transition border-r border-gray-300 cursor-pointer"
                                                >
                                                    &lt;
                                                </button>
                                                <span className="px-3.5 py-1 text-xs sm:text-sm font-semibold text-gray-900">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                                    className="px-3 py-1 text-xs sm:text-sm font-bold text-gray-700 hover:bg-gray-100 transition border-l border-gray-300 cursor-pointer"
                                                >
                                                    &gt;
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Form Pemesanan & Total Section dalam Card yang Rapi */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 space-y-6 shadow-xs">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 border-b border-gray-100 pb-4">
                            Informasi Pemesanan
                        </h3>

                        <div className="max-w-xl space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                                <label className="w-40 text-sm font-medium text-gray-700">
                                    Nama pemesan:
                                </label>
                                <input
                                    type="text"
                                    placeholder="Masukkan nama pemesan"
                                    value={namaPemesan}
                                    onChange={(e) => setNamaPemesan(e.target.value)}
                                    className="flex-1 px-3.5 py-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg placeholder:text-gray-400 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-colors"
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                                <label className="w-40 text-sm font-medium text-gray-700">
                                    Tgl. pengambilan:
                                </label>
                                <input
                                    type="date"
                                    value={tglPengambilan}
                                    onChange={(e) => setTglPengambilan(e.target.value)}
                                    className="flex-1 px-3.5 py-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Total & Tombol Pesan Sekarang */}
                        <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-end sm:items-center justify-between gap-4">
                            <div className="text-lg sm:text-xl font-bold text-gray-900">
                                Total: <span className="text-red-700">Rp {totalHarga.toLocaleString('id-ID')}</span>
                            </div>
                            <button
                                onClick={handlePesanSekarang}
                                className="px-6 py-2.5 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-600/40 focus:ring-offset-2 transition-colors cursor-pointer shadow-sm tracking-wide"
                            >
                                PESAN SEKARANG
                            </button>
                        </div>
                    </div>

                </main>
            </div>

            {/* Footer Bawah */}
            <Footer />
        </div>
    );
}