import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import "./CartProduct.css";

const CartProduct = ({ product }) => {
  const { deleteCartProduct } = useContext(cartContext);
  return (
    <div className="product">
      <div>
        <img src={product.img} width="70px" alt={product.nombre} />
      </div>
      <p className="product-text">
        <label className="product-label">Producto: </label>
        {product.nombre}
      </p>
      <p className="product-text">
        <label className="product-label">Cantidad:</label>
        {product.cantidad}
      </p>
      <p className="product-text">
        <label className="product-label">Precio: $</label>
        {product.precio}
      </p>
      <p className="product-text">
        <button
          onClick={() => deleteCartProduct(product.id)}
          className="btnX btn-dark"
        >
          X
        </button>
      </p>
    </div>
  );
};

export default CartProduct;
