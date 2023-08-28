import React from "react";
import Card from "./Card";

const Product = ({
  ListData,
  addtocart,
  cartitem,
  setCartItem,
  uniqueCategories,
}) => {
  return (
    <div>
      <Card
        productlist={ListData}
        addtocart={addtocart}
        cartitem={cartitem}
        setCartItem={setCartItem}
        uniqueCategories={uniqueCategories}
      />
    </div>
  );
};

export default Product;
