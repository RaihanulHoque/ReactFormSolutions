import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom'

export default function MainNav() {
  return (
    
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to='/' className='nav-link'>Home</NavLink>
            {/* <NavLink to='about' className='nav-link'>About</NavLink> */}

            <NavDropdown title="About" id="navbarScrollingDropdown">
              <NavLink to="about" className='nav-link dropdown-item'>About Us</NavLink>
              <NavLink to="about/carrier" className='nav-link dropdown-item'>
                Carrier
              </NavLink>
              <NavDropdown.Divider />
              <Navbar href="#action5" className='nav-link'>
                Something else
              </Navbar>
            </NavDropdown>
{/* 
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}

            <NavLink to='form-solutions' className='nav-link'>Form Solutions</NavLink>
            <NavLink to='contact' className='nav-link'>Contact</NavLink>
            
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
