import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons';



function ContactSection() {
  return (
    <section id="contact">
    <Container bg="light" className="shift-left">
      <Row>
          <Col xs={12}>
            <p className="h1">
              contact
            </p>
          </Col>
      </Row>
      <Row>
      <Col xs={12} md={6} xl={5}>
            <div>
              <p>
                i'm always looking for new things to create or ideas to discuss.
                <br/><br/>
                feel free to reach out about opportunities, collaborations, or anything under the sun!

              </p>
            </div>
          </Col>
        <Col xs={12} md={6} xl={7} className="text-start">
        <Row className="mb-2">
              <a href="https://www.linkedin.com/in/jayebriannayap/" target="_blank">
              <Button className="rounded-5" variant="dark">
                <FontAwesomeIcon icon={faLinkedinIn} className="me-3"/>
                /jayebriannayap
              </Button>
              </a>
            </Row>
            <Row className="mb-2">
              <a href="https://t.me/jayeeap" target="_blank">
                <Button className="rounded-5" variant="dark">
                  <FontAwesomeIcon icon={faTelegram} className="me-3"/>
                  @jayeeap
                </Button>
              </a>
            </Row>
            <Row className="mb-2">
              <a href="mailto:jayebriannayap@gmail.com" target="_blank">
                <Button className="rounded-5" variant="dark">
                  <FontAwesomeIcon icon={faEnvelope} className="me-3"/>
                  jayebriannayap@gmail.com
                </Button>
              </a>  
            </Row>
        </Col>

        
      </Row>
    </Container>
    </section>
  );
}

export default ContactSection;