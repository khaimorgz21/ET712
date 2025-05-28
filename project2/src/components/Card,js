import React, { useState } from 'react';
import ModalWindow from './ModalWindow';
export default function Card({product, onAdd}){
  const [qty,setQty]=useState(1);
  const [open,setOpen]=useState(false);
  return (
    <div style={{border:'1px solid #ccc',borderRadius:'8px',padding:'1rem',background:'#fff'}}>
      <img src={product.image} alt={product.title} style={{width:'100%',cursor:'pointer'}} onClick={()=>setOpen(true)} />
      <h3>{product.title}</h3>
      <input type="number" min="1" value={qty} onChange={e=>setQty(+e.target.value)} style={{width:'3rem'}} />
      <button onClick={()=>onAdd(product,qty)} style={{marginLeft:'1rem',background:'var(--color-secondary)',color:'#fff'}}>Add to Cart</button>
      {open && <ModalWindow onClose={()=>setOpen(false)} title={product.title} image={product.image} description={product.description} />}
    </div>
  );
}
