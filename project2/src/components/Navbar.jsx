import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
export default function Navbar() {
  const { cartItems } = useContext(CartContext);
  const totalQty = cartItems.reduce((s,i)=>s+i.quantity,0);
  return (
    <nav style={{background: 'var(--color-primary)', padding: '1rem', color: '#fff'}}>
      <div className="container" style={{display:'flex', justifyContent:'space-between'}}>
        <div><Link to="/category1" style={{color:'#fff', marginRight:'1rem'}}>Cat1</Link><Link to="/category2" style={{color:'#fff', marginRight:'1rem'}}>Cat2</Link><Link to="/category3" style={{color:'#fff'}}>Cat3</Link></div>
        <Link to="/cart" style={{color:'#fff'}}>Cart ({totalQty})</Link>
      </div>
    </nav>
  );
}
