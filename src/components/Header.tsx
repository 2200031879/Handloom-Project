import React from 'react';
import { ShoppingBag, ShoppingCart, LogOut, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

interface HeaderProps {
  onCartClick: () => void;
  onAuthClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCartClick, onAuthClick }) => {
  const { state } = useCart();
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingBag className="text-indigo-600" size={24} />
          <span className="text-xl font-bold text-gray-800">Saree Shop</span>
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-gray-600">Welcome, {user.name}</span>
              <Button
                variant="secondary"
                onClick={logout}
                icon={LogOut}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              variant="secondary"
              onClick={onAuthClick}
              icon={User}
            >
              Login
            </Button>
          )}
          <Button
            variant="secondary"
            onClick={onCartClick}
            className="relative"
            icon={ShoppingCart}
          >
            {state.items.length > 0 && (
              <Badge count={state.items.length} />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};