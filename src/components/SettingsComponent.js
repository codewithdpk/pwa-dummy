import React from "react";
import { Row, Col } from "react-bootstrap";
import "../App.css";

const SettingsComponent = () => {
  return (
    <div className="products-container">
      <Row>
        <Col lg={12}>
          <h2 className="page-heading">Settings</h2>
          <p className="page-sub-heading">Settings are being updated.</p>
        </Col>
      </Row>
    </div>
  );
};

export default SettingsComponent;
