import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class ProductItem extends Component{

    render(){
        let {id, name, price, pic} = this.props.barang
        
        return(
            
            <div className="card col-4 mt-5 shadow-sm p-3">
                <Link to={`/productdetail/${id}`}>
                <div className="text-center" style={{height:"200px"}}>
                    <img className="" src={pic} style={{width:"200px"}}/>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-dark" style={{height:"60px"}} >{name}</h5>
                    <p className="card-text text-right text-info" style={{height:"20px"}} >Rp. {price}</p>
                </div>
                </Link >
                    <div className="text-right">
                    + <input className="form-control my-2 btn btn-light align-self-end" 
                    style={{width:"60px"}}  type="number" name="" id=""/> 
                    </div>
                <Link to={`/productdetail/${id}`}>
                    <div className="text-right">
                        <button className="btn btn-block btn-warning">Detail</button>
                    </div>
                </Link>
                    <div>
                        <button className="btn btn-block btn-primary my-1" size="sm">Add</button>
                    </div>
            </div>
           
        )
            
    }
}

export default ProductItem