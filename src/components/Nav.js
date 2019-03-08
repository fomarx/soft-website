import React, { Component } from "react";
import { Navbar, NavbarNav, NavItem, NavbarToggler, Collapse } from "mdbreact";
import Logo from "../assets/images/logo-light.png";
import { HashLink as Link } from "react-router-hash-link";
export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWideEnough: false,
      isOpen: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleTogglerClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <Navbar
        color="mdb-color darken-3"
        transparent
        dark
        expand="md"
        fixed="top"
        scrolling
      >
        <Link to="/">
          <img src={Logo} height="30" alt="" />
        </Link>
        {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
        <Collapse isOpen={this.state.isOpen} navbar>
          <NavbarNav right>
            <NavItem>
              <Link to="/#about">
                <strong>About</strong>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/#services">
                <strong>Services</strong>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/#news">
                <strong>News</strong>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/#projects">
                <strong>Projects</strong>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/#counter">
                <strong>Statistics</strong>
              </Link>
            </NavItem>
            {/* <NavItem>
              <Link to="/#clients">
                <strong>Clients</strong>
              </Link>
            </NavItem> */}
            <NavItem>
              <Link to="/#contact">
                <strong>Contact</strong>
              </Link>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    );
  }
}
