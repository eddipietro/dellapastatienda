import React, { useContext, useState } from "react";
import "./ItemDetail.css";
import { cartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import espaguetis from '../../assets/img/espaguetis.gif'

const ItemDetail = ({ product }) => {
  const [prodAdded, setProdAdded] = useState(false);
  const { addCartProduct } = useContext(cartContext);

  const onAdd = (amount) => {
    addCartProduct({ ...product, cantidad: amount });
    setProdAdded(true);
  };

  return (
    <div className="detail">
      <div>
        <img src={product.img} className="detail-img" alt={product.nombre} />
      </div>
      <div className="detail-product">
        <h5 className="card-title">{product.nombre}</h5>
        <p className="card-text">{product.descripcion}</p>
        <p className="card-precio">
          $ <span>{product.precio}</span>
        </p>
        <p className="card-stock">
          Stock: <span>{product.stock}</span>
        </p>
        <div>
          {prodAdded ? (
            <img src={espaguetis} className="gif" />,
            <Link to="/cart">
              <button className="btn btn-dark">Ver Carrito</button>
            </Link>
          ) : (
            <ItemCount stock={product.stock} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
