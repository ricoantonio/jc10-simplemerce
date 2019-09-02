import React from 'react';
import {connect} from 'react-redux'
import {Alert} from 'reactstrap'

class NotLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
      if(!this.props.username){
        return (
            <Alert className="text-center shadow" color="warning" isOpen={this.state.visible} toggle={this.onDismiss}>
            You are <b>not Login</b>
            </Alert>
        );
    }else{
        return (
            <Alert className="text-center shadow" color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
            You are <b>Login </b>as<b> {this.props.username}</b>
            </Alert>
        )
    }
  }
}
const mapStateToProps=state=>{
  return {
    username: state.auth.username
  }
}

export default connect(mapStateToProps) (NotLogin);
