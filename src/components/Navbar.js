import React, { useState } from 'react';
import {Link} from 'react-scroll'
import brand from '../images/T-icon.png'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' dark bgColor='transparent'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'><img src={brand} width="40px"></img></MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>LinkedIn</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link'>
                  My Projects
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                <MDBDropdownItem link><li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li></MDBDropdownItem>
                  <MDBDropdownItem link><li><Link activeClass="active" to="burning-airlines" spy={true} smooth={true}>Burning Airlines</Link></li></MDBDropdownItem>
                  <MDBDropdownItem link><li><Link activeClass="active" to="brain-train" spy={true} smooth={true}>Brain Train</Link></li></MDBDropdownItem>
                  <MDBDropdownItem link><li><Link activeClass="active" to="tapedeck" spy={true} smooth={true}>Tapedeck</Link></li></MDBDropdownItem>
                  <MDBDropdownItem link><li><Link activeClass="active" to="tic-tac-toe" spy={true} smooth={true}>Tic Tac Toe</Link></li></MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}