import React, { Component } from 'react'

class Login extends Component{
    render() {
        return (
            <div>
                <div className="col-md-3 mx-auto card mt-5 bg-warning">
                    <div className="card-body">
                        <div className="card-title border-bottom border-secondary">
                            <h1>Login</h1>
                        </div>

                        <form className="form-group border-bottom border-secondary">
                            <div className="card-title">
                                <h4>Username :</h4>
                            </div>
                                <input ref={(input)=>{this.username=input}} type="text" placeholder="username" className="form-control btn-dark mb-3 text-center"/>

                            <div className="card-title">
                                <h4>Password :</h4>
                            </div>
                                <input ref={(input)=>{this.password=input}} type="password" className="form-control btn-dark mb-3 text-center"/>
                        </form>

                        <div 
                        onClick={this.onRegisterClick}
                        className="text-center">
                            <button className="btn-block btn btn-outline-dark btn-lg mt-4">Login Account</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login