import React from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { CartItem } from './cart/CartItem';
import { CartSummary } from './cart/CartSummary';
import { isValidQuantity } from '../utils/validation';

interface CartProps {
  onCheckoutSuccess: () => void;
}

export const Cart: React.FC<CartProps> = ({ onCheckoutSuccess }) => {
  const { state, dispatch } = useCart();
  const { user } = useAuth();

  const handleQuantityChange = (id: number, quantity: number) => {
    if (!isValidQuantity(quantity)) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const handleRemove = (id: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const handleCheckout = () => {
    if (!user) {
      alert('Please login to complete your purchase');
      return;
    }
    onCheckoutSuccess();
  };

  if (state.items.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {state.items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onUpdateQuantity={handleQuantityChange}
          onRemove={handleRemove}
        />
      ))}
      <CartSummary
        total={state.total}
        onCheckout={handleCheckout}
      />
    </div>
  );
};