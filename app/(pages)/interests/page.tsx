"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

export default function Interests() {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const newCategories: any = Array.from({ length: 100 }, () =>
      faker.commerce.department()
    );
    setCategories(newCategories);
  }, []);

  useEffect(() => {

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const visibleCategories = categories.slice(start, end);
    setCategories(visibleCategories);
  }, [currentPage]);

  const totalPages = Math.ceil(categories.length / itemsPerPage);

  return (
    <div className="signup-container">
      <h1>Please mark your interests</h1>

      <div className="login-welcome">
        <p>We will keep you notified</p>
      </div>

      {categories.map((category, index) => (
        <div key={index} className="align-center">
          <input
            type="checkbox"
            id={`category-${index}`}
            name={`category-${index}`}
          />
          <label htmlFor={`category-${index}`}>{category}</label>
        </div>
      ))}

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
