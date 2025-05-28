import React, { createContext, useState } from 'react';
export const CartContext = createContext();
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product, qty) => {
    setCartItems(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) return prev.map(i => i.id===product.id? {...i, quantity: i.quantity+qty}:i);
      return [...prev, {...product, quantity: qty}];
    });
  };
  const removeFromCart = id => setCartItems(prev=>prev.filter(i=>i.id!==id));
  return (
    <CartContext.Provider value={{cartItems, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
}
