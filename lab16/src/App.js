import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import {  motion } from "framer-motion;"

const productsData = [
  { id: 1, name: "White T‑Shirt", price: 19.99, image: "https://www.houseofblanks.com/seed/shirt/200/200" },
  { id: 2, name: "Blue Jeans", price: 49.99, image: "https://www.gerberchildrenswear.com/seed/jeans/200/200" },
  { id: 3, name: "Sneakers", price: 89.99, image: "https://m.media-amazon.com/seed/shoes/200/200" },
];

function ProductCard({ product, addToCart, inCart }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="rounded-2xl shadow p-4 flex flex-col items-center gap-3">
      <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded-xl" />
      <h3 className="text-lg font-semibold text-center">{product.name}</h3>
      <p className="text-sm">${product.price.toFixed(2)}</p>
      <button
        disabled={inCart}
        onClick={() => addToCart(product)}
        className={`px-4 py-2 rounded-xl w-full transition-all ${
          inCart ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
      >
        {inCart ? "In Cart" : "Add to Cart"}
      </button>
    </motion.div>
  );
}

function ProductList({ products, cart, addToCart }) {
  return (
    <div className="grid md:grid-cols-3 gap-6 p-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} inCart={cart.some((c) => c.id === p.id)} />
      ))}
    </div>
  );
}

function CartPage({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center justify-between rounded-xl shadow p-4">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                  <span>{item.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>${item.price.toFixed(2)}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-right font-semibold mt-4">Total: ${total.toFixed(2)}</p>
        </>
      )}
    </div>
  );
}

export default function App() {
  const [products] = useState(productsData);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      if (prev.some((p) => p.id === product.id)) return prev; // prevent duplicates
      return [...prev, product];
    });
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((item) => item.id !== id));

  return (
    <BrowserRouter>
      <nav className="flex items-center justify-between bg-white shadow px-6 py-4">
        <Link to="/" className="text-xl font-bold">
          ShopEZ
        </Link>
        <Link to="/cart" className="relative">
          <ShoppingCart size={28} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList products={products} cart={cart} addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
    </BrowserRouter>
  );
}
