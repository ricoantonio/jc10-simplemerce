import React, { Component } from 'react'
import{Link, NavLink} from "react-router-dom"
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class Header extends Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }


    render() {
        return (
            <div>
              <Navbar color="warning" light expand="md">
                <Link className="navbar-brand" to="/">simplestore.com</Link>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>

                    <NavItem>
                      <NavLink className="nav-link" to="/">All Product</NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink className="nav-link" to="/manageproducts">Manage</NavLink>
                    </NavItem>
                   
                    <NavItem>
                        <NavLink to="/register">
                            <Button color="light" className="mx-3">Register</Button>
                        </NavLink>
                    </NavItem>
                    
                    <NavItem>
                        <NavLink to="/login">
                            <Button color="light" >Login</Button>
                        </NavLink>
                    </NavItem>
                   
                    
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          );
        }
}

export default Header