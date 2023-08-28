import React from "react";
import Product from "./Product";
import Navbar from "./Navbar";

const Home = ({
  sortProductsHighToLow,
  handleLogout,
  Apidata,
  addtocart,
  cartitem,
  setCartItem,
  uniqueCategories,
}) => {
  return (
    <div>
      <Navbar
        sortProductsHighToLow={sortProductsHighToLow}
        cartitem={cartitem}
        Apidata={Apidata}
        handleLogout={handleLogout}
      />
      <Product
        ListData={Apidata}
        addtocart={addtocart}
        cartitem={cartitem}
        setCartItem={setCartItem}
        uniqueCategories={uniqueCategories}
      />
    </div>
  );
};

export default Home;
