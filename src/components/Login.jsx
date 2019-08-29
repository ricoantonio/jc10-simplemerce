import React, { Component } from 'react'
import { connect } from "react-redux";
import axios from 'axios'

import LoginGreen from "./LoginGreen"
import WrongUserPass from './WrongUserPass'

// Action Creator
// Setelah di masukkan ke connect, akan dipanggil sebahai this.props.onLoginUser
const onLoginUser=(ID, USERNAME)=>{
    // Action 
    return {
        type: "LOGIN_SUCCESS",
        payload: {
            id:ID,
            username:USERNAME
        }
    }
}

class Login extends Component{

    state={
        login: "",
        wrong:""
    }

    onLoginClick=()=>{
        // Hanya ketika menggunakan get yang terdapat params:
        axios.get(
            "http://localhost:2019/users", 
            {
                params:{
                    username:this.username.value,
                    password:this.password.value
                }
            }
        ).then((res)=>{
            // res.dara merupakan sebuah array
            // jika dara ditemukan, length > 0
            // jika data tidak ditemukan, length = 0
            if (res.data.length == 0) {
                this.setState({wrong: true})
                
            }else{
                // res.data[0] ={id, email, username , password}
                
                this.props.onLoginUser(
                    res.data[0].id,
                    res.data[0].username
                    
                );

                this.setState({login:true})


            }
        }).catch((err)=>{
            
        })
    }

    renderLogin=()=>{
        if (this.state.login==true){
            return(
                <div>
                <LoginGreen/>
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
        return (
            this.renderLogin()
        )
    }
}

export default connect(null,{onLoginUser})(Login)