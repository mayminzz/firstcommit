import React from "react";

import { Row, Col } from "react-bootstrap";

const ContactItem = ({ item }) => {

  return (
    <Row>
      <Col lg={2} className="contactItems">
        <img
          width={80}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/640px-Unknown_person.jpg"
          alt="person"
        />
      </Col>
      <Col lg={10}>
        <div>{item?.name}</div>
        <div>{item?.phoneNumber}</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
