import React, { Component } from 'react'
import { connect } from "react-redux";
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import Home from './Home'
import {onLoginUser} from '../action/index'

import LoginGreen from "./LoginGreen"
import WrongUserPass from './WrongUserPass'


class Login extends Component{

    state={
        login: false,
        wrong:""
    }

    onLoginClick=()=>{
        // mangambil data dari textbox 
        let username = this.username.value
        let password = this.password.value
        
        // memanggil action creator 'onLoginUser'
        this.props.onLoginUser(username,password)
    }

    renderLogin=()=>{
        if (this.state.login==true){
            return(
                <div>
                    <Home/>
                    <LoginGreen/>
                </div>
                
                // <Redirect to="/"/>
                
            )
        }if(this.state.wrong==true){
            return(
                <div>
                    <div className="col-md-3 mx-auto card mt-5 shadow">
                        <div className="card-body">
                            <div className="card-title border-bottom border-secondary">
                                <h1>Login</h1>
                            </div>
                            <form className="form-group border-bottom border-secondary">
                                <WrongUserPass/>
                                <div className="card-title">

                                    <h4>Username :</h4>
                                </div>
                                    <input ref={(input)=>{this.username=input}} type="text" 
                                    placeholder="username" 
                                    className="form-control btn-light mb-3 text-center"/>

                                <div className="card-title">
                                    <h4>Password :</h4>
                                </div>
                                    <input ref={(input)=>{this.password=input}} type="password" 
                                    className="form-control btn-light mb-3 text-center"/>
                            </form>

                            <div 
                            onClick={this.onLoginClick}
                            className="text-center">
                                <button className="btn-block btn btn-warning btn-lg mt-4">Login Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
            
        }else{
            return(
                <div>
                    <div className="col-md-3 mx-auto card mt-5 shadow">
                        <div className="card-body">
                            <div className="card-title border-bottom border-secondary">
                                <h1>Login</h1>
                            </div>

                            <form className="form-group border-bottom border-secondary">
                                <div className="card-title">
                                    <h4>Username :</h4>
                                </div>
                                    <input ref={(input)=>{this.username=input}} type="text" 
                                    placeholder="username" 
                                    className="form-control btn-light mb-3 text-center"/>

                                <div className="card-title">
                                    <h4>Password :</h4>
                                </div>
                                    <input ref={(input)=>{this.password=input}} type="password" 
                                    className="form-control btn-light mb-3 text-center"/>
                            </form>

                            <div 
                                onClick={this.onLoginClick}
                                className="text-center">
                                <button className="btn-block btn btn-warning btn-lg mt-4">Login Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        if (this.props.username){
            return(
                <Home/>
            )
        }else{
            return(
                this.renderLogin()
            )
        }
    }
}

// function yang akan mengambil data dari redux state
// const mapStateToProps =(state)=>{
//     return{
//         user_name:state.auth.username
//     }
// }

const mapStateToProps=state=>{
    return {
      username: state.auth.username
    }
  }

export default connect(mapStateToProps,{onLoginUser})(Login)


//JSON.stringify akan mengubah bentuk object menjadi string 