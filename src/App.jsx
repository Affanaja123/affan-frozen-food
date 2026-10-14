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
import AdminPesanan from './pages/admin/AdminPesanan';
import AdminBarang from './pages/admin/barang/AdminBarang';
import AdminTambahBarang from './pages/admin/barang/AdminTambahBarang';
import AdminEditBarang from './pages/admin/barang/AdminEditBarang'; // <-- Import Halaman Edit Barang
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null); // State untuk menyimpan data produk yang diedit

  // Mengambil state admin & view terakhir dari sessionStorage saat halaman dimuat/refresh
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    return sessionStorage.getItem('isAdminLoggedIn') === 'true';
  });

  const [currentView, setCurrentView] = useState(() => {
    const savedAdminLogin = sessionStorage.getItem('isAdminLoggedIn') === 'true';
    const savedView = sessionStorage.getItem('currentAdminView');
    if (savedAdminLogin && savedView) {
      return savedView;
    }
    if (window.location.pathname.includes('/admin')) {
      return 'admin_login';
    }
    return 'home';
  });

  // Setiap kali currentView atau status login admin berubah, simpan ke sessionStorage
  useEffect(() => {
    if (isAdminLoggedIn) {
      sessionStorage.setItem('isAdminLoggedIn', 'true');
      sessionStorage.setItem('currentAdminView', currentView);
    } else {
      sessionStorage.removeItem('isAdminLoggedIn');
      sessionStorage.removeItem('currentAdminView');
    }
  }, [isAdminLoggedIn, currentView]);

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
    } else if (menu === 'barang') {
      setCurrentView('admin_barang');
    } else if (menu === 'tambah_barang') {
      setCurrentView('admin_tambah_barang');
    } else {
      alert(`Navigasi ke menu admin: ${menu} (segera hadir)`);
    }
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    sessionStorage.clear();
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
        {currentView === 'admin_login' && !isAdminLoggedIn && (
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

        {/* Tampilan Halaman Admin Barang */}
        {currentView === 'admin_barang' && (
          <AdminBarang
            onLogout={handleAdminLogout}
            onNavigateMenu={handleAdminNavigate}
            onAddProduct={() => setCurrentView('admin_tambah_barang')}
            onEditProduct={(product) => {
              setEditingProduct(product);
              setCurrentView('admin_edit_barang');
            }}
          />
        )}

        {/* Tampilan Halaman Admin Tambah Barang */}
        {currentView === 'admin_tambah_barang' && (
          <AdminTambahBarang
            onLogout={handleAdminLogout}
            onNavigateMenu={handleAdminNavigate}
            onBack={() => setCurrentView('admin_barang')}
          />
        )}

        {/* Tampilan Halaman Admin Edit Barang */}
        {currentView === 'admin_edit_barang' && (
          <AdminEditBarang
            product={editingProduct}
            onLogout={handleAdminLogout}
            onNavigateMenu={handleAdminNavigate}
            onBack={() => setCurrentView('admin_barang')}
            onSave={(updatedProduct) => {
              alert('Perubahan barang berhasil disimpan!');
              setCurrentView('admin_barang');
            }}
          />
        )}
      </main>

      {/* Footer disembunyikan otomatis di halaman tertentu dan semua halaman admin */}
      {currentView !== 'login' && 
       currentView !== 'admin_login' && 
       currentView !== 'cart' && 
       currentView !== 'profile' && 
       currentView !== 'history' && 
       currentView !== 'admin_dashboard' && 
       currentView !== 'admin_pesanan' && 
       currentView !== 'admin_barang' && 
       currentView !== 'admin_tambah_barang' && 
       currentView !== 'admin_edit_barang' && <Footer />}

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