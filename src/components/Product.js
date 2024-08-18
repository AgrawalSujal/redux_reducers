import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";
import { useSelector } from "react-redux";
const Product = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchData = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchData();
  }, []);

  if (status === STATUSES.LOADING) {
    return <h2>LOADING......</h2>;
  }
  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!!</h2>;
  }
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className="btn">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
