import React, { useState } from "react";
import ModalWindow from "./modalwindow";

export default function Card( { product, onAddToCart } ) {
    const [qty, setQty] = useState(1);
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <div className="card">
            <img
                src={product.image}
                 alt={product.title}
                 onClick={ () => setShowModal (true) }
                 />
                 <h3>{product.title}</h3>
                 <p>${product.price.toFixed(2)}</p>
                 <div className="card-controls">
                    <input
                        type="number"
                        min="1"
                        value={qty}
                        onChange={ (e) => setQty(+e.target.value) }
                        />
                        <button onClick={ () => onAddToCart(product, qty)}>
                            Add to Cart
                        </button>
                      </div>
                </div>

                {showmodal && (
                    <ModalWindow
                      onClose={ () => setShowModal(false)}
                    product={ product }
                />
            )}
        </>
    );
}