import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import Home from './Home'
import Swal from 'sweetalert2'

class Register extends Component{

    state={
        loading:false
    }

    onRegisterClick=()=>{
        // ambil semua data dari text input
        let data_username = this.username.value
        let data_email = this.email.value
        let data_password = this.password.value

        // post data tersebut ke db.json
        // axios.post () (menerima 2 data)

        //check apakan username sudah terpakai 
        axios.get(
            'http://localhost:2019/users',
            {
                params:{
                    username:data_username
                }
            }
        ).then((res)=>{
            if (res.data.length > 0){
                Swal.fire(
                    "Error",
                    "Username already exist, try using other username",
                    "error"
                )
            } else{
                //check email bila sudah diggunakan
                axios.get( 
                    'http://localhost:2019/users',
                {
                    params:{
                        email:data_email
                    }
                }).then((res)=>{
                    if (res.data.length > 0){
                        Swal.fire(
                            "Error",
                            "E-mail already exist, try using other e-mail",
                            "error"
                        )
                    } else{
                        Swal.fire(
                            "Success",
                            "Registration Success",
                            "success"
                        )
                        axios.post(
                            'http://localhost:2019/users',{
                                username:data_username,
                                email:data_email,
                                password:data_password
                            }
                        )
                    }
                })
            }
        })
    }

    loadingButton =()=>{
        if (this.state.loading){
            return(
                <div className="spinner-grow text-center" role="status">
                    <span className="sr-only"></span>
                </div>
            )
        } return (
            <button></button>
        )
    }

    render() {
        if (!this.props.username){
            return (
                <div>
                    <div className="col-md-3 mx-auto card mt-5 shadow">
                        <div className="card-body">
                            <div className="card-title border-bottom border-secondary">
                                <h1>Register</h1>
                            </div>

                            <form className="form-group border-bottom border-secondary">
                                <div className="card-title">
                                    <h4>Username :</h4>
                                </div>
                                    <input ref={(input)=>{this.username=input}} 
                                    type="text" 
                                    placeholder="username" 
                                    className="form-control btn-light mb-3 text-center"/>
                                
                                <div className="card-title">
                                    <h4>Email :</h4>
                                </div>
                                    <input ref={(input)=>{this.email=input}} 
                                    type="text" 
                                    placeholder="example@exampel.com" 
                                    className="form-control btn-light mb-3 text-center"/>

                                <div className="card-title">
                                    <h4>Password :</h4>
                                </div>
                                    <input ref={(input)=>{this.password=input}} 
                                    type="password" 
                                    className="form-control btn-light mb-3 text-center"/>
                            </form>

                            <div 
                                onClick={this.onRegisterClick}
                                className="text-center">
                                    <button className="btn-block btn btn-warning btn-lg mt-4">Register Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else{
            return(
                <Home/>
            )
        }
    }
}

const mapStateToProps=state=>{
    return {
      username: state.auth.username
    }
  }

export default connect(mapStateToProps)(Register) 