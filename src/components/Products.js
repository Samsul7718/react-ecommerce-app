// import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { deleteProd } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';
import { Link } from 'react-router-dom';

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  // this function add product to the cart when this button is clicked
  const handleAdd = (product) => {
    dispatch(add(product));
  };

  // when this condition satisfied return value display
  if (status === STATUSES.LOADING) {
    return <h2>......Loading</h2>;
  }

  // when this condition satisfied return value display
  if (status === STATUSES.ERROR) {
    return <h2>opps...something went wrong...</h2>;
  }

  // when this function called with purticular id deleted value dispatch
  const deleteProduct = (id) => {
    dispatch(deleteProd(id));
  };

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <img src={'./733734-200.png'} alt="rating" />
          <br></br>
          <button onClick={() => handleAdd(product)} className="btn ml-6">
            Add to cart
          </button>
          <br></br>
          <br></br>
          <button onClick={() => deleteProduct(product.id)} className="btn1">
            DELETE
          </button>
          <br></br>
          <br></br>
          <Link
            to={`/edit/${product.id}`}
            className="btn2 btn-success btn-small"
          >
            Edit
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
