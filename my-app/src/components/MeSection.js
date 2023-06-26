import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import aboutMe from '../assets/about-me.png';

function MeSection() {
  return (
    <section id="me">
    <Container bg="light">
      <Row className="align-items-center"
      data-aos="fade-down" data-aos-duration="900">
          <Col className="me-auto mb-3">
          <h1 className="section-header text-center">about me</h1>

          </Col>
      </Row>   
      <Row>
        <Col xs={12} md={5} xl={5}
        data-aos="fade-right" data-aos-duration="1100">
            <div>
                <img src={aboutMe}/>
            </div>
          </Col>
        <Col xs={12} md={7} xl={7} className="me-auto desc-text"
        data-aos="fade-up-left" data-aos-duration="1100">
              <p>
                Growing up, I wrote a lot of stories about characters with magic powers or really cool combat skills. 
                I was constantly amazed by the human capacity to 1) create things and 2) change the world.
              </p>
              <p>
                Today, technology has made both of these more powerful than ever, and I'm eager to make the most of it, one product at a time.
              </p>
              <p>
                Beyond tech, I've had the privilege of working with different teams on causes I find meaningful, whether it's environmental or social responsibility, or connecting others to opportunities for personal or career growth. 
                I am currently volunteering online to teach kids how to read.
              </p>
              <p>
                Outside of work and studies, you can find me reading, journaling, painting, or out in nature.
              </p>
        </Col>
      </Row>       
    </Container>
    </section>
  );
}

export default MeSection;