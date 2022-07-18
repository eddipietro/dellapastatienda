import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProd } from "../../mocks/fakeApi";
import ItemDetail from "../ItemDetail/ItemDetail";
import espaguetis from '../../assets/img/espaguetis.gif'
import '../ItemDetailContainer/itemDetailContainer.css'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getProd(id)
      .then((res) => {
        setProduct(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <img src={espaguetis} className="gif" />
      ) : (
        <>
          <div className="container">
            <ItemDetail product={product} />
          </div>
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;
