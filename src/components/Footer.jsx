import { Phone } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';
import grabLogo from '../assets/grab.png';
import shopeeFoodLogo from '../assets/shopefood.png';
import gojekLogo from '../assets/gojek.jpg';

export default function Footer() {
  return (
    <footer className="relative bg-white text-gray-800 pt-16 w-full mt-auto border-t border-gray-100 shadow-xs overflow-hidden">
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* 1. Sisi Kiri: Logo Affan Frozen Food */}
          <div className="flex items-center space-x-4">
            <img 
              src={logoImg} 
              alt="Affan Frozen Food" 
              className="h-20 w-auto object-contain rounded-xl border border-gray-100 shadow-2xs"
            />
            <div className="space-y-0.5">
              <h3 className="font-semibold text-sm text-gray-900 tracking-tight">Affan Frozen Food</h3>
              <p className="text-[10px] text-red-700 font-medium tracking-wider uppercase">Terpercaya & Higienis</p>
            </div>
          </div>

          {/* 2. Sisi Tengah: Call Center */}
          <div className="space-y-1.5">
            <h4 className="font-semibold text-[11px] uppercase tracking-wider text-gray-400">
              CALL CENTER
            </h4>
            <div className="space-y-0.5">
              <div className="flex items-center space-x-2 text-gray-800 font-medium text-sm">
                <Phone size={15} className="text-red-700 shrink-0" />
                <span>+62 838-0728-3388</span>
              </div>
              <p className="text-[11px] text-gray-500 font-normal pl-6">
                WhatsApp (Chat Only)
              </p>
            </div>
          </div>

          {/* 3. Sisi Kanan: Toko Resmi Online (Menggunakan Logo Gambar Asli) */}
          <div className="space-y-1.5">
            <h4 className="font-semibold text-[11px] uppercase tracking-wider text-gray-400">
              TOKO RESMI ONLINE
            </h4>
            <div className="flex items-center space-x-2.5 pt-1">
              
              {/* ShopeeFood */}
              <a 
                href="#shopeefood" 
                className="px-3 py-2 bg-gray-50 hover:bg-red-50/60 border border-gray-200/80 rounded-xl transition shadow-2xs flex items-center space-x-2 group"
                title="ShopeeFood"
              >
                <img src={shopeeFoodLogo} alt="ShopeeFood" className="w-5 h-5 object-cover rounded-md shrink-0" />
                <span className="text-xs font-medium text-gray-700 group-hover:text-red-700 transition">ShopeeFood</span>
              </a>

              {/* Gojek / GoFood */}
              <a 
                href="#gofood" 
                className="px-3 py-2 bg-gray-50 hover:bg-emerald-50/60 border border-gray-200/80 rounded-xl transition shadow-2xs flex items-center space-x-2 group"
                title="Gojek"
              >
                <img src={gojekLogo} alt="Gojek" className="w-5 h-5 object-cover rounded-md shrink-0" />
                <span className="text-xs font-medium text-gray-700 group-hover:text-emerald-700 transition">Gojek</span>
              </a>

              {/* Grab / GrabFood */}
              <a 
                href="#grab" 
                className="px-3 py-2 bg-gray-50 hover:bg-green-50/60 border border-gray-200/80 rounded-xl transition shadow-2xs flex items-center space-x-2 group"
                title="Grab"
              >
                <img src={grabLogo} alt="Grab" className="w-5 h-5 object-cover rounded-md shrink-0" />
                <span className="text-xs font-medium text-gray-700 group-hover:text-green-700 transition">Grab</span>
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* Bagian Bawah: Pita Kurva Lengkung Warna Merah */}
      <div className="relative bg-red-700 text-white pt-10 pb-5 overflow-hidden">
        
        {/* SVG Kurva Gelombang Atas */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
          <svg 
            className="relative block w-full h-8 sm:h-12 text-white" 
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
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[10px] sm:text-[11px] font-normal tracking-wider">
          <p>&copy; 2026 AFFAN FROZEN FOOD. ALL RIGHTS RESERVED.</p>
        </div>
      </div>

    </footer>
  );
}