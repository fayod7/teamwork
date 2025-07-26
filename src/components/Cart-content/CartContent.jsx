import { NavLink } from "react-router-dom";
import { useLayoutEffect } from "react";
import { useCart } from "../../store/useCart";
import CartExist from "../CartExist/CartExist";
import CartEmpty from "../CartEmpty/CartEmpty";

const CartContent = () => {
  const { cart, remove } = useCart();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>{cart.length > 0 ? <CartExist /> : <CartEmpty />}</>;
};

export default CartContent;
