import React, { useState, useEffect } from "react";
import img from "./Components/cartempty.jpg";

const Cart = ({ cartitem, setCartItem }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate the total price of all items in the cart whenever 'cartitem' changes
    const totalPrice = cartitem.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
    setTotalPrice(totalPrice);
  }, [cartitem]);

  const removHandler = (itemremove) => {
    const removeitem = cartitem.filter((item) => item.id !== itemremove);
    setCartItem(removeitem);
  };

  const handleinc = (itemcart, index) => {
    const temp = [...cartitem];
    temp[index] = {
      ...temp[index],
      count: temp[index].count + 1,
    };
    setCartItem(temp);
  };

  const handledec = (itemcart, index) => {
    const temp = [...cartitem];
    temp[index] = {
      ...temp[index],
      count: temp[index].count > 1 ? temp[index].count - 1 : 1,
    };
    setCartItem(temp);
  };

  return (
    <div className="cart">
      {cartitem.length === 0 ? (
        <p className="Foundmsg">No item Found!</p>
      ) : (
        <>
          {cartitem.map((item, index) => (
            <div className="cart-wrapper" key={index}>
              <div className="cartimg">
                <img src={item.image} alt="" />
              </div>
              <div className="carttitle">
                <h1>{item.title}</h1>
              </div>
              <div className="cartPrice">
                <span>${(item.price * item.count).toFixed(2)}</span>
                {/* Display item total price */}
              </div>

              <div className="cartbtncontainer">
                <button onClick={() => handledec(item, index)}>-</button>

                <p>{item.count}</p>
                <button onClick={() => handleinc(item, index)}>+</button>
              </div>
              <button className="remove" onClick={() => removHandler(item.id)}>
                x
              </button>
            </div>
          ))}
          <div className="totalPrice">
            <p className="price">Total Price: ${totalPrice.toFixed(3)}</p>
            <button className="btnwash" onClick={() => setCartItem([])}>
              Wash All
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
