import React, { useEffect, useState } from "react";
import "../App.css";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

const ProductComponent = () => {
  const [Products, setProducts] = useState([]);
  const [DeviceType, setDeviceType] = useState("md");

  const queries = {
    xs: "(max-width: 320px)", // query for xs devices
    sm: "(max-width: 720px)", // query for sm devices
    md: "(max-width: 1024px)", // query for md devices
  };
  useEffect(() => {
    // Gettting products data from dummy api
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        //setProducts(json);
        //console.log(json);

        // Getting device type
        if (window.innerWidth <= 760) {
          setDeviceType("xs");
          const n = 2;
          const result = new Array(Math.ceil(json.length / n))
            .fill()
            .map((_) => json.splice(0, n));
          setProducts(result);
        } else {
          setDeviceType("md");
          const n = 3;
          const result = new Array(Math.ceil(json.length / n))
            .fill()
            .map((_) => json.splice(0, n));
          setProducts(result);
        }

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
                <Col lg={4} sm={6} xs={6}>
                  <div className="product-card">
                    <img
                      className="product-card-image"
                      alt={product.name}
                      src={product.image}
                    />
                    <div className="details-container">
                      <span className="product-name">{product.title}</span>
                      <p className="product-description">
                        {product.description}
                      </p>
                      <Row>
                        <Col lg={6} sm={6} xs={6}>
                          <span className="product-price">
                            $ {product.price}
                          </span>
                          <span className="product-description">
                            <strike>
                              ${" "}
                              {(
                                (product.price * 10) / 100 +
                                product.price
                              ).toFixed(2)}
                            </strike>
                          </span>
                        </Col>
                        <Col lg={6} sm={6} xs={6}>
                          <Button variant="primary" className="add-to-cart-btn">
                            <img
                              className="cart-icon"
                              alt="add to cart"
                              src="/cart-logo.svg"
                            />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </div>
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
