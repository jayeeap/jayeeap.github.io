import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MeSection() {
  return (
    <section className="banner" id="home">
    <Container bg="light">
      <Row className="align-items-center">
          <Col className="me-auto">
          <h1 className="sh-right">me (wip!)</h1>

          </Col>
      </Row>   
      <Row>
        <Col xs={12} md={4} xl={4}>
            <div>
                {/* <img src={headshot}/> */}
            </div>
          </Col>
        <Col xs={12} md={8} xl={8} className="me-auto">
              <p>
                throughout my teenage years, i made art and wrote stories about strong female characters with magic powers or really cool combat skills. 
                i was constantly amazed by the potential of humans to change the world.
              </p>
              <p>
                i'm a bit older now, but a still a believer. 
                technology has widened the horizons for impact, and i'm an avid explorer.
              </p>
              <p>
                aside from that, i'm passionate about social impact, and am currently volunteering online to teach kids how to read.
              </p>
              <p>
                outside of work and studies, you can find me reading, journaling, painting, or perhaps out in nature.
              </p>
        </Col>
      </Row>       
    </Container>
    </section>
  );
}

export default MeSection;