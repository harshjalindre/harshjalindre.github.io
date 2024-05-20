import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
import Analytics from "../../Assets/Projects/Spero/Analytics.png";
import Animal from "../../Assets/Projects/Spero/Animal.png";
import HHC from "../../Assets/Projects/Spero/HHC.png";
import IRTS from "../../Assets/Projects/Spero/IRTS.png";
import Spero from "../../Assets/Projects/Spero/Spero.png";

import Placement from "../../Assets/Projects/Techleaper/Placement.png";
import StudioRupantar from "../../Assets/Projects/Techleaper/StudioRupantar.png";
import Scholarship from "../../Assets/Projects/Techleaper/Scholarship.png";
import SmartVaidya from "../../Assets/Projects/Techleaper/SmartVaidya.png";
import SmartVidya from "../../Assets/Projects/Techleaper/SmartVidya.png";
import Techleaper from "../../Assets/Projects/Techleaper/Techleaper.png";


function Projects() {

  const proj = [
    {
      imgPath     : SmartVidya,
      title       : 'Smart Vidya',
      company     : 'TechLeaper Systems',
      description : 'Online School ERP System build using Javascript, Bootstrap and Codeigniter. Having modules like Online Adminssion, Online Course, Student Management, Fees Management',
      link        : 'https://www.smartvidyasoft.in/'
    },

    {
      imgPath     : Placement,
      title       : 'Job Placement Portal',
      company     : 'TechLeaper Systems',
      description : 'Online Job Placement Portal build using React js, Bootstrap and Codeigniter. Where students and apply jobs with given criteria',
      link        : ''
    },

    {
      imgPath     : IRTS,
      title       : '108 App / Ambulance Booking System',
      company     : 'Spero Innovation Healthcare',
      description : 'Ambulance Booking System build using React js, Bootstrap and Codeigniter. For patient to book ambulance services online. Project developed state government like Maharashtra, Madhya Pradesh, Jammu & Kashmir',
      link        : ''
    },

    {
      imgPath     : Analytics,
      title       : '108 App Analytics',
      company     : 'Spero Innovation Healthcare',
      description : 'Analytics for Ambulance booking app (108 App) using Javascript, Bootstrap and Codeigniter. Online Adminssion, Online Course, Student Management, Fees Management',
      link        : ''
    },

    {
      imgPath     : Scholarship,
      title       : 'Scholarships for all',
      company     : 'TechLeaper Systems',
      description : 'Online Job Placement Portal build using React js, Bootstrap and Codeigniter. Where students and apply scholarships with given criteria',
      link        : 'https://www.scholarshipforall.org/'
    },

    {
      imgPath     : Animal,
      title       : 'Animal Husbundary',
      company     : 'Spero Innovation Healthcare',
      description : 'Animal Husbandary App using Javascript, Bootstrap and Codeigniter. Animal Healthcare app for all the farmers to book appointment for their animals',
      link        : ''
    },

    {
      imgPath     : Techleaper,
      title       : 'TechLeaper System Website',
      company     : 'TechLeaper Systems',
      description : 'IT Company website build using Javascript, CSS and HTML.',
      link        : 'https://techleaper.com/'
    },

    {
      imgPath     : SmartVaidya,
      title       : 'Smart Vaidya',
      company     : 'TechLeaper Systems',
      description : 'Hospital Management System build using Javascript, Bootstrap and Codeigniter. Hospital Management app for ayurvedic clinics where you can book appointment, get prescription, pay bill',
      link        : 'https://smartvaidya.in/'
    },

    {
      imgPath     : HHC,
      title       : 'Home Healthcare Application',
      company     : 'Spero Innovation Healthcare',
      description : 'Healthcare Application build using React js, Bootstrap and Codeigniter.Hospital Management app for spero where you can book appointment, get prescription, pay bill',
      link        : ''
    },

    {
      imgPath     : Spero,
      title       : 'Spero Healthcare Website',
      company     : 'Spero Innovation Healthcare',
      description : 'Spero Website build using Javascript, Bootstrap and HTML.',
      link        : 'https://www.sperohealthcare.in/'
    },

    {
      imgPath     : HHC,
      title       : 'Home Healthcare Mobile Application',
      company     : 'Spero Innovation Healthcare',
      description : 'Healthcare Application build using Flutter, Bootstrap and Codeigniter. Hospital Management app for spero where you can book appointment, get prescription, pay bill',
      link        : ''
    },

    {
      imgPath     : StudioRupantar,
      title       : 'Studio Rupantar',
      company     : 'TechLeaper Systems',
      description : 'Studio Rupantar Website build using Javascript, CSS and HTML.',
      link        : 'https://techleaper.com/StudioRupantarLatest/'
    },

    
    

  ]

  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {proj.map((projects,index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={projects.imgPath}
                title={projects.title}
                description={projects.description}
                company={projects.company}
                // {...(projects.link && { link: projects.link })}
                link={projects.link}
              />
            </Col>
          ))}
        </Row>

      </Container>
    </Container>
  );
}

export default Projects;
