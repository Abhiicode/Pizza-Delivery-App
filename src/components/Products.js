import React, { useState, useEffect } from "react";
import Product from "./Product";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_APIPATH}/api/products`)
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
      });
  }, []);
  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8">Products</h1>
      <div className="grid grid-cols-5 my-8 gap-24">
        {products.map((product) => (
          <Product
            key={product._id}
            name={product.name}
            image={product.image}
            price={product.price}
            size={product.size}
            id={product._id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
