export const isValidQuantity = (quantity: number): boolean => {
  return quantity > 0 && Number.isInteger(quantity);
};

export const isValidPrice = (price: number): boolean => {
  return price >= 0 && Number.isFinite(price);
};