import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Nihon Let's Go
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>
              Learn
            </Nav.Link>
            <Nav.Link as={NavLink} to="/progress">
              Progress
            </Nav.Link>
            <Nav.Link as={NavLink} to="/settings">
              Settings
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
