import { Phone } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';
import grabLogo from '../assets/grab.png';
import shopeeFoodLogo from '../assets/shopefood.png';
import gojekLogo from '../assets/gojek.jpg';

export default function Footer() {
  return (
    <footer className="relative bg-white text-gray-800 pt-16 w-full mt-auto overflow-hidden">
      
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

          {/* 2. Sisi Tengah: Call Center / WhatsApp Interaktif */}
          <div className="space-y-1.5">
            <h4 className="font-semibold text-[11px] uppercase tracking-wider text-gray-400">
              CALL CENTER
            </h4>
            <div className="space-y-1">
              <a 
                href="https://wa.me/6283807283388" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 text-gray-800 hover:text-emerald-700 font-medium text-sm transition group cursor-pointer"
              >
                {/* Icon WhatsApp SVG */}
                <div className="w-7 h-7 rounded-full bg-emerald-50 group-hover:bg-emerald-100 flex items-center justify-center text-emerald-600 transition shrink-0">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22.05l5.35-1.42c1.44.78 3.08 1.2 4.74 1.2 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2zM12.04 20.1c-1.42 0-2.81-.38-4.03-1.11l-.29-.17-3.03.8.81-2.95-.19-.31c-.81-1.31-1.24-2.82-1.24-4.36 0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.41 1.55 1.55 2.41 3.62 2.41 5.82 0 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.13-1.47-.73-1.7-.82-.23-.09-.39-.13-.56.13-.17.25-.64.82-.79.99-.15.17-.31.19-.56.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.39.11-.52.12-.12.25-.31.38-.47.13-.16.17-.27.25-.45.08-.17.04-.33-.02-.47-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.41-.56-.42h-.48c-.17 0-.45.06-.69.31-.24.25-.91.89-.91 2.17 0 1.28.93 2.52 1.06 2.69.13.17 1.83 2.79 4.43 3.91.62.27 1.1.43 1.48.55.62.2 1.18.17 1.62.1.5-.08 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z"/>
                  </svg>
                </div>
                <span className="group-hover:underline">+62 838-0728-3388</span>
              </a>
              <p className="text-[11px] text-gray-500 font-normal pl-9">
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
                className="px-3 py-2 bg-gray-50 hover:bg-red-50/60 border border-gray-200/80 rounded-xl transition shadow-2xs flex items-center space-x-2 group cursor-pointer"
                title="ShopeeFood"
              >
                <img src={shopeeFoodLogo} alt="ShopeeFood" className="w-5 h-5 object-cover rounded-md shrink-0" />
                <span className="text-xs font-medium text-gray-700 group-hover:text-red-700 transition">ShopeeFood</span>
              </a>

              {/* Gojek / GoFood */}
              <a 
                href="#gofood" 
                className="px-3 py-2 bg-gray-50 hover:bg-emerald-50/60 border border-gray-200/80 rounded-xl transition shadow-2xs flex items-center space-x-2 group cursor-pointer"
                title="Gojek"
              >
                <img src={gojekLogo} alt="Gojek" className="w-5 h-5 object-cover rounded-md shrink-0" />
                <span className="text-xs font-medium text-gray-700 group-hover:text-emerald-700 transition">Gojek</span>
              </a>

              {/* Grab / GrabFood */}
              <a 
                href="#grab" 
                className="px-3 py-2 bg-gray-50 hover:bg-green-50/60 border border-gray-200/80 rounded-xl transition shadow-2xs flex items-center space-x-2 group cursor-pointer"
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
