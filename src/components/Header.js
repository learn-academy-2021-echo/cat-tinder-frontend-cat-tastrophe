import React, { Component } from 'react';
import { Collapse,
   Navbar,
   NavbarToggler,
   NavbarBrand, 
   Nav, 
   NavItem, 
   NavLink } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  
render() {
  return(
      <div className="header">
    Cat Tinder
    <h4> A dating app for your feline </h4>
    <Navbar className="navBar" color="faded" light>
          <NavbarBrand href="/" className="mr-auto"></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
              <NavLink href="/">Go Home</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="/catindex">See all the cats in your area</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="/catnew">Create New Cat</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
      </Navbar>
</div>
    
    
    
  )
  }
}
export default Header

