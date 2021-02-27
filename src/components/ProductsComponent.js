import React, { useEffect, useState } from "react";
import "../App.css";
import { Row, Col } from "react-bootstrap";

const ProductComponent = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    // Gettting products data from dummy api
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        //setProducts(json);
        console.log(json);
        const n = 3;
        const result = new Array(Math.ceil(json.length / n))
          .fill()
          .map((_) => json.splice(0, n));
        setProducts(result);
        //console.log(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);
  return (
    <div style={{ paddingTop: "100px", paddingLeft: "30px" }}>
      <Row>
        <Col lg={12}>
          <h2 className="page-heading">Products</h2>
          <p className="page-sub-heading">Total Products</p>
        </Col>
      </Row>

      {Products.map((row) => {
        return (
          <Row>
            {row.map((product) => {
              return (
                <Col lg={4}>
                  <div className="product-card"></div>
                </Col>
              );
            })}
          </Row>
        );
      })}
    </div>
  );
};

export default ProductComponent;
