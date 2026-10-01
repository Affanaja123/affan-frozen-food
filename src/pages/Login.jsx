import { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight } from 'lucide-react';
import frozenBagImg from '../assets/gambar_tanpa_teks.png';

export default function Login({ onLoginSuccess }) {
    // State untuk menentukan mode aktif: 'login' atau 'register'
    const [isRegisterMode, setIsRegisterMode] = useState(false);

    // State form input
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulasi berhasil login atau registrasi
        onLoginSuccess();
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-50/50 font-sans p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                
                {/* SISI KIRI: Banner Ilustrasi */}
                <div className="relative bg-gray-50/80 p-8 lg:p-12 flex flex-col justify-between items-center text-center overflow-hidden border-b lg:border-b-0 lg:border-r border-gray-100">
                    <div className="absolute inset-0 pointer-events-none opacity-90 flex items-center justify-center">
                        <img 
                            src={frozenBagImg} 
                            alt="Frozen Food Bag" 
                            className="w-full h-full object-cover scale-105"
                        />
                    </div>

                    <div className="relative z-10 space-y-2 pt-2">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-red-900 tracking-tight">
                            Affan Frozen Food
                        </h2>
                        <p className="text-xs sm:text-sm font-medium text-gray-600 tracking-wide uppercase">
                            Affordable & Convenient
                        </p>
                    </div>

                    <div className="relative z-10 pb-4">
                        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
                            © 2026 Affan Frozen Food
                        </span>
                    </div>
                </div>

                {/* SISI KANAN: Form (Berubah dinamis antara Login & Registrasi) */}
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                    <div className="max-w-sm w-full mx-auto space-y-8">
                        
                        {/* Judul Form */}
                        <div className="space-y-2">
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                                {isRegisterMode ? 'Registrasi' : 'Welcome Back'}
                            </h1>
                            <p className="text-xs sm:text-sm text-gray-500 font-medium">
                                {isRegisterMode 
                                    ? 'Daftar akun baru untuk mulai berbelanja.' 
                                    : 'Masuk ke akun member untuk melanjutkan belanja.'
                                }
                            </p>
                        </div>

                        {/* Form Input */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            
                            {/* Input Name (Hanya muncul saat mode Register) */}
                            {isRegisterMode && (
                                <div className="space-y-1.5 animate-fadeIn">
                                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                                        Name
                                    </label>
                                    <div className="relative flex items-center">
                                        <span className="absolute left-3.5 text-gray-400 pointer-events-none flex items-center">
                                            <User size={18} />
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Nama lengkap..."
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required={isRegisterMode}
                                            className="w-full pl-10 pr-4 py-3 text-sm text-gray-900 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Input Email */}
                            <div className="space-y-1.5">
                                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                                    Email Address
                                </label>
                                <div className="relative flex items-center">
                                    <span className="absolute left-3.5 text-gray-400 pointer-events-none flex items-center">
                                        <Mail size={18} />
                                    </span>
                                    <input
                                        type="email"
                                        placeholder="admin@affanfrozen.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full pl-10 pr-4 py-3 text-sm text-gray-900 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition"
                                    />
                                </div>
                            </div>

                            {/* Input Password */}
                            <div className="space-y-1.5">
                                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                                    Password
                                </label>
                                <div className="relative flex items-center">
                                    <span className="absolute left-3.5 text-gray-400 pointer-events-none flex items-center">
                                        <Lock size={18} />
                                    </span>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="w-full pl-10 pr-12 py-3 text-sm text-gray-900 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3.5 text-gray-400 hover:text-gray-600 transition cursor-pointer"
                                        aria-label="Toggle password visibility"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            {/* Tombol Submit (Login / Daftar) */}
                            <button
                                type="submit"
                                className="w-full mt-3 bg-red-700 hover:bg-red-800 active:scale-[0.98] text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all duration-200 flex items-center justify-center space-x-2 shadow-md shadow-red-700/20 cursor-pointer"
                            >
                                <span>{isRegisterMode ? 'Daftar' : 'Login'}</span>
                                <ArrowRight size={18} />
                            </button>

                        </form>

                        {/* Footer Teks Beralih Mode */}
                        <div className="text-center pt-2">
                            {isRegisterMode ? (
                                <p className="text-xs font-medium text-gray-500">
                                    Sudah punya akun?{' '}
                                    <button
                                        type="button"
                                        onClick={() => setIsRegisterMode(false)}
                                        className="text-red-700 font-bold hover:underline cursor-pointer ml-1"
                                    >
                                        Login Sekarang
                                    </button>
                                </p>
                            ) : (
                                <p className="text-xs font-medium text-gray-500">
                                    Belum ada akun?{' '}
                                    <button
                                        type="button"
                                        onClick={() => setIsRegisterMode(true)}
                                        className="text-red-700 font-bold hover:underline cursor-pointer ml-1"
                                    >
                                        Daftar Sekarang
                                    </button>
                                </p>
                            )}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}