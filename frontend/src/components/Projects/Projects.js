import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";
import Ecart from "../../Assets/Projects/AseblyAsisstent.png";
import Shop from "../../Assets/Projects/shop.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Ecart}
              title="Assembly Assistant"
              description="A graphical RISC-V circuit simulator for multiplying and dividing integers. A basic and an optimized version were created for both operations. The simulator has a corresponding visual graphical user interface. Each step of multiplication and division is clearly visible in the simulator."
              ghLink="https://github.com/popovicmarko/AssemblyAssistant.git"
              demoLink="https://bodln.github.io/MS-Projekat-3/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Shop}
              title="Online Shop"
              description="In short, the project for selling miscellaneous goods consists of a front-end part that allows users to view, search, buy and manage the user crust, providing them with an intuitive user experience and optimization for mobile devices."
              ghLink="https://github.com/popovicmarko/OnlineShoping.git"
              demoLink="https://onlineshoping.pages.dev/"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
