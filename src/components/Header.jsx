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
import {connect} from 'react-redux'
import {onLogoutUser} from '../action/index'

// const onLogOutUser=()=>{
//   // Action 
//   window.localStorage.removeItem("userData")
//   return {

//       type: "LOGIN_SUCCESS",
//       payload: {
//           id:'',
//           username:''
//       }
//   }
// }


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
      //jika tidak ada yang login
      if (!this.props.username){
        return (
          <div>
            <Navbar className="shadow" color="warning" light expand="md">
              <Link className="navbar-brand" to="/">MyOwnPC.com</Link>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>

                  <NavItem>
                    <NavLink className="nav-link" to="/">Home</NavLink>
                  </NavItem>
                 
                  <NavItem>
                      <NavLink to="/register">
                          <Button className="btn btn-light mx-3">Register</Button>
                      </NavLink>
                  </NavItem>
                  
                  <NavItem>
                      <NavLink to="/login">
                          <Button className="btn btn-light">Login</Button>
                      </NavLink>
                  </NavItem>
                 
                  
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      } else {
        // jika ada yang login 
        return(
        <div>
            <Navbar className="shadow" color="warning" light expand="md">
              <Link className="navbar-brand" to="/">MyOwnPC.com</Link>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>

                  <NavItem>
                    <NavLink className="nav-link" to="/">Home</NavLink>
                  </NavItem>
                 
                  <UncontrolledDropdown nav inNavbar>

                    <DropdownToggle nav caret>
                      Hi! {this.props.username}
                    </DropdownToggle>

                    <DropdownMenu right>
                      <DropdownItem>
                          <NavLink className="nav-link" to="/manageproducts"> Manage</NavLink>
                      </DropdownItem>
                      <DropdownItem >
                        <NavLink className="nav-link " to="/mycart">My Cart</NavLink>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem href="/" onClick={this.props.onLogoutUser}>
                          Log Out
                      </DropdownItem>
                    </DropdownMenu>

                    </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        )
      }

    
    }
}

//function untuk mengambnil data dari redux satate
const mapStateToProps=state=>{
  return {
    username: state.auth.username
  }
}

export default connect(mapStateToProps,{onLogoutUser})(Header)