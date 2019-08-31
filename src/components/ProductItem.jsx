import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class ProductItem extends Component{

    render(){
        let {id, name, price, pic} = this.props.barang
        
        return(
            <div className="card col-4 mb-2 shadow-sm p-4">

                <Link to={`/productdetail/${id}`}>
                <div className="text-center" style={{height:"200px"}}>
                    <img className="" src={pic} style={{width:"200px"}}/>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-dark" style={{height:"60px"}} >{name}</h5>
                    
                </div>
                </Link >
                    <div className="text-right">    
                    <h5 className="card-text text-right text-success d-inline" style={{height:"20px"}} >Rp. {price}</h5>
                    <span className="mx-1">x</span> <input className="form-control my-2 btn-light align-self-end shadow-sm d-inline" 
                    style={{width:"60px"}}  type="number" name="" id=""/> 
                    </div>
                    <div>
                        <button className="btn btn-block btn-outline-primary my-1 shadow" size="sm">Add</button>
                    </div>
            </div>
           
        )
            
    }
}

export default ProductItem