import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function calculateExperience(startDate, endDate) {
  // Convert start and end dates to JavaScript Date objects
  const startDateObj = new Date(startDate);
  const endDateObj = endDate ? new Date(endDate) : new Date(); // If end date is not provided, use current date

  // Calculate the difference in years and months
  let years = endDateObj.getFullYear() - startDateObj.getFullYear();
  let months = endDateObj.getMonth() - startDateObj.getMonth();

  // If the end month is before the start month, adjust the years and months
  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years} years and ${months} months`;
}

// Example usage:
const startDate = '2021-11-01'; // Start date
const experience = calculateExperience(startDate);
// console.log(experience)


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
              I am a Experienced <b className="purple"> Software Developer </b> 👨🏻‍💻 with {experience} of experience
              <br />
              <br />I am good at languages like
              <i>
                <b className="purple"> Javascript, React.js, HTML, CSS, Bootstrap, PHP and Codeigniter. </b>
              </i>
              <br />
              <br />
              I am interested building new  &nbsp;
              <i>
                <b className="purple">Responsive Websites ,Web Application and Softwares Applications </b>
                using technologies like{" "}
                <b className="purple">
                  React.js, Javascript, MySQL, PHP and Python.
                </b>
              </i>
              <br />
              <br />
              At my free time, I try to improve my skills of <b className="purple"> Languages</b> like <b className="purple">Node.js, Python, Laravel</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              {/* <li className="social-icons">
                <a
                  href="https://github.com/harshjalindre"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://twitter.com/hjalindre33"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://in.linkedin.com/in/harsh-jalindre-b96b1a217"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_harsh_64/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
