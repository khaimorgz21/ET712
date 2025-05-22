import React from "react";

export default function ModalWindow( { product, onClose } ) {
    return(
        <div className="modal-overlay" onClick={onClose}>
            <div
              className="modal-content"
              onClick={ (e) => e.stopPropagation () }
              >
                <button className="modal-close" onClick={onClose}>
                    x
                </button>
                <img src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
              </div>
        </div>
    );
}