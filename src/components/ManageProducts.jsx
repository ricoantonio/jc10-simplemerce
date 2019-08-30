import React, { Component } from 'react'
import axios from "axios"
import {connect} from "react-redux"

class ManageProducts extends Component{

    state={
        products: [],
        selectedId: 0,
        selectedName:"",
        selectedDesc:"",
        selectedPrice:"",
        selectedPic:""
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
            this.name.value=""
            this.desc.value=""
            this.price.value=""
            this.pic.value=""
            
        }).catch((err)=>{
            alert("Failed to Input")
        })
    }

    selectedName=(e)=>{
        this.setState({selectedName:e.target.value})
    }
    selectedDesc=(e)=>{
        this.setState({selectedDesc:e.target.value})
    }
    selectedPrice=(e)=>{
        this.setState({selectedPrice:e.target.value})
    }
    selectedPic=(e)=>{
        this.setState({selectedPic:e.target.value})
    }

    onCancle=()=>{
        this.setState({selectedId:0})
    }

    onEdit=(id,data)=>{
       this.setState({
        selectedId:id,
        selectedName:data.name,
        selectedDesc:data.desc,
        selectedPrice:data.price,
        selectedPic:data.pic
       })
    }

    onDel=(id)=>{
        axios.delete(
            `http://localhost:2019/products/${id}`
        ).then((res)=>{
            this.setState({selectedId:0})
            this.componentDidMount()
            this.renderList()
            
        }).catch((err)=>{
            alert("Failed to Delete")
        })
        
    }

    onSave=(id)=>{
        let dataNama=this.state.selectedName
        let dataDesc=this.state.selectedDesc
        let dataPrice=this.state.selectedPrice
        let dataPic=this.state.selectedPic
        // Post
        axios.patch(
            `http://localhost:2019/products/${id}`,
            {
                name:dataNama,
                desc:dataDesc,
                price:dataPrice,
                pic:dataPic
           }
        ).then((res)=>{
            this.setState({selectedId:0})
            this.componentDidMount()
            this.renderList()
            
        }).catch((err)=>{
            alert("Failed to Save")
        })
        // axios.patch
        // http://localhost:2019/products/(id product)
    }


    // Render list
    renderList=()=>{
        // Map data object jadi list
        // products =[]
        // product = {name, desc, proce, pic}
        
        let hasilRender=this.state.products.map((product)=>{

            if (product.id != this.state.selectedId){
                return (
                    <tr key={product.id} className="border-bottom border-top border-dark" style={{height:"120px"}}>
                        <td className="align-middle">{product.name}</td>
                        <td className="align-middle">{product.desc}</td>
                        <td className="align-middle">{product.price}</td>
                        <td className="align-middle">
                            <img className="rounded-circle shadow" style={{width:"100px",height:"100px"}} src={product.pic} alt=""/>
                        </td>
                        <td className="align-middle">
                            <button 
                                onClick={()=>{this.onEdit(product.id, product)}} 
                                className="btn btn btn-primary mx-2"><b>Edit</b></button>                        
                            <button 
                                onClick={()=>{this.onDel(product.id)}}
                                className="btn btn btn-danger"><b>X</b></button>                        
                        </td>
                    </tr>
                )
            } else{
                return(

                    <tr key="product.id"  style={{height:"120px"}}>
                        <td className="align-middle">
                            <input className="form-control shadow-sm" 
                                value={this.state.selectedName}
                                onChange={(e)=>{this.selectedName(e)}} 
                                type="text"/>
                        </td>
                        <td className="align-middle">
                            <input className="form-control shadow-sm" 
                                value={this.state.selectedDesc} 
                                onChange={(e)=>{this.selectedDesc(e)}} 
                                type="text"/>
                        </td>
                        <td className="align-middle">
                            <input className="form-control shadow-sm" 
                                value={this.state.selectedPrice} 
                                onChange={(e)=>{this.selectedPrice(e)}} 
                                type="text"/>
                        </td>
                        <td className="align-middle">
                            <input className="form-control shadow-sm" 
                                value={this.state.selectedPic} 
                                onChange={(e)=>{this.selectedPic(e)}} 
                                type="text"/>
                        </td>
                        <td className="align-middle">
                            <button 
                                onClick={()=>{this.onSave(product.id)}} 
                                className=" align-center btn btn btn-success mx-2"><b>Save</b>
                            </button>                        
                            <button 
                                onClick={()=>{this.onCancle(product.id)}}
                                className=" align-center btn btn btn-danger"><b>Cancle</b>
                            </button>                        
                        </td>
                    </tr>
                )
            }
        })
        return hasilRender
    }


    render() {
        return (
            <div>

                {/* Input data */}
                <h1 className="display-4 text-center text-black mb-4 shadow pt-2 py-4">Input Product</h1>
                <div className="container">
                    <table className="table text-center table-borderless mb-5">
                        <thead className="border-bottom border-dark">
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price (Rp.)</th>
                                <th>Picture</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input ref={(input)=>{this.name=input}} 
                                    className="form-control btn btn-light shadow-sm" 
                                    type="text"/>
                                </td>
                                <td>
                                    <input ref={(input)=>{this.desc=input}} 
                                    className="form-control btn btn-light shadow-sm" 
                                    type="text"/>
                                </td>
                                <td>
                                    <input ref={(input)=>{this.price=input}} 
                                    className="form-control btn btn-light shadow-sm" 
                                    type="text"/>
                                </td>
                                <td>
                                    <input ref={(input)=>{this.pic=input}} 
                                    className="form-control btn btn-light shadow-sm" 
                                    type="text"/>
                                </td>
                                <td>
                                    <button onClick={this.onAddProduct}
                                        className="btn btn btn-success"><b>+</b>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Rendering list data */}
                <h1 className="display-4 text-center text-black my-4 shadow pt-2 pb-4">List Product</h1>
                <div className="container">
                    <table className="table text-center table-borderless">
                        <thead className="border-bottom border-dark">
                            <tr>
                                <th className="col-3">Name</th>
                                <th className="col-3">Description</th>
                                <th className="col-2">Price (Rp.)</th>
                                <th className="col-2">Picture</th>
                                <th className="col-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderList()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default connect()(ManageProducts)

// key pada baris ke74 menggunakan nilai id dari masing2 product
// product={name,description, proice, picrure, id}/ product.id

/*
    Memberikan function ke onClick 

    1. function tidak menerima argument 
        Langsung tuliskan nama fuctuon tersebut di dalam kurung kurawal onClick 

        contoh 
            onClick={this."namafunction"}

    2. Function yang menerima argumeny 
        Masukkan terlebih dahulu ke onClick sebuah anonumous function ()=>{}
        Baru masukkan function yang ingin kita panggil di dalam anonymous function tersebut 

        contoh 
            onClick = { ()=>{ this."namafunction"(param) } }
*/

// axios.put mereplace data, sedangkan axios.patch ,meng-update data