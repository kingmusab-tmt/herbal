import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import infobg from "./img/logo.png";
import "./About.css";

const About = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col md={6}>
          <Image className="log" src={infobg} fluid />
          <br />
          <h3>Ijele Herbal Mixture</h3>
        </Col>
        <Col md={6}>
          <div className="Jumbotron" id="About">
            <h1 className="display-6">About Us</h1>
            <p className="lead lead2 text-center weight">
              IYKE AND FRANK GLOBAL SERVICES LTD specialize on the production of
              working natural herbs 🌿🌿 to help build, strengthen and heal the
              body SPEEDILY
            </p>
          </div>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <div className="Jumbotron">
            <h1 className="display-6">Our Mission</h1>
            <p className="lead text-center weight">
              With the knowledge of how people, especially aged people suffer
              lots of sickness and pains IYKE AND FRANK GLOBAL SERVICES LTD
              decided to manufacturer IJELE HERBAL MIXTURE for an adequate
              eradication of joint pain, arteritis, menstrual pain, edema,
              ulcer, stomach pain, inflammation of muscle and lots more.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <div className="Jumbotron">
            <h1 className="display-6">Our Vision</h1>
            <p className="lead text-center weight">
              With IJELE HERBAL MIXTURE our vision is to see old and young
              people living comfortably strong & healthy.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
