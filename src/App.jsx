import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Product from "./Product";
import jsondata from "./Data";
import Navbar from "./Navbar";
import Home from "./Home";
import Cart from "./Cart";
import AddProduct from "./AddProduct";
import Login from "./Login";
import RegistrationForm from "./Registration";
// import UserProfile from "./UserProfile";

function App() {
  const [data, setData] = useState(jsondata);
  const [cartitem, setCartItem] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const uniqueCategories = [...new Set(data.map((item) => item.category))];
  const [user, setUser] = useState([]);
  console.log("App.js", user);
  function addtocart(cartitem) {
    setCartItem((previtem) => [...previtem, cartitem]);
  }

  // Check if the user is already logged in based on user data in local storage
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInUser = storedUsers.find((user) => user.isLoggedIn);
    console.log(storedUsers, "user initail");
    setUser(storedUsers);

    if (loggedInUser) {
      setIsLoggedIn(true);
    }
  }, []);

  // useEffect(() => {
  //   const userData = JSON.parse(localStorage.getItem("userprofile"));

  //   if (userData) {
  //     setUser(userData);
  //   }
  // }, []);

  const handleLogin = (loginData) => {
    // Check if the user exists in Local Storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === loginData.email && u.password === loginData.password
    );

    if (user) {
      // Simulate successful login
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      console.log(isLoggedIn);
      alert("Login successful!");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  const handleLogout = () => {
    // Simulate logout
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <div className="Container">
      <BrowserRouter>
        {isLoggedIn ? (
          <>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    Apidata={data}
                    addtocart={addtocart}
                    cartitem={cartitem}
                    setCartItem={setCartItem}
                    uniqueCategories={uniqueCategories}
                    handleLogout={handleLogout}
                  />
                }
              />
              {/* <Route
                path="/userprofile"
                element={<UserProfile user={user} />}
              /> */}
              <Route
                path="/cart"
                element={<Cart cartitem={cartitem} setCartItem={setCartItem} />}
              />
              <Route path="/AddProduct" element={<AddProduct user={user} />} />
            </Routes>
          </>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Login handleLogin={handleLogin} />} />
              <Route path="/register" element={<RegistrationForm />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
