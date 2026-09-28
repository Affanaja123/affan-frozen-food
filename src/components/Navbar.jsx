import { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

export default function Navbar({ searchTerm, setSearchTerm, cartCount, onOpenCart, onOpenProfile }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Efek scroll untuk mengubah warna navbar di halaman Home
  useState(() => {
    const handleScroll = () => {
      const tentangSection = document.getElementById('tentang');
      if (tentangSection) {
        const rect = tentangSection.getBoundingClientRect();
        if (rect.top <= 80) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      } else {
        if (window.scrollY > 400) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Kategori Pilihan', href: '#kategori' },
    { name: 'Semua Produk', href: '#produk' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-red-700 text-white shadow-md border-b border-red-800' 
        : 'bg-white text-gray-800 border-b border-gray-100 shadow-sm'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => setActiveMenu('Home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className={`p-1.5 rounded-xl transition duration-200 group-hover:scale-105 ${
              isScrolled ? 'bg-white shadow-sm' : 'bg-gray-50 shadow-2xs'
            }`}>
              <img 
                src={logoImg} 
                alt="Affan Frozen Food Logo" 
                className="h-9 w-auto object-contain rounded-lg"
              />
            </div>
            <span className={`font-medium text-lg sm:text-xl tracking-tight transition-colors ${
              isScrolled ? 'text-white' : 'text-gray-900'
            }`}>
              Affan Frozen Food
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4 text-sm font-normal h-full">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveMenu(item.name)}
                className={`relative h-full flex items-center px-3 transition-colors duration-200 group ${
                  isScrolled 
                    ? 'text-gray-100 hover:text-white' 
                    : 'text-gray-700 hover:text-black font-medium'
                } ${activeMenu === item.name ? (isScrolled ? 'font-medium text-white' : 'font-semibold text-gray-900') : ''}`}
              >
                <span>{item.name}</span>
                
                {/* Garis indikator bawah */}
                <span className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full transition-all duration-300 ${
                  activeMenu === item.name 
                    ? (isScrolled ? 'bg-white scale-x-100' : 'bg-red-700 scale-x-100')
                    : 'bg-transparent group-hover:bg-gray-400 scale-x-0 group-hover:scale-x-100'
                }`} />
              </a>
            ))}
          </nav>

          {/* Search Bar & Actions */}
          <div className="hidden lg:flex items-center space-x-3">
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
                className={`w-52 lg:w-56 pl-9 pr-4 py-1.5 text-xs sm:text-sm rounded-full shadow-inner focus:outline-none focus:ring-2 focus:ring-red-300 transition bg-white text-gray-900 placeholder-gray-400 border border-gray-200`}
              />
            </div>

            {/* Cart Icon */}
            <button 
              onClick={onOpenCart}
              className={`relative p-2.5 rounded-full transition cursor-pointer ${
                isScrolled ? 'text-white hover:bg-red-800/80' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <ShoppingCart size={20} className="transition transform hover:scale-105" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-red-950 font-bold text-[11px] w-5 h-5 rounded-full flex items-center justify-center shadow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Profile */}
            <button 
              onClick={onOpenProfile}
              className={`p-2.5 rounded-full transition cursor-pointer ${
                isScrolled ? 'text-white hover:bg-red-800/80' : 'text-gray-700 hover:bg-gray-100'
              }`}
              title="Profil Pengguna"
            >
              <User size={20} className="transition transform hover:scale-105" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button 
              onClick={onOpenCart}
              className={`relative p-2 ${isScrolled ? 'text-white' : 'text-gray-900'}`}
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-yellow-400 text-red-950 font-bold text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={onOpenProfile}
              className={`p-2 rounded-lg focus:outline-none transition ${isScrolled ? 'text-white' : 'text-gray-900 hover:bg-gray-100'}`}
              title="Profil Pengguna"
            >
              <User size={22} />
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg focus:outline-none transition ${isScrolled ? 'text-white' : 'text-gray-900 hover:bg-gray-100'}`}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-gray-800 px-4 pt-3 pb-6 space-y-2 border-t border-gray-200 shadow-xl">
          <div className="relative flex items-center mb-4 pt-1">
            <span className="absolute left-3.5 text-gray-400 pointer-events-none flex items-center justify-center">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm text-gray-900 bg-white border border-gray-200 rounded-full focus:outline-none shadow-2xs"
            />
          </div>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => {
                setActiveMenu(item.name);
                setIsOpen(false);
              }}
              className={`block py-2.5 px-4 rounded-lg text-sm font-normal transition ${
                activeMenu === item.name ? 'bg-red-700 text-white font-medium' : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}