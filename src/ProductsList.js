import React from "react";
import { products } from "./database";
import Product from "./Product";

function ProductsList({ basket, setBasket }) {
  return (
    <div className="products">
      {products.map((el) => {
        return <Product product={el} basket={basket} setBasket={setBasket} />;
      })}
    </div>
  );
}

export default ProductsList;
