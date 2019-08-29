import React, { Component } from 'react'

class WrongUserPass extends Component{
    render(){
        return(
            <div className="alert-danger p-2 m-1">
                <div className="text-center">
                    <b>Incorrect </b>username or password
                </div>
            </div>
        )
    }
}

export default WrongUserPass