import React from 'react';
export default function ModalWindow({title,image,description,onClose}){
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e=>e.stopPropagation()}>
        <h2>{title}</h2>
        <img src={image} alt={title} style={{width:'100%',margin:'1rem 0'}} />
        <p>{description}</p>
        <button onClick={onClose} style={{marginTop:'1rem'}}>Close</button>
      </div>
    </div>
  );
}
