"use client";

import axios from "axios";
import React, { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await axios.post("/api/register", formData);

    if (response.ok) {
      // The signup was successful
      // You can redirect the user to another page here
      console.log("Success");
    } else {
      // The signup failed
      // You can show an error message here
      console.log("Failed");
    }
  };

  return (
    <form className="signup-container" onSubmit={submitHandler}>
      <h1>Create your account</h1>

      <label>
        Name
        <input
          type="text"
          required
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={changeHandler}
        />
      </label>

      <label>
        Email
        <input
          type="email"
          required
          name="email"
          placeholder="Enter your email"
          onChange={changeHandler}
          value={formData.email}
        />
      </label>

      <label>
        Password
        <input
          type="password"
          required
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={changeHandler}
        />
      </label>

      <button type="submit">CREATE ACCOUNT</button>

      <div className="login-option">
        <span>
          Having an account? <strong>LOGIN</strong>
        </span>
      </div>
    </form>
  );
}
