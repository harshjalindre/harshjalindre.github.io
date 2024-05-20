import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { Col, Row } from "react-bootstrap";

function WorkExperienceCards(props) {
  console.log(props)
  return (
    <Card className="project-card-view">
      
      <Card.Body>
        <Row>
            <Col sm={5} style={{margin:"0 auto"}}>
          <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        </Col>
        </Row>

        <Row>
            <Col sm={11} style={{margin:"0 auto"}}>
              <Card.Title style={{fontSize:"30px"}}>{props.title}</Card.Title>
              
              <Card.Text style={{fontSize:"20px"}}>
               <b>{`${props.role}`}</b> 
              </Card.Text>
              <Card.Text>
                <b>Duration:</b> {` ${props.start} - ${props.end}`} 
              </Card.Text>

              <Card.Text>
                <b>Languages Used:</b> {` ${props.languages}`} 
              </Card.Text>

              
              
              
              {"\n"}
              {"\n"}

              {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

              {props.link && (
                <Button
                  variant="primary"
                  href={props.link}
                  target="_blank"
                  style={{ marginLeft: "10px" }}
                >
                  <CgWebsite /> &nbsp;
                  {"URL"}
                </Button>
              )}
            </Col>
        </Row>
        
      </Card.Body>
    </Card>
  );
}
export default WorkExperienceCards;
