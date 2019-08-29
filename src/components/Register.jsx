import React, { Component } from 'react'
import axios from 'axios'

class Register extends Component{

    onRegisterClick=()=>{
        // ambil semua data dari text input
        let data_username = this.username.value
        let data_email = this.email.value
        let data_password = this.password.value

        // post data tersebut ke db.json
        // axios.post () (menerima 2 data)
        axios.post (
            "http://localhost:2019/users", 
            {
                username:data_username,
                email:data_email,
                password:data_password
            }
        ).then((res)=>{
            // jika berhasil
            console.log(res.data);
        }).catch((err)=>{
            // jika gagal
            console.log(err);
            
        })

    }

    render() {
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
    }
}

export default Register