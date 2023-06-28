import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import headshot from '../assets/headshot.png';

function Banner() {
  return (
    <section className="banner" id="home">
    <Container bg="light">
    <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} className="me-auto">
                <h1 className="mb-5 fw-bold"
                data-aos="zoom-in-right" data-aos-duration="900">
                  hi, i'm jaye!</h1>
                  <p
                data-aos="fade-up-right" data-aos-duration="1100">
                I'm an aspiring <span className="fw-bold highlight">product manager</span>.
                <br/><br/>
                With my <span className="fw-bold">technical experience</span> and <span className="fw-bold">eye for design</span>,
                  I am passionate about building digital products that make a difference.
                </p>
                
          </Col>
          <Col xs={12} md={6} xl={5}
          data-aos="fade-down" data-aos-duration="900">
            <div>
                <img src={headshot}/>
            </div>
          </Col>
        </Row>
    </Container>
    </section>
  );
}

export default Banner;