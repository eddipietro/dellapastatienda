import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProds } from "../../mocks/fakeApi";
import ItemList from "../ItemList/ItemList.jsx";
import espaguetis from '../../assets/img/espaguetis.gif'
import "./ItemListContainer.css";

const ItemListContainer = ({ mensaje }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    getProds(categoryId)
      .then((res) => {
        setProductList(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <>
      <h2>{mensaje} </h2>
      {loading ? (
        <img src={espaguetis} className="gif" />
      ) : (
        <>
          <ItemList productList={productList} />
        </>
      )}
    </>
  );
};

export default ItemListContainer;
