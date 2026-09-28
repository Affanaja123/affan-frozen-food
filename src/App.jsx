import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CartDetail from './pages/CartDetail';
import UserProfile from './pages/UserProfile';
import OrderHistory from './pages/OrderHistory'; // <-- Import halaman Riwayat Pesanan
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // State untuk mengontrol halaman yang aktif ('home', 'detail', 'cart', 'profile', atau 'history')
  const [currentView, setCurrentView] = useState('home');

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
    // Buka drawer keranjang otomatis saat produk ditambahkan
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

  // Total jumlah kuantitas item untuk badge di Navbar
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col font-sans">

      {/* Navbar HANYA MUNCUL KETIKA BERADA DI HALAMAN HOME */}
      {currentView === 'home' && (
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          cartCount={totalCartCount}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenProfile={() => setCurrentView('profile')}
        />
      )}

      <main className="flex-grow">
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
            onOpenProfile={() => setCurrentView('profile')}
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
            onSelectOrder={() => setCurrentView('history')} // <-- Berpindah ke halaman detail OrderHistory saat riwayat diklik
            onLogout={() => {
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
      </main>

      {/* Footer disembunyikan otomatis di halaman CartDetail, UserProfile, & OrderHistory */}
      {currentView !== 'cart' && currentView !== 'profile' && currentView !== 'history' && <Footer />}

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