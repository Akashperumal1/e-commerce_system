import React, { useState } from "react";
import products from "./productsData";
import "../App.css";

const HomePage = ({ cart, setCart }) => {
  const [disabledButtons, setDisabledButtons] = useState({});

  const addToCart = (product) => {
    setCart([...cart, product]);
    setDisabledButtons((prev) => ({ ...prev, [product.id]: true }));
  };

  return (
    <div className="homepage">
      <h1>Discover Amazing Products</h1>
      <p>Explore our premium selection of products.</p>

      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
