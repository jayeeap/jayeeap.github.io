import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProjectsSection() {
  return (
    <section className="banner" id="home">
    <Container bg="light">
        <Row className="align-items-center">
            <Col className="me-auto">
            <h1>projects</h1>

            </Col>
        </Row>
    </Container>
    </section>
  );
}

export default ProjectsSection;