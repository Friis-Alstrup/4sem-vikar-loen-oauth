import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { ClockFill } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {

  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.clear()
    navigate("/")
  }

  return (
    <Navbar className="navbar-dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/overblik">
          <ClockFill /> PayWise
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/overblik">
              Overblik
            </Nav.Link>
            <Nav.Link as={Link} to="/vagter">
              Vagter
            </Nav.Link>
            <NavDropdown title="Min profil" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/løn-og-tillæg">Løn og tillæg</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/kalender-sync">Kalender sync</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => logout()}>Log ud</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
