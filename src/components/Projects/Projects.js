import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Real-Time Smart IoT-Enabled Machine Learning Framework for Early Cardiovascular Risk Prediction and Detection"
              description="A comprehensive IoT-enabled machine learning framework designed to predict and detect early signs of cardiovascular diseases in real-time. The system integrates IoT sensors for vital sign monitoring, processes data using advanced ML algorithms, and provides real-time risk assessment for preventive healthcare."
              ghLink="https://github.com/srujanbd"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Environmental Hazard Prediction"
              description="A machine learning-based system that predicts environmental hazards using data analysis and predictive modeling. The project focuses on analyzing environmental factors and patterns to forecast potential hazards, enabling proactive measures for environmental safety and sustainability."
              ghLink="https://github.com/srujanbd"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
