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