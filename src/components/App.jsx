import React, { Component } from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import Register from "./Register"
import Login from "./Login"
import Home from "./Home"
import ManageProducts from './ManageProducts'
import Header from "./Header"
import ProductDetail from './ProductDetail'

//Action Creator 
const keepLogin =(objUser)=>{
    return{
        type:"LOGIN_SUCCESS",
        payload:{
            id:objUser.id,
            username: objUser.username
        }
    }
}


class App extends Component {

    state={
        check:false
    }

    componentDidMount() {
        // check LocalStorage
        let userStorage=JSON.parse(localStorage.getItem("userData"))

        if (userStorage){
            //kirim ke redux
            this.props.keepLogin(userStorage)
        } 

        this.setState({check: true})
    }
    

    render (){
        if (this.state.check){
            return (
                <div>
                    <BrowserRouter>
                        <Header/>
                        <Route path="/" exact component={Home} />
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                        <Route path="/manageproducts" component={ManageProducts} />
                        <Route path="/productdetail/:id" component={ProductDetail}/>
                    </BrowserRouter>
                </div>
            )
        } else {
            return <div><h1 className="text-center">LOADING</h1></div>
        }
        
    }
}

export default connect(null,{keepLogin})(App)