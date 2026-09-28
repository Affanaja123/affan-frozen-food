import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) {
  if (!isOpen) return null;

  // Hitung subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop / Overlay gelap di belakang */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header Keranjang */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center space-x-2">
              <ShoppingBag size={20} className="text-red-700" />
              <h2 className="font-semibold text-gray-900 text-base tracking-wide">Keranjang Belanja</h2>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-200/60 transition cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* List Item Keranjang */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-20 space-y-3">
                <div className="w-16 h-16 bg-red-50 text-red-700 rounded-full flex items-center justify-center mx-auto text-2xl">
                  🛒
                </div>
                <p className="text-gray-600 font-medium text-sm">Keranjang kamu masih kosong</p>
                <p className="text-gray-400 text-xs">Yuk, pilih frozen food favoritmu sekarang!</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50/60 rounded-2xl border border-gray-100/80 gap-3">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-14 h-14 object-cover rounded-xl border border-gray-200 shrink-0" 
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 text-xs sm:text-sm truncate">{item.name}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Rp {item.price.toLocaleString('id-ID')}</p>
                    
                    {/* Kontrol Qty */}
                    <div className="flex items-center space-x-2 mt-2">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-lg bg-white border border-gray-300 flex items-center justify-center text-xs font-bold text-gray-600 hover:bg-gray-100 cursor-pointer"
                      >
                        -
                      </button>
                      <span className="text-xs font-semibold text-gray-800 w-5 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-lg bg-white border border-gray-300 flex items-center justify-center text-xs font-bold text-gray-600 hover:bg-gray-100 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-right flex flex-col items-end justify-between h-full">
                    <button 
                      onClick={() => onRemoveItem(item.id)}
                      className="text-gray-400 hover:text-red-600 transition p-1 cursor-pointer"
                    >
                      <Trash2 size={15} />
                    </button>
                    <span className="text-xs font-bold text-red-700 mt-6">
                      Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer / Ringkasan Pembayaran */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 bg-gray-50 p-6 space-y-4">
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-900">Rp {subtotal.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Pajak (0%)</span>
                  <span className="font-medium text-gray-900">Rp 0</span>
                </div>
                <div className="flex justify-between text-base font-bold text-gray-900 pt-2 border-t border-gray-200">
                  <span>TOTAL</span>
                  <span className="text-red-700">Rp {subtotal.toLocaleString('id-ID')}</span>
                </div>
              </div>

              <button 
                onClick={() => {
                  if (onCheckout) onCheckout();
                }}
                className="w-full bg-red-800 hover:bg-red-900 active:scale-95 text-white font-medium py-3 rounded-xl text-sm transition shadow-md flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Konfirmasi Pembayaran</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}