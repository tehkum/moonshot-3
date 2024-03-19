"use client";

import { createRef } from "react";

export default function VerifyOTP() {
  const refs: any = Array(8)
    .fill(0)
    .map((_, i) => createRef());

  const handleOnChange = (e: any, i: any) => {
    if (e.target.value.length === 1) {
      if (i !== 7) {
        refs[i + 1].current.focus();
      }
    }
  };

  function handleKeyDown(e: any, i: any) {
    if (e.key === "Backspace" && e.target.value === "" && i !== 0) {
      refs[i - 1].current.focus();
    }
  }

  return (
    <form className="signup-container">
      <h1>Verify your email</h1>

      <div className="login-welcome">
        <p>Enter the 8 digit code you have recieved on</p>
        <p>
          <strong>swap***@gmail.com</strong>
        </p>
      </div>

      <div className="otp-input-container">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => (
          <input
            type="number"
            className="otp-input"
            id={`otp${item}`}
            maxLength={1}
            key={item}
            ref={refs[i]}
            onChange={(e) => {
              if (e.target.value.length > 1) {
                e.target.value = e.target.value.slice(0, 1);
              }
              handleOnChange(e, i);
            }}
            onKeyDown={(e) => handleKeyDown(e, i)}
          />
        ))}
      </div>

      <button style={{ marginBottom: "30px" }}>VERIFY</button>
    </form>
  );
}
