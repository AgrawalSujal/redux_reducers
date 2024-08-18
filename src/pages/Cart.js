import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div className="cartWrapper">
      <h2>
        <b>Cart</b>
      </h2>
      {products.map((product) => (
        <div className="cartCard" key={product.id}>
          <img src={product.image} alt="image not available" />
          <h5>{product.title}</h5>
          <h5>{product.price}</h5>
          <button className="btn" onClick={() => handleRemove(product.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
