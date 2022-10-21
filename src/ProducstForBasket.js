import React from "react";
import { products } from "./database";
import ProductForBasket from "./ProductForBasket";

const ProductsForBasket = ({ basket, setBasket, removeFromBasket }) => {
  return (
    <div className="products">
      {basket.map((item) => {
        if (products.includes(item)) {
          return (
            <ProductForBasket
              product={item}
              basket={basket}
              setBasket={setBasket}
              removeFromBasket={removeFromBasket}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default ProductsForBasket;
