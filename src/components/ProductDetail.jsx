import React, { Component } from 'react'
import axios from 'axios'
import {Modal, ModalBody, Button, ModalFooter, ModalHeader} from 'reactstrap'
import Home from './Home'

class ProductDetail extends Component{

    state={
        product: null,
        modal: true
    }

    toggle=()=> {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));

    }
    componentDidMount() {


        axios.get(
            `http://localhost:2019/products/${this.props.match.params.id}`
        ).then((res)=>{
            // res.data={id, name, desc, price, pic}
            this.setState({product: res.data})
        }).catch(()=>{

        })
    }
    

    render() {

        if (this.state.product){


            return(
                <div className="container">
                    <div className="row my-5">
                        <div className="col-5 card offset-2 shadow-lg" style={{height:"500px"}}>
                            <div className="mx-auto my-auto">
                                <img className="" src={this.state.product.pic} style={{height:"350px"}} alt=""/>
                            </div>
                        </div>
                
                        <div className="col-3 card shadow-lg" style={{height:"500px"}}>
                            <div className="p-3">
                                <div>
                                    <h3>{this.state.product.name}</h3>
                                </div>
                                <div>
                                    <h5 className="mt-5">Product Info:</h5>
                                        <p className="text-secondary">
                                            {this.state.product.desc}
                                        </p> 
                                    <h5 className="text-success mt-5">Rp.{this.state.product.price}</h5>
                                </div>
                                <div className="">
                                    <form action="">
                                        <div className="">
                                        <span className="mr-2">x</span> <input className="form-control my-2 btn-light align-self-end shadow d-inline" 
                                            style={{width:"70px"}}  type="number" name="" id=""/> 
                                        </div>
                                        <button className="btn btn-outline-primary btn-block mt-4 shadow" >Add to cart</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            )
        } else {
            return(
                <div className="text-center">
                    <h1>loading</h1>
                </div>
            )
        }
    }
}

export default ProductDetail

// false => "", 0, undefined