import React, { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "../App.css";

const ProductDetailsPage = ({ show, close, product }) => {
  //console.log(product);

  useEffect(() => {}, [product]);
  return (
    <Modal
      show={show}
      onHide={() => close(false)}
      style={{ margin: "0", height: "100%" }}
    >
      <div className="row" style={{ padding: "0" }}>
        <div className="col-xs-12 col-md-12">
          <div className="align-items-center" style={{ margin: "15px" }}>
            <img
              alt="back arrow"
              src="/nav_arrow_back.png"
              style={{ height: "15px", width: "15px" }}
              onClick={() => close(false)}
            />

            <span style={{ margin: "10px" }}>
              {" "}
              <b>{product.title}</b>
            </span>
          </div>
        </div>
        <div className="col-xs-12 col-md-12" style={{ height: "350px" }}>
          <img
            className="product-card-image-details"
            alt={product.description}
            src={product.image}
          />
        </div>
        <div className="col-xs-12 col-md-12" style={{ margin: "20px" }}>
          <span className="product-price" style={{ fontSize: "25px" }}>
            ${product.price}
          </span>
          <span className="product-description">
            <strike>
              $ {((product.price * 10) / 100 + product.price).toFixed(2)}
            </strike>
          </span>
        </div>
        <div
          className="col-xs-12 col-md-12"
          style={{ margin: "20px", paddingRight: "20px" }}
        >
          <span>Description</span>
          <br />
          <span style={{ fontSize: "14px", color: "gray" }}>
            {product.description}
          </span>
        </div>

        <div className="col-xs-12 col-md-12" style={{ margin: "20px" }}>
          <Button
            variant="primary"
            style={{ width: "90%" }}
            onClick={() => close(false)}
          >
            Add To Cart
            <img className="cart-icon" alt="add to cart" src="/cart-logo.svg" />
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductDetailsPage;
