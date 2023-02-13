import React from "react";
import "./Footer.css";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTiktok,
  faInstagram,
  faSnapchatGhost,
} from "@fortawesome/free-brands-svg-icons";
import logo from "./img/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Navbar className="footer-navbar">
          <Navbar.Brand href="#home">
            <Image src={logo} alt="IJM" />
            <span>Ijere Herbal Mixture</span>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/#Home">Home</Nav.Link>
            <Nav.Link href="/#About">About</Nav.Link>
            <Nav.Link href="/#Product">Product</Nav.Link>
            <Nav.Link href="/#Faq">FAQ</Nav.Link>
            <Nav.Link href="/#ContactUs">Contact</Nav.Link>
          </Nav>
        </Navbar>
        <div className="footer-info">
          <p>
            PLOT CRESCENT/397 EASTER OBIAKOR AVENUE <br />
            GRA AGU AWKA, AWKA SOUTH L.G.A ANAMBRA STATE NIGERIA.
            <br />
            <br />4 AGBOR CLOSE AJAO ESTATE OFF OSOLO WAY, LAGOS STATE NIGERIA
            <br />
            +2348128993937, +2348166293177
          </p>
          <div className="footer-social-links">
            <a href="https://www.facebook.com/profile.php?id=100063795795537">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="tiktok.com/@ijeleherbalmixture">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a href="https://www.instagram.com/invites/contact/?i=1pajci2mu75a2&utm_content=qov1hzr">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.snapchat.com/add/ijeleherbal?share_id=4CtQn2-FwlQ&locale=en-GB">
              <FontAwesomeIcon icon={faSnapchatGhost} />
            </a>
          </div>
        </div>
        <p className="copyright">
          Copyright &copy; {new Date().getFullYear()} IYKE AND FRANK GLOBAL
          SERVICES LTD
        </p>
        <p className="designed-by">
          Designed by{" "}
          <a href="https://triplemultipurposetechnology.com">
            Triple Multipurpose Technology
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
