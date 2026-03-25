import React, { useState } from "react";
import "./App.css";

function App() {
  const productsData = [
    {
      id: 1,
      name: "T-Shirt",
      price: 500,
      category: "Clothing",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Shoes",
      price: 1500,
      category: "Footwear",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Watch",
      price: 2000,
      category: "Accessories",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 4,
      name: "Jeans",
      price: 1200,
      category: "Clothing",
      image: "https://via.placeholder.com/150"
    },
    {
      id:5,
      name: "Sneakers",
      price: 1800,
      category: "Footwear",
      image: "https://via.placeholder.com/150"
    }
  ];

  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [cart, setCart] = useState([]);

  const filteredProducts = productsData
    .filter((p) => category === "All" || p.category === category)
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => (maxPrice ? p.price <= maxPrice : true));

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="container">
      <h1>🛍 Product Store</h1>

      {/* Search + Price Filter */}
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search product..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type="number"
          placeholder="Max price"
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      {/* Category Filters */}
      <div className="filters">
        <button onClick={() => setCategory("All")}>All</button>
        <button onClick={() => setCategory("Clothing")}>Clothing</button>
        <button onClick={() => setCategory("Footwear")}>Footwear</button>
        <button onClick={() => setCategory("Accessories")}>Accessories</button>
      </div>

      {/* Cart */}
      <h3>🛒 Cart Items: {cart.length}</h3>

      {/* Product Grid */}
      <div className="grid">
        {filteredProducts.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <span>{product.category}</span>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;