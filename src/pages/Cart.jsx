import React from "react";
import "../App.css";

const Cart = ({ cart, setCart }) => {
  if (!cart || !Array.isArray(cart)) return <p>Error: Cart is invalid</p>;

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-image" />
            <div>
              <h3>{item.name}</h3>
              <p className="price">${item.price.toFixed(2)}</p>
            </div>
            <button className="remove-btn" onClick={() => removeFromCart(index)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
  