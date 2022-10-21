import { useState } from "react";
import ProductsList from "./ProductsList";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import ProductsForBasket from "./ProducstForBasket";

function App() {
  const [basket, setBasket] = useState([]);
  const removeFromBasket = (itemId) => {
    setBasket(basket.filter((el) => el.id !== itemId))
  };

  return (
    <div className="wrapper">
      <Header basket={basket} />
      <Routes>
        <Route
          path="/"
          element={<ProductsList setBasket={setBasket} basket={basket} />}
        />
        <Route
          path="/basket"
          element={
            <ProductsForBasket
              setBasket={setBasket}
              basket={basket}
              removeFromBasket={removeFromBasket}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
