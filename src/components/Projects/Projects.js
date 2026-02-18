import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cardio from "../../Assets/Projects/cardio.jpg";
import environ from "../../Assets/Projects/environ.jpg";

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
              imgPath={cardio}
              isBlog={false}
              title="Real-Time Smart IoT-Enabled Machine Learning Framework for Early Cardiovascular Risk Prediction and Detection"
              description="A comprehensive IoT-enabled machine learning framework designed to predict and detect early signs of cardiovascular diseases in real-time. The system integrates IoT sensors for vital sign monitoring, processes data using advanced ML algorithms, and provides real-time risk assessment for preventive healthcare."
              ghLink="https://github.com/srujanbd"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={environ}
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
