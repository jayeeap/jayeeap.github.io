import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    AOS.init();

    Papa.parse(workExpCSV, {
      header: true,
      skipEmptyLines: true,
      download: true,
      complete: function (results) {
        setWorkExpData(results.data);
        setExpData(results.data);
      },
    });    

    Papa.parse(leadershipExpCSV, {
      header: true,
      skipEmptyLines: true,
      download: true,
      complete: function (results) {
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
      <Row className="align-items-center sh-row"
      data-aos="fade-down-right" data-aos-duration="900" >
          <Col>
            <h1 className="section-header">experience</h1>
          </Col>
          <Col className="text-start">
              
        </Col>
      </Row>
      <Row className="mb-5"
      data-aos="fade-down-right" data-aos-duration="1000" >
        <ButtonGroup>
            <Button variant="light" onClick={() => setExpData(workExpData)}>work</Button>
            <Button variant="light" onClick={() => setExpData(leadershipExpData)}>leadership</Button>
        </ButtonGroup>      
      </Row>
      <Row className="shift-right">
        <Container>
        <ul className="timeline">
        {(expData).map(
                (exp) => (
                  <li className="timeline-item mb-5"
                  data-aos="fade-left" data-aos-duration="1100" data-aos-anchor-placement="center-bottom">
          <Container>
            <Row className="mb-2 text-start">
              <Col sm={12} md={8} className="pe-5">
                <h5 className="fw-bold">{exp.Position}</h5>
                <p className="mb-2">
                  <span className="fst-italic">{exp.Date}</span>
                </p>
                <p className="mb-2 fw-bold">
                  <a href={exp.CompanyURL} target="_blank">
                  {exp.Company}
                  </a>
                </p>
                <ul className="desc-text">
                  {exp.Description.slice(1, ).split("•").map((line) => (
                    <li>{line}</li> 
                  ))}
                </ul>
              </Col>
              <Col sm={12} md={4} className="border-start flex d-flex justify-content-center align-items-center">
                <img src={exp.CompanyLogo} className="logo"/> 
              </Col>
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