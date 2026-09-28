import { useState } from 'react';
import { User, Package, Phone, Mail, LogOut, ChevronRight, ArrowLeft, CheckCircle2, Info, Clock } from 'lucide-react';
import Footer from '../components/Footer';

const inputClass =
    'w-full px-3.5 py-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg placeholder:text-gray-400 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-colors';

export default function UserProfile({ onBack, onLogout, onSelectOrder }) {
    const [user, setUser] = useState({
        name: 'Affan Al Riziq',
        email: 'affan.riziq@example.com',
        phone: '+62 838-0728-3388',
        memberStatus: 'Pelanggan Setia'
    });

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(user);
    const [notice, setNotice] = useState(null);

    // State untuk beralih konten di dalam halaman profil: 'profile' atau 'history'
    const [activeTab, setActiveTab] = useState('profile');

    // Data dummy riwayat transaksi
    const dummyOrders = [
        {
            id: 'ORD-2026-001',
            date: '25 September 2026',
            items: [{ name: 'Sosis Sapi Kanzler', quantity: 2, price: 48000 }],
            total: 96000,
            status: 'Selesai'
        }
    ];

    const showNotice = (type, text) => {
        setNotice({ type, text });
        setTimeout(() => setNotice(null), 3500);
    };

    const startEdit = () => {
        setFormData(user);
        setIsEditing(true);
    };

    const cancelEdit = () => {
        setFormData(user);
        setIsEditing(false);
    };

    const handleSave = (e) => {
        e.preventDefault();
        setUser(formData);
        setIsEditing(false);
        showNotice('success', 'Profil berhasil diperbarui.');
    };

    const details = [
        { icon: User, label: 'Nama lengkap', value: user.name },
        { icon: Mail, label: 'Alamat email', value: user.email },
        { icon: Phone, label: 'Nomor telepon / WhatsApp', value: user.phone }
    ];

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col justify-between text-gray-800 font-sans">
            <div>
                {/* Header profil */}
                <header className="mt-0 bg-white border-b border-gray-200">
                    <div className="h-1 bg-red-700" />

                    <div className="max-w-5xl mx-auto px-6 sm:px-12 py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-red-50 text-red-700 font-semibold text-2xl flex items-center justify-center ring-1 ring-red-100">
                                {user.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight">
                                    {user.name}
                                </h1>
                                <p className="mt-1 text-sm text-gray-500">
                                    <span className="font-medium text-red-700">{user.memberStatus}</span>
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

                {/* Konten utama */}
                <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    {/* Notifikasi */}
                    {notice && (
                        <div
                            role="status"
                            className={`mb-6 flex items-center gap-2.5 px-4 py-3 rounded-lg border text-sm ${notice.type === 'success'
                                    ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                                    : 'bg-white border-gray-200 text-gray-700'
                                }`}
                        >
                            {notice.type === 'success' ? (
                                <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                            ) : (
                                <Info size={18} className="text-gray-400 shrink-0" />
                            )}
                            <span>{notice.text}</span>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {/* Menu akun di kiri */}
                        <nav
                            aria-label="Menu akun"
                            className="bg-white p-3 rounded-xl border border-gray-200 h-fit"
                        >
                            <button
                                type="button"
                                onClick={() => { setActiveTab('profile'); setIsEditing(false); }}
                                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg font-medium text-sm transition-colors cursor-pointer ${activeTab === 'profile'
                                        ? 'bg-red-50 text-red-700'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                <span className="flex items-center gap-2.5">
                                    <User size={18} />
                                    Informasi profil
                                </span>
                                <ChevronRight size={16} />
                            </button>

                            <button
                                type="button"
                                onClick={() => setActiveTab('history')}
                                className={`mt-1 w-full flex items-center justify-between px-3 py-2.5 rounded-lg font-medium text-sm transition-colors cursor-pointer ${activeTab === 'history'
                                        ? 'bg-red-50 text-red-700'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                <span className="flex items-center gap-2.5">
                                    <Package size={18} />
                                    Riwayat pesanan
                                </span>
                                <ChevronRight size={16} />
                            </button>

                            <div className="my-2 border-t border-gray-100" />

                            <button
                                type="button"
                                onClick={onLogout}
                                className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 font-medium text-sm transition-colors cursor-pointer"
                            >
                                <LogOut size={18} />
                                Keluar akun
                            </button>
                        </nav>

                        {/* Bagian Konten Kanan (Berubah dinamis sesuai activeTab) */}
                        <section className="md:col-span-2 bg-white rounded-xl border border-gray-200">

                            {/* KONDISI 1: TAB INFORMASI PROFIL */}
                            {activeTab === 'profile' && (
                                <>
                                    <div className="flex items-center justify-between gap-4 px-6 sm:px-8 py-5 border-b border-gray-100">
                                        <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                                            Informasi pribadi
                                        </h2>
                                        {!isEditing ? (
                                            <button
                                                type="button"
                                                onClick={startEdit}
                                                className="px-3.5 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600/30 transition-colors cursor-pointer"
                                            >
                                                Ubah profil
                                            </button>
                                        ) : (
                                            <button
                                                type="button"
                                                onClick={cancelEdit}
                                                className="px-3.5 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600/30 transition-colors cursor-pointer"
                                            >
                                                Batal
                                            </button>
                                        )}
                                    </div>

                                    <div className="px-6 sm:px-8 py-6">
                                        {!isEditing ? (
                                            <dl className="divide-y divide-gray-100">
                                                {details.map(({ icon: Icon, label, value }) => (
                                                    <div key={label} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                                                        <div className="w-9 h-9 rounded-lg bg-gray-50 text-gray-500 flex items-center justify-center shrink-0">
                                                            <Icon size={18} />
                                                        </div>
                                                        <div className="min-w-0">
                                                            <dt className="text-xs text-gray-500">{label}</dt>
                                                            <dd className="mt-0.5 text-sm font-medium text-gray-900 break-words">
                                                                {value}
                                                            </dd>
                                                        </div>
                                                    </div>
                                                ))}
                                            </dl>
                                        ) : (
                                            <form onSubmit={handleSave} className="space-y-5">
                                                <div>
                                                    <label htmlFor="profile-name" className="block text-sm font-medium text-gray-700 mb-1.5">
                                                        Nama lengkap
                                                    </label>
                                                    <input
                                                        id="profile-name"
                                                        type="text"
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                        className={inputClass}
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="profile-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                                                        Alamat email
                                                    </label>
                                                    <input
                                                        id="profile-email"
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                        className={inputClass}
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="profile-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                                                        Nomor telepon / WhatsApp
                                                    </label>
                                                    <input
                                                        id="profile-phone"
                                                        type="tel"
                                                        value={formData.phone}
                                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                        className={inputClass}
                                                        required
                                                    />
                                                </div>

                                                <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-2">
                                                    <button
                                                        type="button"
                                                        onClick={cancelEdit}
                                                        className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600/30 transition-colors cursor-pointer"
                                                    >
                                                        Batal
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="px-5 py-2.5 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-600/40 focus:ring-offset-2 transition-colors cursor-pointer"
                                                    >
                                                        Simpan perubahan
                                                    </button>
                                                </div>
                                            </form>
                                        )}
                                    </div>
                                </>
                            )}

                            {/* KONDISI 2: TAB RIWAYAT TRANSAKSI (Daftar ringkas yang bisa diklik) */}
                            {activeTab === 'history' && (
                                <>
                                    <div className="px-6 sm:px-8 py-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                        <div>
                                            <h2 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
                                                Riwayat Transaksi
                                            </h2>
                                            <p className="text-xs text-gray-500 mt-0.5">Daftar seluruh pesanan dan status transaksi Anda</p>
                                        </div>
                                        <span className="text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-600 rounded-full w-fit">
                                            {dummyOrders.length} Pesanan
                                        </span>
                                    </div>

                                    <div className="p-6 sm:p-8 space-y-4">
                                        {dummyOrders.map((order) => (
                                            <div
                                                key={order.id}
                                                onClick={onSelectOrder} // Memindahkan ke halaman detail OrderHistory saat diklik
                                                className="p-5 rounded-2xl border border-gray-200/80 hover:border-red-600/60 hover:shadow-md transition-all duration-300 cursor-pointer bg-white group relative overflow-hidden flex items-center justify-between gap-4"
                                            >
                                                {/* Aksen garis merah tipis di sisi kiri saat di-hover */}
                                                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-700 opacity-0 group-hover:opacity-100 transition-opacity" />

                                                <div className="space-y-2">
                                                    <div className="flex flex-wrap items-center gap-2.5">
                                                        <span className="text-sm font-extrabold text-gray-900 group-hover:text-red-700 transition tracking-wide">
                                                            {order.id}
                                                        </span>
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                                            {order.status}
                                                        </span>
                                                    </div>

                                                    <div className="flex items-center text-xs text-gray-500 gap-1.5 font-medium">
                                                        <Clock size={14} className="text-gray-400" />
                                                        <span>Tanggal: {order.date}</span>
                                                    </div>

                                                    <div className="pt-1 flex items-center gap-2">
                                                        <span className="text-xs text-gray-500">Total Belanja:</span>
                                                        <span className="text-sm font-bold text-red-700">
                                                            Rp {order.total.toLocaleString('id-ID')}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="w-9 h-9 rounded-xl bg-gray-50 group-hover:bg-red-50 text-gray-400 group-hover:text-red-700 flex items-center justify-center transition-all duration-300 shrink-0 border border-gray-100 group-hover:border-red-100">
                                                    <ChevronRight size={18} className="transform group-hover:translate-x-0.5 transition-transform" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}

                        </section>
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
}