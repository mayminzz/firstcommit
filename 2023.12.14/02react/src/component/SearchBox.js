import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Form, Button } from "react-bootstrap";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [keyWord, setKeyWord] = useState();
  const changeKeyWord = (event) => {
    setKeyWord(event.target.value);
  };
  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyWord } });
  };
  return (
    <Form onSubmit={searchByName}>
      <Row className="searchBox">
        <Col>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={changeKeyWord}
          />
        </Col>
        <Col>
          <Button type="submit">검색</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
