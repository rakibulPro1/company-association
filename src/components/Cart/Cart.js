import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  for (const company of cart) {
    total = total + company.deposit;
  }
  return (
    <div className="cart">
      <h2 className="cart-header">Cart Checkout</h2>
      <hr />
      <div>
        <h3>Company Added: {cart.length}</h3>
        <h3>Total Deposit: {total}</h3>
      </div>
    </div>
  );
};

export default Cart;
