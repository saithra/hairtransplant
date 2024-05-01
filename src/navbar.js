import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./img/logo.png"
import "./nav.css"
import "./mediaquery.css"

function Navbarnav() {
  return (
    <Navbar className="bg-body-secondary p-0 " id="navbar-container">
      <Container>
        <Navbar.Brand href="/" style={{marginTop:"-18px"}}><img src={logo} height={60} width={200} alt='' class="logo-img"/></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
         <button type="button" class="btn btn-secondary" id="button-1">I want to know the cost</button>
          </Navbar.Text>
          <Navbar.Text>
            
          <i class="fa-brands fa-whatsapp" id="nav-whatsapp"></i>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarnav;