import React from "react";
import { Link } from "react-router-dom";
import './Item.css';

const Item = ({ product }) => {
  return (
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
        <div>
          {product.stock === 0 ? (
            <div>
              <p className="card-sinstock">Producto sin Stock</p>
            </div>
          ) : (
            <div className="d-grid gap-2">
              <Link to={`/detail/${product.id}`}>
                <button className="btn btn-10">Ver Detalle</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;