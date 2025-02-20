import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "./productsData";
import "../App.css";

const ProductPage = ({ cart = [], setCart }) => {
  const { category } = useParams();
  const [disabledButtons, setDisabledButtons] = useState({});

  // Track cart updates to disable buttons properly
  useEffect(() => {
    const updatedDisabledButtons = {};
    cart.forEach((item) => {
      updatedDisabledButtons[item.id] = true;
    });
    setDisabledButtons(updatedDisabledButtons);
  }, [cart]);

  const addToCart = (product) => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="products-page">
      <h2>{category.toUpperCase()}</h2>
      <div className="products">
        {filteredProducts.length === 0 ? (
          <p>No products found in this category.</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">${product.price.toFixed(2)}</p>
              <button
                className="btn"
                onClick={() => addToCart(product)}
                disabled={disabledButtons[product.id]}
              >
                {disabledButtons[product.id] ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductPage;
