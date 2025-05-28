import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { productsByCategory } from '../data/products';
import Card from './Card';
import { CartContext } from '../context/CartContext';
export default function ProductPage(){
  const { cat } = useParams();
  const items = productsByCategory['category'+cat] || [];
  const { addToCart } = useContext(CartContext);
  return (
    <div className="grid grid-cols-1-2-3">
      {items.map(p=> <Card key={p.id} product={p} onAdd={addToCart} />)}
    </div>
  );
}
