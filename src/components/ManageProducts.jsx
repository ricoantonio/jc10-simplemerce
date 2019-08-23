import React, { Component } from 'react'
import axios from "axios"

class ManageProducts extends Component{

    componentDidMount(){
        // ambil (GET) products data dari database
        axios.get(
            "http://localhost:2019/products"
        ).then((res)=>{
            console.log(res.data);
            
        }).catch((err)=>{
            console.log(err);
            
        })
    }

    onAddProduct=()=>{
        // Ambil data
        let dataNama=this.name.value
        let dataDesc=this.desc.value
        let dataPrice=this.price.value
        let dataPic=this.pic.value
        // Post
        axios.post(
            "http://localhost:2019/products",
            {
                name:dataNama,
                desc:dataDesc,
                price:dataPrice,
                pic:dataPic
           }
        ).then((res)=>{
            alert("Input Success")
        }).catch((err)=>{
            alert("Failed to Input")
        })
    }



    render() {
        return (
            <div className="container">
                <h1 className="display-4 text-center text-warning my-4">Input Product</h1>
                <table className="table bg-warning text-center table-borderless">
                    <thead className="border-bottom border-dark">
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Picture</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input ref={(input)=>{this.name=input}} className="form-control btn btn-dark" type="text"/></td>
                            <td><input ref={(input)=>{this.desc=input}} className="form-control btn btn-dark" type="text"/></td>
                            <td><input ref={(input)=>{this.price=input}} className="form-control btn btn-dark" type="text"/></td>
                            <td><input ref={(input)=>{this.pic=input}} className="form-control btn btn-dark" type="text"/></td>
                            <td>
                                <button 
                                onClick={this.onAddProduct}
                                className="btn btn btn-success"><b>+</b></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ManageProducts