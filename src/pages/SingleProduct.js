import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const params = useParams(); //this will give you an _id after /product/2313231
  const history = useHistory();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_APIPATH}/api/products/${params._id}`)
      .then((response) => response.json())
      .then((product) => {
        setProduct(product);
      });
  }, [params._id]);

  return (
    <div className="container mx-auto mt-12">
      <button
        className="mb-12 font-bold"
        onClick={() => {
          history.goBack();
        }}
      >
        Back
      </button>
      <div className="flex">
        <img src={product.image} alt="pizza" />
        <div className="ml-16">
          <h1 className="text-xl font-bold">{product.name}</h1>
          <div className="text-md">{product.size}</div>
          <div className="font-bold mt-2">₹ {product.price}</div>
          <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
