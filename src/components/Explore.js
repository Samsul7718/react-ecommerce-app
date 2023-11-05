import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import { useNavigate } from 'react-router-dom';

const Explore = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // when this function called its nevigate to the home page to display the product
  const handleNavigate = () => {
    navigate('/home');
  };
  // const products = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchProducts());
  });
  return (
    <div className="explore flex">
      <h1> Lets Explore My Shop</h1>
      <button onClick={handleNavigate} className=" mx-3 btn3 btn-small">
        Explore Product
      </button>
    </div>
  );
};
export default Explore;
