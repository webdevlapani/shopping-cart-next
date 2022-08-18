import React from "react";
import SubHeader from "../components/SubHeader";

import CartModule from "../modules/cart";

const Cart = () => {
  return (
    <>
      <SubHeader pagename="Cart" />
      <CartModule />
    </>
  );
};

export default Cart;
