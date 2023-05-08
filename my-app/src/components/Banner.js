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
                <h1>hi, i'm jaye yap!</h1>
                <p>i'm an aspiring <span className="fw-bold highlight">product manager</span>.</p>
                <p>with my <span className="fw-bold">technical experience</span> and <span className="fw-bold">passion for design</span>,
                  i am highly interested in building digital products that make a difference.
                </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
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