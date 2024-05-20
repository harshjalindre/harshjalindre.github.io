import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorkExperienceCards from "./WorkExperienceCards";
// import Particle from "../Particle";

import techleaper from "../../Assets/Companies/techleaper.png";
import spero from "../../Assets/Companies/spero.png";
import cw from "../../Assets/Companies/cw.png";


function WorkExperience() {

  const proj = [
    {
      imgPath     : techleaper,
      title       : 'TechLeaper Systems Pvt. Ltd.',
      role        : 'Senior Software Developer',
      start       : 'Dec 2022',
      end         : 'April 2024',
      languages   : 'Codeigniter, React, Laravel, PHP, Javascript, MySQL, MSSQL',
      link        : 'https://techleaper.com/'
    },
    {
      imgPath     : spero,
      title       : 'Spero Innovation Healthcare Pvt. Ltd.',
      role        : 'Software Developer',
      start       : 'Nov 2021',
      end         : 'Dec 2022',
      languages   : 'Codeigniter, React, PHP, Angular, Javascript, MySQL, PGSQL',
      link        : 'https://www.sperohealthcare.in/'
    },

    {
      imgPath     : cw,
      title       : 'Coder Word',
      role        : 'Software Developer (Intern)',
      start       : 'June 2021',
      end         : 'Oct 2021',
      languages   : 'Codeigniter, PHP, Angular, Javascript, MySQL, PGSQL',
      link        : 'https://coderword.com/'
    },
    
  ]
  // console.log(proj)

  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are all the companies which I've worked for.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {proj.map((projects, index) => (
            <Col md={6} className="project-card" key={index}>
              <WorkExperienceCards
                imgPath={projects.imgPath}
                title={projects.title}
                role={projects.role}
                start={projects.start}
                end={projects.end}
                languages={projects.languages}
                link={projects.link}
              />
            </Col>
          ))}
        </Row>

      </Container>
    </Container>
  );
}

export default WorkExperience;
