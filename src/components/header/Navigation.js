import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavbarToggler, Collapse, Navbar, NavbarBrand } from "reactstrap";
import LOGO from "./LOGO";

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        }
    }

    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
            <div>
                <Navbar fixed="top" light color="light" expand="sm">
                    <div className="container">
                        <NavbarToggler onClick={this.navToggle} />
                        <NavbarBrand href="/">
                            <LOGO />
                        </NavbarBrand>

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <Link to="/" className="nav-link" onClick={this.navToggle}>Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/menu" className="nav-link" onClick={this.navToggle}>Menu</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/about" className="nav-link" onClick={this.navToggle}>About</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/contact" className="nav-link" onClick={this.navToggle}>Contact</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/portfolio" className="nav-link" onClick={this.navToggle}>Portfolio</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/ninjatailor" className="nav-link" onClick={this.navToggle}>ninjaTailor</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}

export default Navigation;