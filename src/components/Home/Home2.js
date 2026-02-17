import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Computer Science student passionate about web development and AI. I'm currently pursuing my B.E. at KVG College of Engineering, Sullia.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Java, JavaScript, HTML, and CSS{" "}
                </b>
              </i>
              — focusing on creating functional and responsive web applications.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications{" "}
                </b>
              </i>
              and exploring{" "}
              <i>
                <b className="purple">AI technologies</b>
              </i>
              {" "}to enhance user experiences.
              <br />
              <br />
              Whenever possible, I love building projects with modern frameworks to create meaningful digital solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
