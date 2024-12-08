import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { Cart } from './components/Cart';
import { LoginForm } from './components/auth/LoginForm';
import { SignupForm } from './components/auth/SignupForm';
import { OrderSuccess } from './components/OrderSuccess';
import { sarees } from './data/sarees';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);

  const handleCheckoutSuccess = () => {
    setShowOrderSuccess(true);
    setIsCartOpen(false);
  };

  const handleOrderSuccessClose = () => {
    setShowOrderSuccess(false);
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-100">
          <Header 
            onCartClick={() => setIsCartOpen(!isCartOpen)}
            onAuthClick={() => setIsAuthOpen(true)}
          />
          
          <main className="max-w-7xl mx-auto px-4 py-8">
            {isCartOpen ? (
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
                <Cart onCheckoutSuccess={handleCheckoutSuccess} />
              </div>
            ) : (
              <>
                <h1 className="text-3xl font-bold text-gray-900 mb-8">
                  Discover Our Collection
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sarees.map((saree) => (
                    <ProductCard key={saree.id} saree={saree} />
                  ))}
                </div>
              </>
            )}
          </main>

          {isAuthOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              {isLoginForm ? (
                <LoginForm onToggleForm={() => setIsLoginForm(false)} />
              ) : (
                <SignupForm onToggleForm={() => setIsLoginForm(true)} />
              )}
            </div>
          )}

          {showOrderSuccess && (
            <OrderSuccess onClose={handleOrderSuccessClose} />
          )}
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;