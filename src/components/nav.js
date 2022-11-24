import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

function NavBar (props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    function clickHandler (event) {
        const id = event.target.id
        props.setPage(id)
    };
    const args = {
      color:"light",
      light:"true",
      expand:"md",
      container:"fluid"
    }
  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">James Jabar</NavbarBrand>
        {/* <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar> */}
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink onClick = {clickHandler} id = 'About' href="#">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick = {clickHandler} id = 'Contact' href="#" >Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick = {clickHandler} id = 'Portfolio' href="#" >Portfolio
              </NavLink>
            </NavItem>
          
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        {/* </Collapse> */}
      </Navbar>
    </div>
  );
 }

export default NavBar;