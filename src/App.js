import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter,
} from "react-router-dom";
import "./App.css";

import { Row, Col } from "react-bootstrap";
import ProductComponent from "./components/ProductsComponent";
import OrdersComponent from "./components/OrdersComponent";
import SettingsComponent from "./components/SettingsComponent";

const App = (props) => {
  // Store all products
  //const [Products, setProducts] = useState([]);
  const [SelectedRoute, setSelectedRoute] = useState("/products");

  const menu = [
    { name: "Products", slug: "/products", logo: "/product-logo.svg" },
    { name: "Orders", slug: "/orders", logo: "/myorders-logo.svg" },
    { name: "Settings", slug: "/settings", logo: "/settings-logo.svg" },
  ];

  return (
    <Router>
      <Row style={{ height: "100%" }}>
        <Col lg={3} style={{ background: "#0C6EA5" }}>
          <Row
            style={{
              marginTop: "80px",
            }}
          >
            <Col lg={12}>
              <div style={{ marginLeft: "35px" }}>
                <img
                  alt="Cart logo"
                  src="/cart-logo.svg"
                  style={{ height: "50px", width: "50px" }}
                />{" "}
                <br />
                <br />
                <h3 style={{ color: "white", fontWeight: "600" }}> My Shop</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} style={{ padding: "0" }} className="col-lg-offset-3">
              <ul
                style={{
                  listStyleType: "none",
                  marginTop: "30px",
                  padding: "0",
                }}
              >
                {menu.map((item) => {
                  return (
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to={item.slug}
                    >
                      <li
                        className={
                          SelectedRoute === item.slug
                            ? "selected-item-li"
                            : "normal-item-li"
                        }
                        onClick={() => setSelectedRoute(item.slug)}
                      >
                        <img
                          alt={item.name}
                          src={item.logo}
                          className="menu-logos"
                        />

                        {item.name}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </Col>
          </Row>
        </Col>
        <Col lg={9} style={{ backgroundColor: "#F0F0F0" }}>
          <Switch>
            <Redirect exact to="/products" from="/" />
            <Route path="/products" component={withRouter(ProductComponent)} />
            <Route path="/orders" component={withRouter(OrdersComponent)} />
            <Route path="/settings" component={withRouter(SettingsComponent)} />
          </Switch>
        </Col>
      </Row>
    </Router>
  );
};

export default App;
