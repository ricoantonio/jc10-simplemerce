import React, { Component } from 'react'
import axios from 'axios'
import ProductItem from "./ProductItem"

class Home extends Component{

    state={
        products:[],
        searchProducts:[],
        sortNama:0,
        sortPrice:0

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
        this.name.value=''
        this.min.value=''
        this.max.value=''
        this.setState((prevState)=>{
            return{
                searchProducts: prevState.products
            }
        })
    }

    urut=(a,b)=>{
        return a.price-b.price
    }
    urutDes=(a,b)=>{
        return b.price-a.price
    }
      
    urutHuruf=(a,b)=>{
        
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
    }   
    urutHurufDes=(a,b)=>{
        
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
            return -1;
        }
        if (nameA < nameB) {
            return 1;
        }
    }   

    onSortName=()=>{
        if (!this.state.sortNama){
            var hasilFilter=this.state.products.sort(this.urutHuruf)
            this.setState({searchProducts:hasilFilter})
            this.setState({sortNama:1})
        } if (this.state.sortNama){
            var hasilFilter=this.state.products.sort(this.urutHurufDes)
            this.setState({searchProducts:hasilFilter})
            this.setState({sortNama:0})
        }
    }
    onSortPrice=()=>{
        if (!this.state.sortPrice){
            var hasilFilter=this.state.products.sort(this.urut)
            this.setState({searchProducts:hasilFilter})
            this.setState({sortPrice:1})
        } if (this.state.sortPrice){
            var hasilFilter=this.state.products.sort(this.urutDes)
            this.setState({searchProducts:hasilFilter})
            this.setState({sortPrice:0})
        }
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
                        <div className="card mt-5 p-3 shadow-sm mr-2">
                            <div className="card-title border-bottom border-dark">
                                <h3 className="d-inline">Search</h3>
                            </div>
                            <form className="form-group mb-0">
                                <h5>Name :</h5>
                                <input onChange={this.onSearchClick} 
                                ref={(input)=>{this.name=input}} 
                                className="form-control my-3 btn-light" placeholder="product" type="text" name="" id=""/>

                                <h5>Price :</h5>
                                <input onChange={this.onSearchClick} 
                                ref={(input)=>{this.min=input}} 
                                className="form-control btn-light" placeholder="mimimum" type="text" name="" id=""/>
                                <input onChange={this.onSearchClick} 
                                ref={(input)=>{this.max=input}} 
                                className="form-control my-3 btn-light" placeholder="maximum" type="text" name="" id=""/>
                            </form>
                            <div className="d-inline-block align-bottom ml-2 text-right">
                                    <button onClick={this.onResetClick} className="btn btn-sm btn-secondary">Refresh</button>
                                </div>
                        </div>
                        <div className="card mt-2 p-3 shadow-sm mr-2">
                            <div className="card-title border-bottom border-dark">
                                <h3 className="d-inline">Sort by</h3>
                            </div>
                            <div>
                                <button onClick={this.onSortName} className="btn btn-block btn-warning">Product Name</button>
                                <button onClick={this.onSortPrice} className="btn btn-block btn-warning">Product Price</button>
                            </div>
                        </div>
                    </div>

                {/* div untuk list */}
                    <div className="col-9 row mt-5 p-0" style={{height:"30px"}}>
                        <div className="col-12 display-4 text-center mb-2 shadow-sm p-2 card ">Our Product List</div>
                            {this.renderList()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home