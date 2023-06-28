import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import scis from '../assets/experience/scis.png';
import Papa from 'papaparse';
import achievementsCSV from '../assets/data/achievements.csv';


function AchievementsSection() {

  useEffect(() => {

    Papa.parse(achievementsCSV, {
      header: true,
      skipEmptyLines: true,
      download: true,
      complete: function (results) {
        console.log(results.data);
        setAchievementsData(results.data);
      },
    });      

    // eslint-disable-next-line
  }, []);

  const [achievementsData, setAchievementsData] = useState([]);

  return (
    <section id="achievements">
    <Container bg="light">
      <Row className="align-items-center"
      data-aos="fade-down-left" data-aos-duration="900">
          <Col className="me-auto">
          <h1 className="display-1 sh-right">achievements</h1>
          </Col>
      </Row>
      <Row>
      {(achievementsData).map(
                (exp, idx) => (
                  <Container className={idx % 2 == 0 ? "entry shift-left" : "entry shift-right"}
                  data-aos="fade-right" data-aos-duration="1100">
                  <Row className="mb-2">
                    <Col sm={12} md={8} className="pe-5">
                      <h5 className="fw-bold">{exp.Position}</h5>
                      <p className="mb-2">
                        <span className="fst-italic">{exp.Date}</span>
                      </p>
                      <p className="mb-2 fw-bold">
                        {exp.Company}
                      </p>
                      <p className="desc-text">
                        {exp.Description}
                      </p>
                    </Col>
                    <Col sm={12} md={4} className="border-start flex d-flex justify-content-center align-items-center">
                      <img src={exp.CompanyLogo} className="logo"/> 
                    </Col>
                  </Row>
                </Container>
                )
              )}
      </Row>
    </Container>
    </section>
  );
}

export default AchievementsSection;