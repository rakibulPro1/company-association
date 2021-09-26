import React, { useState } from "react";
import Cart from "../Cart/Cart";
import Company from "../Company/Company";
import "./Companies.css";

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [cart, setCart] = useState([]);
  useState(() => {
    fetch("./companies.JSON")
      .then((res) => res.json())
      .then((data) => setCompanies(data));
  }, []);

  const handleCartBtn = (company) => {
    setCart([...cart, company]);
    console.log(company);
  };

  return (
    <div className="main">
      <div className="comapanies-container">
        <div className="companies">
          {companies.map((company) => (
            <Company
              key={company.key}
              company={company}
              handleCartBtn={handleCartBtn}
            ></Company>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Companies;
