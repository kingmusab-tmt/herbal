import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./Contact.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [whatsapp, setWhatsapp] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(
      `https://api.whatsapp.com/send?phone=+2347065591971&text=Hello my Name is ${name}%0AAnd my Email is ${email}%0A${message}`
    );
  };

  return (
    <Container>
      <h2 id="ContactUs" className="contact">
        Contact Us for Your Order
      </h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="message">
              <Form.Label>Message:</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="success" type="submit" className="submit">
          Send
        </Button>
      </Form>
    </Container>
  );
};

export default ContactUs;
