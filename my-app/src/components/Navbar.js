import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="sticky-top bg-white">
      <Container>
        <Navbar.Brand href="/">jaye yap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Link href="#projects">projects</Nav.Link>
            <Nav.Link href="#experience">experience</Nav.Link>
            <Nav.Link href="#achievements">achievements</Nav.Link>
            <Nav.Link href="#me">me</Nav.Link>
            <Nav.Link href="#contact">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;