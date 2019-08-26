import React, { Component } from 'react'
import {Route, BrowserRouter} from 'react-router-dom'

import Register from "./Register"
import Login from "./Login"
import Home from "./Home"
import ManageProducts from './ManageProducts'
import Header from "./Header"

class App extends Component {
    render (){
        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <Route path="/" exact component={Home} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/manageproducts" component={ManageProducts} />
                </BrowserRouter>
            </div>
        )
    }
}

export default App