import { React, useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import Papa from 'papaparse';
import workExpCSV from '../assets/data/work-exp.csv';
import leadershipExpCSV from '../assets/data/leadership-exp.csv';


function ExperienceSection() {

  useEffect(() => {

    Papa.parse(workExpCSV, {
      header: true,
      skipEmptyLines: true,
      download: true,
      complete: function (results) {
        console.log(results.data);
        setWorkExpData(results.data);
        setExpData(results.data);
      },
    });    

    Papa.parse(leadershipExpCSV, {
      header: true,
      skipEmptyLines: true,
      download: true,
      complete: function (results) {
        console.log(results.data);
        setLeadershipExpData(results.data);
      },
    });    

    // eslint-disable-next-line
  }, []);


  const [workExpData, setWorkExpData] = useState([]);
  const [leadershipExpData, setLeadershipExpData] = useState([]);
  const [expData, setExpData] = useState([]);

  return (
    <section id="experience">
    <Container bg="light">
      <Row className="align-items-center sh-row">
          <Col md={4} sm={4}>
            <h1 >experience</h1>
          </Col>
          <Col className="text-start">
          <ButtonGroup>
              <Button variant="dark" onClick={() => setExpData(workExpData)}>work</Button>
              <Button variant="dark" onClick={() => setExpData(leadershipExpData)}>leadership</Button>
          </ButtonGroup>          
        </Col>
      </Row>
      <Row className="shift-left">
        <Container>
        <ul className="timeline">
        {(expData).map(
                (exp) => (
                  <li className="timeline-item mb-5">
          <Container>
            <Row className="mb-2">
              <Col xs={12} sm={7}>
                <h5 className="fw-bold">{exp.Position.toLowerCase()}</h5>
                <p className="mb-2">
                  <span className="fst-italic">{exp.Date.toLowerCase()}</span>
                </p>
                <p className="mb-2 fw-bold">
                  <a href={exp.CompanyURL} target="_blank">
                  {exp.Company.toLowerCase()}
                  </a>
                </p>
              </Col>
              <Col xs={12} sm={5} className="border-start flex d-flex justify-content-center align-items-center">
                <img src={exp.CompanyLogo} className="logo"/> 
              </Col>
            </Row>
            <Row className="text-start">
              <ul>
                {exp.Description.slice(1, ).split("•").map((line) => (
                  <li>{line.toLowerCase()}</li> 
                ))}
              </ul>
            </Row>
          </Container>
        </li>  
                )
              )}

     
      </ul>
        </Container>
      
      </Row>
    </Container>
    </section>
  );
}

export default ExperienceSection;