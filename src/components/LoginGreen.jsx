import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import {connect} from 'react-redux'

class LoginGreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
          modal: true
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render(){
        return(
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>You are Login as "{this.props.username}"</ModalHeader>
                <ModalBody>
                    Welcome to simplestore.com, 
                        <p>Hope you enjoy your time shopping here!</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="warning" onClick={this.toggle}>Okey</Button>
                </ModalFooter>
                </Modal>
            </div>
            
        )
        
    }
}

const mapStateToProps=state=>{
    return {
        username: state.auth.username
    }
}

export default connect(mapStateToProps)(LoginGreen) 