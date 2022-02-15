import React, {Component} from "react";
import { Link } from "react-router-dom";
import {Nav, NavItem, NavbarToggler, Collapse ,Navbar, NavbarBrand } from "reactstrap";
import LOGO from "./LOGO";

class Navigation extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        }
    }

    navToggle = () =>{
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render(){
    return(
        <div>
            <Navbar light color="light" expand="sm"> 
                <div className="container">
                <NavbarToggler onClick={this.navToggle} />
                <NavbarBrand href="/">

                    <Link to="/" className="nav-link" style={{padding:"0px"}}>
                        <LOGO/>
                    </Link>
                    
                </NavbarBrand> 

                <Collapse isOpen = {this.state.isNavOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link to="/" className="nav-link">Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/menu" className="nav-link">Menu</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about" className="nav-link">About</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </NavItem>
                </Nav>
                </Collapse>
                </div>               
            </Navbar>
        </div>
    )
    }
}

export default Navigation;