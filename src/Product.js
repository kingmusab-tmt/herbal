import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import product1 from "./product1.jpg";
import product2 from "./product2.jpg";
import product3 from "./product3.jpg";
import "./Product.css";
// import bgImage from "./bg-image.jpg";

const ProductSection = () => {
  return (
    <div className="container-fluid text-center" id="Product">
      <h2 className="product">Our Product</h2>
      <div className="set">
        <div className="cont">
          <img src={product1} alt="Product 1" />
        </div>
        <div className="cont">
          <img src={product2} alt="Product 2" />
        </div>
        <div className="cont">
          <img src={product3} alt="Product 3" />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;

// Note that the images used in this example (product1.jpg, product2.jpg, product3.jpg, and bg-image.jpg) should be imported and placed in your project's src folder.
