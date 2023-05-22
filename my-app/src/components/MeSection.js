import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import aboutMe from '../assets/about-me.png';

function MeSection() {
  return (
    <section id="me">
    <Container bg="light">
      <Row className="align-items-center">
          <Col className="me-auto">
          <h1 className="text-center">about me</h1>

          </Col>
      </Row>   
      <Row>
        <Col xs={12} md={5} xl={5}>
            <div>
                <img src={aboutMe}/>
            </div>
          </Col>
        <Col xs={12} md={7} xl={7} className="me-auto">
              <p>
                growing up, i wrote a lot of stories about characters with magic powers or really cool combat skills. 
                i was constantly amazed by the human capacity to 1) create things and 2) change the world.
              </p>
              <p>
                today, technology has made both of these more powerful than ever, and <span className="fw-bold highlight">i'm eager to make the most of it, one product at a time</span>.
              </p>
              <p>
                beyond tech, i've had the privilege of working with different teams on causes i find meaningful, whether it's environmental or social responsibility, or connecting others to opportunities for personal or career growth. 
                i am currently volunteering online to teach kids how to read.
              </p>
              <p>
                outside of work and studies, you can find me reading, journaling, painting, or out in nature.
              </p>
        </Col>
      </Row>       
    </Container>
    </section>
  );
}

export default MeSection;