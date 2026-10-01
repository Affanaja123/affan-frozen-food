import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck } from 'lucide-react';
import logoImg from '../../assets/logo.jpeg';

export default function LoginAdmin({ onAdminLoginSuccess }) {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onAdminLoginSuccess) onAdminLoginSuccess();
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#0F172A] font-sans p-6 relative overflow-hidden">
            
            {/* Subtle Gradient Background Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100/80 p-8 sm:p-10 relative z-10 space-y-8">
                
                {/* Header Logo & Title */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="p-2 rounded-xl bg-red-50/80 border border-red-100">
                            <img 
                                src={logoImg} 
                                alt="Affan Frozen Food Logo" 
                                className="h-9 w-9 object-contain rounded-lg"
                            />
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-[10px] font-semibold tracking-wider uppercase">
                            <ShieldCheck size={13} className="text-red-700" /> Admin Portal
                        </div>
                    </div>

                    <div className="space-y-1">
                        <h1 className="text-xl font-bold text-gray-900 tracking-tight">
                            Inventory Management
                        </h1>
                        <p className="text-xs text-gray-500 font-normal">
                            Masukkan kredensial administrator untuk masuk ke sistem.
                        </p>
                    </div>
                </div>

                {/* Form Login Admin */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Input Email */}
                    <div className="space-y-1.5">
                        <label className="block text-[11px] font-semibold text-gray-600 uppercase tracking-wider">
                            Admin Email
                        </label>
                        <div className="relative flex items-center">
                            <span className="absolute left-3.5 text-gray-400 pointer-events-none flex items-center">
                                <Mail size={16} />
                            </span>
                            <input
                                type="email"
                                placeholder="admin@affanfrozen.com"
                                className="w-full pl-10 pr-4 py-2.5 text-xs text-gray-900 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-red-600/20 focus:border-red-600 transition"
                            />
                        </div>
                    </div>

                    {/* Input Password */}
                    <div className="space-y-1.5">
                        <label className="block text-[11px] font-semibold text-gray-600 uppercase tracking-wider">
                            Password
                        </label>
                        <div className="relative flex items-center">
                            <span className="absolute left-3.5 text-gray-400 pointer-events-none flex items-center">
                                <Lock size={16} />
                            </span>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="••••••••"
                                className="w-full pl-10 pr-11 py-2.5 text-xs text-gray-900 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-red-600/20 focus:border-red-600 transition"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3.5 text-gray-400 hover:text-gray-600 transition cursor-pointer"
                            >
                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                        </div>
                    </div>

                    {/* Tombol Login */}
                    <button
                        type="submit"
                        className="w-full mt-2 bg-red-700 hover:bg-red-800 active:scale-[0.98] text-white font-medium py-3 px-6 rounded-xl text-xs transition-all duration-200 flex items-center justify-center space-x-2 shadow-sm shadow-red-700/20 cursor-pointer"
                    >
                        <span>Masuk ke Dashboard</span>
                        <ArrowRight size={16} />
                    </button>

                </form>

                {/* Footer Info */}
                <div className="text-center pt-2 border-t border-gray-100">
                    <p className="text-[10px] text-gray-400 font-normal">
                        Protected System • Affan Frozen Food © 2026
                    </p>
                </div>

            </div>
        </div>
    );
}