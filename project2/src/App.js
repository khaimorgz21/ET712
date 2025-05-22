import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Card from "./card";
//import products from "./data/products";
import "./App.css";

function CategoryPage({ title }) {
  return (
    <div className="grid">
      {products.map( () => (
        <Card key={p.id} product={p} onAddToCart={window.appAddToCart} />
       ))}
    </div>
  );
}

function CartPage({ cart, taxRate }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty,
0);
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          {item.title} x {item.qty} = ${(item.price * item.qty).toFixed(2) }
        </div>
    ))}
    <hr />
    <p>Subtotal: ${subtotal.toFixed(2)}</p>
    <p>NY Tax (8.16%): ${tax.toFixed(2)}</p>
    <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);
  const taxRate = 0.0816;

  // expose for child Card usage
  window.appAddToCart = (product, qty) => {
    setCart ( (c) => {
      const exist = c.find((i) => i.id === product.id);
      if (exist) {
        return c.map ((i) =>
          i.id === product.id ? { ...i, qty: i.qty + qty } : i
       );
      } else {
        return [...c, { ...product, qty }];
      }
    });
  };
  return (
    <BrowserRouter>
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/category">Products</NavLink>
        <NavLink to="/cart">Cart ({cart.length})</NavLink>
      </nav>

      <Routes>
         <Route path="/" element={<h1>Welcome to Our Shop</h1>} />
         <Route
           path="/category"
           element={<CategoryPage title="All Products" />}
           />
           <Route path="/cart" element={<CartPage cart={cart} taxRate={taxRate}
           />} />
      </Routes>
    </BrowserRouter>
  );
}