import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import { GoHome } from 'react-icons/go';
import {MdLocalDrink} from "react-icons/md";
import {FiPhone} from "react-icons/fi";
import "./navbar.css"
import logo from "../../utils/imagenes/logo2.png"


export default function Navreact(){
return(
  <Navbar className='nav-container' bg="dark" expand="lg">

    <Container>
      
  <Navbar.Brand className='titulo-nav' href="/">
  <img className='logo-img' width="100px" src={logo} alt="" />
  
   <strong className='strong-text'>Delicamaron</strong> 
  
  </Navbar.Brand>
    </Container>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Container>
    <Nav className="mr-auto">
      <Nav.Link href="#home"><GoHome /> Home</Nav.Link>
      <Nav.Link href="#link"><MdLocalDrink/>  Bebidas</Nav.Link>
      <Nav.Link><FiPhone/> Contacto </Nav.Link>
    </Nav>
    </Container>
    
  </Navbar.Collapse>
</Navbar>
)
}