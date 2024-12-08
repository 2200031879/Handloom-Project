import React from 'react';
import { formatPrice } from '../../utils/price';
import { Button } from '../ui/Button';

interface CartSummaryProps {
  total: number;
  onCheckout: () => void;
}

export const CartSummary: React.FC<CartSummaryProps> = ({ total, onCheckout }) => {
  return (
    <div className="border-t pt-4">
      <div className="flex justify-between items-center">
        <span className="font-semibold">Total:</span>
        <span className="text-xl font-bold">{formatPrice(total)}</span>
      </div>
      <Button
        className="w-full mt-4"
        onClick={onCheckout}
      >
        Proceed to Payment
      </Button>
    </div>
  );
};