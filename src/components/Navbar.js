import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span className="logo">Ecommerce Store</span>
      <div>
        <Link className="navLink" to="/home">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <Link className="navLink" to="/">
          Explore
        </Link>
        <span className="cartCount">Cart Items:{items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
