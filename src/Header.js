import React from "react";
import "./Header.css";
import { Carousel } from "react-bootstrap";
import Ulcer1 from "./img/ulcer3.jpg";
import Arthritis1 from "./img/Arthritis.jpg";
import constipation3 from "./img/constipation3.jpg";
import inflamation from "./img/inflamation.jpg";
import EDEMA from "./img/EDEMA2.jpg";
import Ulcer2 from "./img/ulcer5.jpg";
import Arthritis2 from "./img/ARTHRITIS3.jpg";
import constipation2 from "./img/constipation.jpg";
import inflamation2 from "./img/inflation.jpg";
import EDEMA2 from "./img/EDEMA3.jpg";
import heroimg from "./img/hero-img.png";

const Header = () => {
  return (
    <header>
      <div className="header container-fluid" id="Home">
        <Carousel fade className="edit">
          <Carousel.Item interval={1000}>
            <div className="img-gradient">
              <img
                className="d-block w-100 imgset"
                src={Ulcer1}
                alt="First slide"
              />
            </div>
            <Carousel.Caption>
              <h3>Cure for Ulcer</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className="img-gradient">
              <img
                className="d-block w-100 imgset"
                src={Arthritis1}
                alt="Second slide"
              />
            </div>

            <Carousel.Caption>
              <h3>Cure for Arthristis</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className="img-gradient">
              <img
                className="d-block w-100 imgset"
                src={constipation2}
                alt="Third slide"
              />
            </div>

            <Carousel.Caption>
              <h3>Cure for Constipation</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className="img-gradient">
              <img
                className="d-block w-100 imgset"
                src={inflamation}
                alt="Third slide"
              />
            </div>

            <Carousel.Caption>
              <h3>Cure for Inflamation</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className="img-gradient">
              <img
                className="d-block w-100 imgset"
                src={EDEMA}
                alt="Third slide"
              />
            </div>

            <Carousel.Caption>
              <h3>Cure for Edema</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className="img-gradient">
              <img
                className="d-block w-100 imgset"
                src={constipation3}
                alt="Third slide"
              />
            </div>

            <Carousel.Caption>
              <h3>Constipation</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className="img-gradient">
              <img
                className="d-block w-100 imgset"
                src={Ulcer2}
                alt="Third slide"
              />
            </div>

            <Carousel.Caption>
              <h3>Ulcer</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className="img-gradient">
              <img
                className="d-block w-100 imgset"
                src={EDEMA2}
                alt="Third slide"
              />
            </div>

            <Carousel.Caption>
              <h3>Edema</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className="img-gradient">
              <img
                className="d-block w-100 imgset"
                src={Arthritis2}
                alt="Third slide"
              />
            </div>

            <Carousel.Caption>
              <h3>Arthristis</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className="img-gradient">
              <img
                className="d-block w-100 imgset"
                src={inflamation2}
                alt="Third slide"
              />
            </div>

            <Carousel.Caption>
              <h3>Inflamation</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="hero-text">
          <h1>IJELE HERBAL MIXTURE</h1>
          <p>
            This Herbal Mixture is Used For Management of Constipation
            Arthritis, Edema, Ulcer , Stomach Pain, Mensural Pains ,
            Inflammation Of Muscle 💪 Etc.
          </p>
        </div>
      </div>
      <div className="herbal">
        <div className="hero-img wow fadeInUp" data-wow-delay=".15s">
          <img src={heroimg} alt="Ijele Herbal Mixture" className="img" />
        </div>
      </div>
    </header>
  );
};

export default Header;
