import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../App.css"
function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="w-100 px-3">
      <Navbar.Brand href="/">My Events</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavLink 
            to="/events/list" 
            className={({ isActive }) => 
              isActive ? "nav-link active text-light" : "nav-link text-light"
            }
          >
            My Events
          </NavLink>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
