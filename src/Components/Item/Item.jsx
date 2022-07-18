import React from "react";
import { Link } from "react-router-dom";
import './Item.css';

const Item = ({ product }) => {
  return (
    <section className="caja">
    <div className="card">
      <img src={product.img} className="card-img" alt={product.nombre} />
      <div className="card-body">
        <h5 className="card-title">{product.nombre}</h5>
        <p className="card-precio">
          $ <span>{product.precio}</span>
        </p>
        <p className="card-stock">
          Stock: <span>{product.stock}</span>
        </p>
        <div className="d-flex flex-row align-item-center justify-content-center">
          <Link to={`/detail/${product.id}`}>
            <button className="btn btn-dark">Ver Detalle</button>
          </Link>
        </div>
      </div>
    </div>
    </section>
    
    );
};

export default Item;
