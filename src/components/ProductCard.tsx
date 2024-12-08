import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Saree } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  saree: Saree;
}

export const ProductCard: React.FC<ProductCardProps> = ({ saree }) => {
  const { dispatch } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={saree.image}
        alt={saree.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{saree.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{saree.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${saree.price}</span>
          <button
            onClick={() => dispatch({ type: 'ADD_TO_CART', payload: saree })}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-indigo-700 transition-colors"
          >
            <ShoppingCart size={20} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};