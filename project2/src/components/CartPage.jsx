import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
export default function CartPage(){
  const { cartItems, removeFromCart } = useContext(CartContext);
  const subtotal = cartItems.reduce((s,i)=>s+i.price* i.quantity,0);
  const tax = subtotal * 0.0816;
  const total = subtotal + tax;
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map(i=> (
        <div key={i.id} style={{display:'flex',justifyContent:'space-between',margin:'1rem 0'}}>
          <span>{i.title} x {i.quantity}</span>
          <span>${(i.price*i.quantity).toFixed(2)}</span>
          <button onClick={()=>removeFromCart(i.id)}>Remove</button>
        </div>
      ))}
      <hr />
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>NY Tax (8.16%): ${tax.toFixed(2)}</p>
      <p><strong>Total: ${total.toFixed(2)}</strong></p>
    </div>
  );
}
