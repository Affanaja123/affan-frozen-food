import { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

export default function DetailNavbar({ searchTerm, setSearchTerm, cartCount, onOpenCart, onOpenProfile }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-red-700 text-white shadow-md border-b border-red-800' 
        : 'bg-white text-gray-800 border-b border-gray-100 shadow-sm'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 cursor-pointer group">
            <div className={`p-1.5 rounded-xl transition duration-200 group-hover:scale-105 ${
              isScrolled ? 'bg-white shadow-sm' : 'bg-gray-50 shadow-2xs'
            }`}>
              <img 
                src={logoImg} 
                alt="Affan Frozen Food Logo" 
                className="h-9 w-auto object-contain rounded-lg"
              />
            </div>
            <span className={`font-bold text-lg sm:text-xl tracking-tight transition-colors ${
              isScrolled ? 'text-white' : 'text-gray-900'
            }`}>
              Affan Frozen Food
            </span>
          </div>

          {/* Search Bar & Actions (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative flex items-center">
              <span className={`absolute left-3.5 pointer-events-none flex items-center justify-center ${
                isScrolled ? 'text-gray-500' : 'text-gray-400'
              }`}>
                <Search size={16} />
              </span>
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64 lg:w-80 pl-9 pr-4 py-1.5 text-xs sm:text-sm rounded-full shadow-inner focus:outline-none focus:ring-2 focus:ring-red-300 transition bg-white text-gray-900 placeholder-gray-400 border border-gray-200"
              />
            </div>

            {/* Cart Icon */}
            <button 
              onClick={onOpenCart}
              className={`relative p-2.5 rounded-full transition cursor-pointer ${
                isScrolled ? 'text-white hover:bg-red-800/80' : 'text-gray-700 hover:bg-gray-100'
              }`}
              aria-label="Keranjang Belanja"
            >
              <ShoppingCart size={20} className="transition transform hover:scale-105" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-red-950 font-bold text-[11px] w-5 h-5 rounded-full flex items-center justify-center shadow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Profile (LANGSUNG PINDAH HALAMAN, TANPA DROPDOWN) */}
            <button 
              onClick={onOpenProfile}
              className={`p-2.5 rounded-full transition cursor-pointer ${
                isScrolled ? 'text-white hover:bg-red-800/80' : 'text-gray-700 hover:bg-gray-100'
              }`}
              aria-label="Profil Pengguna"
              title="Profil Pengguna"
            >
              <User size={20} className="transition transform hover:scale-105" />
            </button>
          </div>

          {/* Mobile Actions Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button 
              onClick={onOpenCart}
              className={`relative p-2 rounded-full ${isScrolled ? 'text-white' : 'text-gray-900'}`}
              aria-label="Keranjang Belanja"
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-yellow-400 text-red-950 font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Profile Icon (LANGSUNG PINDAH HALAMAN) */}
            <button 
              onClick={onOpenProfile}
              className={`p-2 rounded-full ${isScrolled ? 'text-white' : 'text-gray-900'}`}
              aria-label="Profil Pengguna"
              title="Profil Pengguna"
            >
              <User size={22} />
            </button>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg focus:outline-none transition ${isScrolled ? 'text-white' : 'text-gray-900 hover:bg-gray-100'}`}
              aria-label="Menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu (Hanya Search Bar) */}
      {isOpen && (
        <div className={`md:hidden px-4 pt-4 pb-6 space-y-4 border-t shadow-xl ${
          isScrolled ? 'bg-red-800 text-white border-red-900' : 'bg-white text-gray-800 border-gray-200'
        }`}>
          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-gray-400 pointer-events-none flex items-center justify-center">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm text-gray-900 bg-white border border-gray-200 rounded-full focus:outline-none shadow-inner"
            />
          </div>
        </div>
      )}
    </header>
  );
}