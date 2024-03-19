"use client";

import axios from "axios";
import React, { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await axios.post("/api/login/route", formData);

    // if (response.ok) {
    //   // The login was successful
    //   // You can redirect the user to another page here
    // } else {
    //   // The login failed
    //   // You can show an error message here
    // }
  };

  return (
    <form className="signup-container" onSubmit={submitHandler}>
      <h1>Login</h1>

      <div className="login-welcome">
        <h3>Welcome back to ECOMMERCE</h3>
        <p>The next gen business marketplace</p>
      </div>

      <label>
        Email
        <input
          type="email"
          required
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
          placeholder="Enter your password"
          value={formData.password}
          onChange={changeHandler}
        />
      </label>

      <button>CREATE ACCOUNT</button>
      <span>
        <hr />
      </span>
      <div className="login-option signup-option">
        <span>
          Don&apos;t have an account? <strong>SIGN UP</strong>
        </span>
      </div>
    </form>
  );
}
