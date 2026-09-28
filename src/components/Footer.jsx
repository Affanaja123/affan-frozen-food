import { Phone, ShoppingBag } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

export default function Footer() {
  return (
    <footer className="relative bg-white text-gray-800 pt-16 w-full mt-auto border-t border-gray-100 shadow-sm overflow-hidden">
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* 1. Sisi Kiri: Logo Affan Frozen Food */}
          <div className="flex items-center space-x-4">
            <img 
              src={logoImg} 
              alt="Affan Frozen Food" 
              className="h-24 w-auto object-contain rounded-xl"
            />
            <div>
              <h3 className="font-bold text-base text-gray-900 tracking-wide">Affan Frozen Food</h3>
              <p className="text-[11px] text-red-700 font-semibold tracking-wider uppercase mt-0.5">Terpercaya & Higienis</p>
            </div>
          </div>

          {/* 2. Sisi Tengah: Call Center */}
          <div className="space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-500">
              CALL CENTER
            </h4>
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-gray-800 font-medium text-sm sm:text-base">
                <Phone size={16} className="text-red-700 shrink-0" />
                <span>+62 838-0728-3388</span>
              </div>
              <p className="text-xs text-red-700 font-medium pl-6">
                WhatsApp (Chat Only)
              </p>
            </div>
          </div>

          {/* 3. Sisi Kanan: Toko Resmi Online */}
          <div className="space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-500">
              TOKO RESMI ONLINE
            </h4>
            <div className="flex items-center space-x-3 pt-1">
              {/* Shopee */}
              <a 
                href="#shopee" 
                className="p-2.5 bg-gray-50 hover:bg-red-50 border border-gray-200 rounded-xl transition shadow-2xs flex items-center space-x-2 group"
                title="Shopee"
              >
                <ShoppingBag size={18} className="text-red-700 group-hover:scale-110 transition" />
                <span className="text-xs font-semibold text-gray-800">Shopee</span>
              </a>

              {/* GoFood */}
              <a 
                href="#gofood" 
                className="p-2.5 bg-gray-50 hover:bg-green-50 border border-gray-200 rounded-xl transition shadow-2xs flex items-center space-x-2 group"
                title="GoFood"
              >
                <span className="w-3 h-3 rounded-full bg-green-500 group-hover:scale-110 transition"></span>
                <span className="text-xs font-semibold text-gray-800">GoFood</span>
              </a>

              {/* GrabFood */}
              <a 
                href="#grabfood" 
                className="p-2.5 bg-gray-50 hover:bg-emerald-50 border border-gray-200 rounded-xl transition shadow-2xs flex items-center space-x-2 group"
                title="GrabFood"
              >
                <span className="w-3 h-3 rounded-full bg-emerald-600 group-hover:scale-110 transition"></span>
                <span className="text-xs font-semibold text-gray-800">GrabFood</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bagian Bawah: Pita Kurva Lengkung Warna Merah */}
      <div className="relative bg-red-700 text-white pt-12 pb-6 overflow-hidden">
        
        {/* SVG Kurva Gelombang Atas */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
          <svg 
            className="relative block w-full h-10 sm:h-16 text-white" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,40 C350,110 850,10 1200,60 L1200,0 L0,0 Z" 
              fill="currentColor"
            ></path>
          </svg>
        </div>

        {/* Teks Copyright Ditengahkan */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[11px] sm:text-xs font-normal tracking-wider">
          <p>&copy; 2026 AFFAN FROZEN FOOD. ALL RIGHTS RESERVED.</p>
        </div>
      </div>

    </footer>
  );
}