import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  
  SiVercel,

  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h2>VS Code</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h2>Postman</h2>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <h2>GitHub</h2>
      </Col>
    </Row>
  );
}

export default Toolstack;
