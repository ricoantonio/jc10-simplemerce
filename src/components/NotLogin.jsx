import React from 'react';
import { Alert } from 'reactstrap';

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
    return (
      <Alert className="text-center shadow" color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>
        You are not <b>Login</b>
      </Alert>
    );
  }
}


export default NotLogin;
