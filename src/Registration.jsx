import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Check if the user data is already stored in local storage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user with the same email already exists
    const existingUser = existingUsers.find((user) => user.email === email);
    if (existingUser) {
      setMessage("User with this email already exists.");
    } else {
      // Add the new user to the array and save it to local storage
      const newUser = { name, email, password };
      existingUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      setMessage("Registration successful. Please log in.");
      // Clear the form fields
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="from-control">
      <h2>Registration Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="from_action">
          <button type="submit">Register</button>
          <Link to="/" className="link">
            Go to Login
          </Link>
        </div>
      </form>
      {message && <p className="success">{message}</p>}
    </div>
  );
};

export default RegistrationForm;
