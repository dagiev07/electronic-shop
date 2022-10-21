import React from "react";
const ProductForBasket = ({ product, removeFromBasket }) => {
  const { id, image, price, name } = product;
  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt="phot" />
      </div>
      <div className="about">
        <p>{name}</p>
      <p>{price} ₽</p>
      </div>
      

      <button className="btn-basket" onClick={() => removeFromBasket(id)}>
        {"удалить товар из кoрзины"}
      </button>
    </div>
  );
};

export default ProductForBasket;
