import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Blogs() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={8} style={{ paddingTop: "50px", paddingBottom: "50px" }}>
            <h1 className="project-heading">
              <strong className="purple">Blogs</strong> Coming Soon
            </h1>
            <p style={{ color: "white", fontSize: "18px", textAlign: "center" }}>
              I'm working on sharing my insights and experiences through technical blogs.
              <br />
              <br />
              Stay tuned for interesting articles and tutorials!
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
