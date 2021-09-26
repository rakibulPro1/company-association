import React from "react";
import "./Company.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";

const Company = (props) => {
  const { name, website, image, type, industry, star, deposit } = props.company;
  const cartIcon = (
    <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faShoppingCart} />
  );
  return (
    <div>
      <div className="company">
        <img src={image} alt="" height="100px" />
        <div className="company-body">
          <h4 className="company-title">Company: {name}</h4>
          <p>Website: {website}</p>
          <p>Type: {type}</p>
          <p>Industry: {industry}</p>
          <p>Deposit: ${deposit}</p>
          <div className="company-bottom">
            <button
              onClick={() => props.handleCartBtn(props.company)}
              className="btn"
            >
              {cartIcon} Add to cart
            </button>
            <Rating
              initialRating={star}
              readonly
              fullSymbol="fas fa-star icon-star"
              emptySymbol="far fa-star icon-star"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
