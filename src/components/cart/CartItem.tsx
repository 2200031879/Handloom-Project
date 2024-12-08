import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { Button } from '../ui/Button';
import { formatPrice } from '../../utils/price';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  item,
  onUpdateQuantity,
  onRemove,
}) => {
  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-gray-600">{formatPrice(item.price)}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          icon={Minus}
        />
        <span className="w-8 text-center">{item.quantity}</span>
        <Button
          variant="secondary"
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          icon={Plus}
        />
      </div>
      <Button
        variant="danger"
        onClick={() => onRemove(item.id)}
        icon={Trash2}
      />
    </div>
  );
};