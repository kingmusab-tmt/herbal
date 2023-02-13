import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import "./Testimonial.css";

const Testimonial = ({ testimonials }) => {
  return (
    <Container className="my-5">
      <h2 className="text-center testh2">What Our Customers are Saying</h2>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Carousel controls={false} indicators={false} interval={5000}>
            {testimonials.map((testimonial) => (
              <Carousel.Item key={testimonial.id}>
                <Card>
                  <Card.Body>
                    <blockquote className="blockquote">
                      <p className="mb-0">{testimonial.quote}</p>
                      <footer className="blockquote-footer">
                        {testimonial.author}
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonial;
