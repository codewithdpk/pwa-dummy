import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";

const App = () => {
  // Store all products
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
        console.log(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <Row>
      <Col lg={12}>
        {Products.map((product) => {
          return (
            <Row className="justify-content-lg-center">
              {product.map((item) => {
                return (
                  <Col lg={4} md={6} sm={6}>
                    <Card style={{ margin: "20px" }}>
                      <Card.Img
                        variant="top"
                        src={item.image}
                        style={{ height: "150px" }}
                      />
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text
                          style={{
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                          }}
                        >
                          {item.description}
                        </Card.Text>
                        <Button variant="primary">Add To Cart</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          );
        })}
      </Col>
    </Row>
  );
};

export default App;
