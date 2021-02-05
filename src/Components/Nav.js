import React from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Navbar,
    Nav,
} from 'react-bootstrap';
//css
import '../Css/Nav.css'

// NavBar
function 네비게이션바(){
    return(
      <div className="네비게이션">
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand href="/"><font color="white">Yang PortFolio</font></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/"><Button variant="dark">홈</Button></Link>
              <Link to="/portfolio"><Button variant="dark">포트폴리오</Button></Link>
              <Link to="/description"><Button variant="dark">자기소개</Button></Link>
              <a href="https://github.com/fila3894"><Button variant="success">GitHub</Button></a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
  
  export default 네비게이션바;
