import React from 'react';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from './ui/Button';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/price';

interface OrderSuccessProps {
  onClose: () => void;
}

export const OrderSuccess: React.FC<OrderSuccessProps> = ({ onClose }) => {
  const { state, dispatch } = useCart();
  const orderId = Math.random().toString(36).substr(2, 9).toUpperCase();

  React.useEffect(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, [dispatch]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="text-center">
          <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
          <h2 className="mt-4 text-2xl font-bold text-gray-900">Order Successful!</h2>
          <p className="mt-2 text-gray-600">
            Thank you for your purchase. Your order has been confirmed.
          </p>
          <div className="mt-4 border-t border-b py-4">
            <p className="font-semibold">Order ID: {orderId}</p>
            <p className="mt-2">Total Amount: {formatPrice(state.total)}</p>
          </div>
          <Button
            className="mt-6 w-full"
            onClick={onClose}
            icon={ArrowLeft}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};