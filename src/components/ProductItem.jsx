import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class ProductItem extends Component{

    render(){
        let {id, name, price, pic} = this.props.barang
        
        return(
            <div className="card col-4 mt-5 shadow-sm">
                
                <div className="text-center" style={{height:"230px"}}>
                    <img className="p-2" src={pic} style={{width:"200px"}}/>
                </div>
                <div className="card-body">
                    <h5 className="card-title" style={{height:"80px"}} >{name}</h5>
                    <p className="card-text" style={{height:"20px"}} >Rp.{price}</p>
                    <input className="form-control my-2" type="number" name="" id=""/>
                    <div className="text-right my-3">
                        <Link to={`/productdetail/${id}`}>
                            <button className="btn btn-block btn-warning">Detail</button>

                        </Link>
                        <button className="btn  btn-block btn-success" size="sm">Add</button>
                    </div>
                </div>
                
            </div>
        )
            
    }
}

export default ProductItem