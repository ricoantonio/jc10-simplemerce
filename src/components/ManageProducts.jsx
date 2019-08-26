import React, { Component } from 'react'
import axios from "axios"

class ManageProducts extends Component{

    state={
        products: [],
        selectedId: 0
    }

    componentDidMount(){
        // ambil (GET) products data dari database
        axios.get(
            "http://localhost:2019/products"
        ).then((res)=>{
            // ditaruh di state.data
            this.setState({products:res.data})
            
        }).catch((err)=>{
            console.log(err);
            
        })
    }

    // input data
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
            this.componentDidMount()
            this.renderList()
            
        }).catch((err)=>{
            alert("Failed to Input")
        })
    }

    onDel=()=>{

    
        
    }

    onEdit=()=>{
     
       
    }

    // Render list
    renderList=()=>{
        // Map data object jadi list
        // products =[]
        // product = {name, desc, proce, pic}
        
        let hasilRender=this.state.products.map((product,index)=>{
            return (
                <tr key={product.id} className="border-bottom border-dark" style={{height:"120px"}}>
                    <td className="align-middle">{product.name}</td>
                    <td className="align-middle">{product.desc}</td>
                    <td className="align-middle">{product.price}</td>
                    <td className="align-middle">
                        <img className="rounded-circle" style={{width:"100px"}} src={product.pic} alt=""/>
                    </td>
                    <td className="align-middle">
                        <button 
                            onClick={this.onEdit} 
                            className="btn btn btn-primary mx-2"><b>Edit</b></button>                        
                        <button 
                            onClick={this.onDel}
                            className="btn btn btn-danger"><b>X</b></button>                        
                    </td>
                </tr>
            )
        })
        return hasilRender
    }




    render() {
        return (
            <div className="container">

                {/* Rendering list data */}
                <h1 className="display-4 text-center text-warning my-4">List Product</h1>
                <table className="table bg-warning text-center table-borderless">
                    <thead className="border-bottom border-dark">
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Picture</th>
                            <th className="col-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>

                {/* Input data */}
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
                            <td><input ref={(input)=>{this.pic=input}} className="form-control btn btn-dark" type="text" value="https://de9luwq5d40h2.cloudfront.net/catalog/product/large_image/00_414321.jpg"/></td>
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

// key pada baris ke74 menggunakan nilai id dari masing2 product
// product={name,description, proice, picrure, id}/ product.id