import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Srujan B D</span>{" "}
            from <span className="purple">Hassan, India</span>.
            <br />
            I'm currently pursuing a <span className="purple">B.E. in Computer Science</span>{" "}
            at <span className="purple">KVG College of Engineering, Sullia</span>.
            <br />I'm passionate about building web applications and exploring{" "}
            <span className="purple">AI technologies</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Web Applications
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring AI Tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Continuous Learning
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Srujan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
