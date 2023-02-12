import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaSnapchatGhost,
} from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

const SocialMediaNav = () => {
  return (
    <Container fluid className="bg-light py-3">
      <Row className="justify-content-center">
        <Col xs="auto">
          <a href="https://www.facebook.com/profile.php?id=100063795795537">
            <FaFacebookF size={15} />
          </a>
        </Col>
        <Col xs="auto">
          <a href="https://www.instagram.com/invites/contact/?i=1pajci2mu75a2&utm_content=qov1hzr">
            <FaInstagram size={15} />
          </a>
        </Col>
        <Col xs="auto">
          <a href="tiktok.com/@ijeleherbalmixture">
            <FaTiktok size={15} />
          </a>
        </Col>
        <Col xs="auto">
          <a href="https://www.snapchat.com/add/ijeleherbal?share_id=4CtQn2-FwlQ&locale=en-GB">
            <FaSnapchatGhost size={15} />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default SocialMediaNav;
