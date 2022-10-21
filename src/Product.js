import React from "react";

const Product = ({ product, basket, setBasket }) => {
  const { image, price, name } = product;
  const handleClick = (product) => {
    return setBasket([...basket, product]);
  };

  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt="phot" />
      </div>
      <div className="about">
        <p>{name}</p>
        <p>{price} ₽</p>
      </div>

      <button className="btn"
        disabled={basket.includes(product)}
        onClick={() => handleClick(product)}
      >
        {basket.includes(product) ? "товар в корзине" : "добавить в корзину"}
      </button>
    </div>
  );
};

export default Product;
