import React, { useContext, useState } from "react";
import { GlobalState } from "../../../GlobalState";
import ProductItem from "../utils/productItem/ProductItem";
import Loading from "../utils/loading/Loading";

function Products() {
  const state = useContext(GlobalState);
  const [products, setProducts] = state.productsAPI.products
  const [isAdmin] = state.userAPI.isAdmin;

  const handleCheck = (id) =>{
    products.forEach(product => {
        if(product._id === id) product.checked = !product.checked
    })
    setProducts([...products])
}
  return (
    <>
      <div className="products">
        {products.length === 0 && <Loading />}
        {products.map((product) => {
          return (
            <ProductItem
              key={product._id}
              product={product}
              isAdmin={isAdmin}
              handleCheck={handleCheck}
            />
          );
        })}
      </div>
    </>
  );
}

export default Products;
