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

function Footer (props) {
    const args = {
      color:"light",
      light:"true",
      expand:"md",
      container:"fluid",
      fixed:"bottom",
    }
  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">2023</NavbarBrand>
        {/* <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar> */}
          <NavbarText>Simple Text</NavbarText>
        {/* </Collapse> */}
      </Navbar>
    </div>
  );
 }

export default Footer;