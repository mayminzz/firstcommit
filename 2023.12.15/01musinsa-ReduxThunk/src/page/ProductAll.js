import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { productAction } from "../redux/actions/ProductAction";

const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  const dispatch = useDispatch();
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    dispatch(productAction.getProduct(searchQuery));
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  // getProduct라는 함수는 쿼리값이 변경할때마다 계속 바뀌어지게끔
  return (
    <Container>
      <Row>
        {productList.map((menu, index) => (
          <Col lg={3} key={index}>
            <ProductCard item={menu} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
