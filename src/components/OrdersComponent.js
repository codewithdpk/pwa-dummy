import React from "react";
import { Row, Col } from "react-bootstrap";
import "../App.css";

const OrdersComponent = () => {
  return (
    <div className="products-container">
      <Row>
        <Col lg={12}>
          <h2 className="page-heading">Orders</h2>
          <p className="page-sub-heading">No Oders yet.</p>
        </Col>
      </Row>
    </div>
  );
};

export default OrdersComponent;
