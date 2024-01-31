import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiMaterialui,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h2>JavaScript</h2>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h2>NodeJS</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h2>ReactJS</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h2>MongoDB</h2>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h2>Git</h2>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui />
        <h2>Material UI</h2>
      </Col>
    </Row>
  );
}

export default Techstack;
