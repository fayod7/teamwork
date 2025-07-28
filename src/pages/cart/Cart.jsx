import React from "react";
import Reusable from "../../components/reusable-hero/Reusable";
import Services from "../../components/customer-services/Services";
import CartContent from "../../components/Cart-content/CartContent";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Reusable title="Cart" link="Cart" />
      <CartContent />
      <div className="mt-[22px] mb-[8px]">
        <Services />
      </div>
    </>
  );
};

export default Cart;
