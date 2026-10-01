import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CartDetail from './pages/CartDetail';
import UserProfile from './pages/UserProfile';
import OrderHistory from './pages/OrderHistory';
import Login from './pages/Login';
import LoginAdmin from './pages/admin/LoginAdmin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminPesanan from './pages/admin/AdminPesanan'; // <-- Import Halaman Admin Pesanan
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  // Deteksi URL saat pertama kali dimuat: jika mengandung '/admin', arahkan ke login admin
  useEffect(() => {
    if (window.location.pathname.includes('/admin')) {
      setCurrentView('admin_login');
    }
  }, []);

  const handleAddToCart = (product, qty) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [...prev, { ...product, quantity: qty }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleOpenProfile = () => {
    if (isLoggedIn) {
      setCurrentView('profile');
    } else {
      setCurrentView('login');
    }
  };

  // Fungsi pengatur navigasi menu admin yang konsisten di semua halaman admin
  const handleAdminNavigate = (menu) => {
    if (menu === 'dashboard') {
      setCurrentView('admin_dashboard');
    } else if (menu === 'pesanan') {
      setCurrentView('admin_pesanan');
    } else {
      alert(`Navigasi ke menu admin: ${menu} (segera hadir)`);
    }
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    window.history.pushState({}, '', '/');
    setCurrentView('home');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">

      {/* Navbar HANYA MUNCUL KETIKA BERADA DI HALAMAN HOME */}
      {currentView === 'home' && (
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          cartCount={totalCartCount}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenProfile={handleOpenProfile}
        />
      )}

      <main className="flex-grow">
        {currentView === 'login' && (
          <Login
            onLoginSuccess={() => {
              setIsLoggedIn(true);
              setCurrentView('profile');
            }}
          />
        )}

        {/* Tampilan Login Khusus Admin */}
        {currentView === 'admin_login' && (
          <LoginAdmin
            onAdminLoginSuccess={() => {
              setIsAdminLoggedIn(true);
              setCurrentView('admin_dashboard');
            }}
          />
        )}

        {currentView === 'home' && (
          <Home
            searchTerm={searchTerm}
            onAddToCart={handleAddToCart}
            onNavigateToDetail={() => setCurrentView('detail')}
          />
        )}

        {currentView === 'detail' && (
          <ProductDetail
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onAddToCart={handleAddToCart}
            onBack={() => setCurrentView('home')}
            cartCount={totalCartCount}
            onOpenCart={() => setIsCartOpen(true)}
            onOpenProfile={handleOpenProfile}
          />
        )}

        {currentView === 'cart' && (
          <CartDetail
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onBack={() => setCurrentView('home')}
            onOrderSuccess={() => {
              setCartItems([]);
              setCurrentView('home');
            }}
          />
        )}

        {currentView === 'profile' && (
          <UserProfile
            onBack={() => setCurrentView('home')}
            onSelectOrder={() => setCurrentView('history')}
            onLogout={() => {
              setIsLoggedIn(false);
              alert('Berhasil keluar dari akun!');
              setCurrentView('home');
            }}
          />
        )}

        {currentView === 'history' && (
          <OrderHistory
            onBack={() => setCurrentView('profile')}
          />
        )}

        {/* Tampilan Halaman Admin Dashboard */}
        {currentView === 'admin_dashboard' && (
          <AdminDashboard
            onLogout={handleAdminLogout}
            onNavigateMenu={handleAdminNavigate}
          />
        )}

        {/* Tampilan Halaman Admin Pesanan */}
        {currentView === 'admin_pesanan' && (
          <AdminPesanan
            onLogout={handleAdminLogout}
            onNavigateMenu={handleAdminNavigate}
          />
        )}
      </main>

      {/* Footer disembunyikan otomatis di halaman tertentu dan semua halaman admin */}
      {currentView !== 'login' && currentView !== 'admin_login' && currentView !== 'cart' && currentView !== 'profile' && currentView !== 'history' && currentView !== 'admin_dashboard' && currentView !== 'admin_pesanan' && <Footer />}

      {/* Komponen Panel Keranjang / Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => {
          setIsCartOpen(false);
          setCurrentView('cart');
        }}
      />
    </div>
  );
}