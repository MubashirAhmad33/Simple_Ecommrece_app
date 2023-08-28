import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { NavLink, BrowserRouter as Router } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
// import { FaCartPlus } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ cartitem, Apidata, handleLogout, handleSearch }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const cartclickhandler = () => {
    navigate("/cart");
  };

  const logoHandler = () => {
    navigate("/");
  };
  const logouthandler = () => {
    handleLogout();
  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
    // Pass the search query to the parent component (App.js in this case)
  };
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="logo" onClick={logoHandler}>
          <h1>MubiStore</h1>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
        </div>
        <div className={isOpen ? "NavLinks active" : "NavLinks"}>
          <Link to="/" className="navlink">
            Home
          </Link>
          <Link to="/cart" className="navlink">
            Cart
          </Link>
          <Link to="/AddProduct" className="navlink">
            Add Product
          </Link>
          <div onClick={toggleMenu}>
            <FaTimes className="iconTime" />
          </div>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={input}
            onChange={handleInputChange}
            className="inputSearch"
          />
        </div>
        <div className="right">
          <div className="icons " onClick={cartclickhandler}>
            <ShoppingCartIcon />
            <span>{cartitem.length}</span>
          </div>
          <div className="Logout_container">
            <button onClick={logouthandler} className="btnlogout">
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
