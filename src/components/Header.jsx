import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import "./Header.css";

function Header() {
    return (
        <Navbar expand="lg" className=" header-style">
            <Container>
                <Navbar.Brand><b>PORTFOLIO</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as = {Link} to={'/'}>Home</Nav.Link>
                        <Nav.Link as = {Link} to={'/about'}>About</Nav.Link>
                        <Nav.Link as = {Link} to={'/projects'}>Projects</Nav.Link>
                        <Nav.Link as = {Link} to={'/contactme'}>Contact Me</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;