import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component{

    state={
        products:[],
        searchProducts:[]
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
            return (
                (product.price>=inputMin && product.price<=inputMax)
            )
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
                <div key={product.id} className="card col-5 mt-5 mx-4">
                    <div className="text-center" style={{height:"250px"}}>
                    <img className="card-img-top p-2" src={product.pic} style={{width:"250px"}}/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title" style={{height:"70px"}} >{product.name}</h5>
                        <p className="card-text" style={{height:"20px"}} >{product.price}</p>
                        <input className="form-control my-2" type="number" name="" id=""/>
                        <div className="text-right my-3">
                            <button className="btn btn-block btn-warning" 
                                data-toggle="popover" data-placement="right" 
                                data-content={product.desc} 
                                data-container="body" 
                                size="sm">Detail</button>
                            <button className="btn  btn-block btn-success" size="sm">Add</button>
                        </div>
                    </div>
                </div>
            )
        })  
    }
    

    render() {
        return (
            <div className="container">
                <div className="row">
                {/* div untuk search  */}
                <div className="col-3">
                    <div className="card mt-5 p-3">
                        <div className="card-title border-bottom border-secondary">
                            <h3>Search</h3>
                        </div>
                        <form className="form-group my-3 border-bottom border-secondary">
                            <h5>Name :</h5>
                            <input ref={(input)=>{this.name=input}} className="form-control my-3" type="text" name="" id=""/>

                            <h5>Price :</h5>
                            <input ref={(input)=>{this.min=input}} className="form-control" placeholder="mimimum" type="text" name="" id=""/>
                            <input ref={(input)=>{this.max=input}} className="form-control my-3" placeholder="maximum" type="text" name="" id=""/>
                        </form>
                        <button onClick={this.onSearchClick} className="btn btn-outline-success mt-2 mb-2">Search</button>
                        <button onClick={this.onResetClick} className="btn btn-outline-danger">Reset</button>
                    </div>
                </div>
                {/* div untuk list */}
                <div className="col-9 row justify-content-end">
                    {this.renderList()}
                </div>
            </div>
            </div>
        )
    }
}

export default Home