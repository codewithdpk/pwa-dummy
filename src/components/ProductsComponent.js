import React from "react";
import "../App.css";
import { Row, Col } from "react-bootstrap";

const ProductComponent = () => {
  return (
    <div style={{ paddingTop: "100px", paddingLeft: "30px" }}>
      <Row>
        <Col lg={12}>
          <h2 className="page-heading">Products</h2>
          <p className="page-sub-heading">Total Products</p>
        </Col>
      </Row>
    </div>
  );
};

export default ProductComponent;
