import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  console.log(params);
  const { id, brand, num } = useParams();

  return (
    <div>
      <h2>상품 카테고리 {id}</h2>
      <h2>상품 브랜드 {brand}</h2>
      <h2>상품 품번 {num}</h2>
    </div>
  );
};

export default ProductDetail;
