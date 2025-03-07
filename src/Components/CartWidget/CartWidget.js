import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => {
  const { qtyProducts } = useContext(cartContext);

  return (
    <div className="cart">
      <Link to="/cart">
        <img src="carrito.png" alt="Icono Carrito" className="cart-imagen" />
      </Link>
      {qtyProducts > 0 && <p className="cart-cantidad">{qtyProducts}</p>}
    </div>
  );
};

export default CartWidget;
