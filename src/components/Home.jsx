import React, { Component } from 'react'
import axios from 'axios'
import ProductItem from "./ProductItem"

class Home extends Component{

    state={
        products:[],
        searchProducts:[],

    }

    componentDidMount() {
        axios.get(
            "http://localhost:2019/products"
        ).then((res)=>{
            this.setState(
                {
                    products:res.data,
                    searchProducts:res.data

                }
            )
        }).catch(()=>{

        })
    }
    
    // Search and Filter
    onSearchClick=()=>{
        let inputName=this.name.value
        let inputMin=parseInt(this.min.value)
        let inputMax=parseInt(this.max.value)


        let hasilFilter=this.state.products.filter((product)=>{
            return (
                // akan mereturn true atau false 
                product.name.toLowerCase().includes(inputName.toLowerCase())
                
            )
        })
        let hasilFilterPrice=hasilFilter.filter((product)=>{
            
                if (!inputMax && !inputMin){
                    return hasilFilter
                } if (inputMax && inputMin) {
                    return (product.price>=inputMin && product.price<=inputMax)
                } if (inputMax && !inputMin){
                    return (product.price<=inputMax)
                } if (!inputMax && inputMin){
                    return (product.price>=inputMin)
                }
        })

        this.setState({searchProducts:hasilFilterPrice})
    }

    onResetClick=()=>{
        this.setState((prevState)=>{
            return{
                searchProducts: prevState.products
            }
        })
    }

    // membuat list, akan menggunakan map
    renderList=()=>{
        // products adalah array of object [{}, {}, {},..]
        // product adalah {id, name, desc, price, pic}
        return this.state.searchProducts.map((product)=>{
            return(
                <ProductItem barang={product} key={product.id}/>
            )
            
        })  
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                {/* div untuk search  */}
                <div className="col-3">
                    <div className="card mt-5 p-3 shadow-sm">
                        <div className="card-title border-bottom border-dark">
                            <h3>Search</h3>
                        </div>
                        <form className="form-group mb-3">
                            <h5>Name :</h5>
                            <input onChange={this.onSearchClick} 
                            ref={(input)=>{this.name=input}} 
                            className="form-control my-3 btn btn-light" placeholder="product" type="text" name="" id=""/>

                            <h5>Price :</h5>
                            <input onChange={this.onSearchClick} 
                            ref={(input)=>{this.min=input}} 
                            className="form-control btn btn-light" placeholder="mimimum" type="text" name="" id=""/>
                            <input onChange={this.onSearchClick} 
                            ref={(input)=>{this.max=input}} 
                            className="form-control my-3 btn btn-light" placeholder="maximum" type="text" name="" id=""/>
                        </form>
                    </div>
                </div>
                {/* div untuk list */}
                <div className="col-9 row">
                    {this.renderList()}
                </div>
            </div>
            </div>
        )
    }
}

export default Home