import React from "react";
import { useNavigate } from "react-router";


const ProductCard = ({ item }) => {
  const navigate = useNavigate()
  const showDetail = () => {
    navigate(`/product/${item?.id}`)
  };
  return (
    <div className="productcard" onClick={showDetail}>
      <img src={item?.img} alt="item1" />
      <div>Conscious Choice</div>
      <div>{item?.title}</div>
      <div>￦ {item?.price} </div>
      <div>{item?.new === true ? "신상품" : "세일상품"}</div>
    </div>
  );
};

export default ProductCard;
