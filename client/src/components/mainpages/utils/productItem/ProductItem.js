import React from "react";
import { Link } from "react-router-dom";
import BtnRender from "./BtnRender";
function ProductItem({ product, isAdmin, handleCheck }) {
  console.log("productproduct", product);
  return (
    <div className="product_card">
      {isAdmin && (
        <input
          type="checkbox"
          checked={product.checked}
          onChange={() => handleCheck(product._id)}
        />
      )}
      <img
        src={product.images.url ? product.images.url : product.images[0].url}
        alt=""
      />

      <div className="product_box">
        <h2 title={product.title}>{product.title}</h2>
        <span>${product.price}</span>
        <p>{product.description}</p>
      </div>

      <BtnRender product={product} />
    </div>
  );
}

export default ProductItem;
