import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; // Updated import
import { editProduct } from '../store/productSlice';

const EditProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Updated const history=useHistory();
  const { id } = useParams();

  const products = useSelector((state) => state);

  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: parseInt(id),
      name,
      price,
    };
    dispatch(editProduct(data));
    navigate('/home');
  };
  return (
    <div className="container flex">
      <>
        <h1 className="my-5 text-center">Edit Product {id}</h1>
        <div className="col-md-6 shadow mx-auto p-3 my-3">
          <form onSubmit={handleSubmit} className="">
            <div className="form-group">
              <input
                type="text"
                placeholder="product name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <br></br>
            <div className="form-group">
              <input
                type="number"
                placeholder="product price"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <br></br>
            <div className="form-group my-3 m-center">
              <input
                type="submit"
                value="Update Product"
                className="btn3 btn-success"
              />
              <br></br>
              <br></br>

              <Link to="/" className="btn2 mx-6 btn-danger ml-5 ">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </>
    </div>
  );
};

export default EditProduct;
