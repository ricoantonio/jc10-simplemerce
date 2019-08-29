import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component{

    state={
        products:[],
        searchProducts:[],
        selectedDesc:'',
        selectedId:0
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

    onDetailClick=(id)=>{
        axios.get(
            " http://localhost:2019/products"
        ).then((res)=>{
            this.setState({selectedDesc : (res.data[(id-1)].desc)});
            this.setState({selectedId:id})
            this.renderList()
        }).catch(()=>{

        })
    }


    // membuat list, akan menggunakan map
    renderList=()=>{
        // products adalah array of object [{}, {}, {},..]
        // product adalah {id, name, desc, price, pic}
        return this.state.searchProducts.map((product)=>{
            if (this.state.selectedDesc&&((this.state.selectedId==product.id))){
            return(
                <div key={product.id} className="card col-4 mt-5 shadow-sm">
                    <div className="text-center" style={{height:"230px"}}>
                        <img className="p-2" src={product.pic} style={{width:"200px"}}/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title" style={{height:"100px"}} >{product.name}</h5>
                        <p className="card-text" style={{height:"20px"}} >Rp.{product.price}</p>
                        <input className="form-control my-2" type="number" name="" id=""/>
                        <div className="text-center my-3">
                            <div className="alert-warning p-3 my-2 shadow">
                                {this.state.selectedDesc}
                            </div>
                            <button className="btn  btn-block btn-success" size="sm">Add</button>
                        </div>
                    </div>
                </div>
            )
            } else {
            return(
                <div key={product.id} className="card col-4 mt-5 shadow-sm">
                    <div className="text-center" style={{height:"230px"}}>
                        <img className="p-2" src={product.pic} style={{width:"200px"}}/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title" style={{height:"100px"}} >{product.name}</h5>
                        <p className="card-text" style={{height:"20px"}} >Rp.{product.price}</p>
                        <input className="form-control my-2" type="number" name="" id=""/>
                        <div className="text-right my-3">
                            <button className="btn btn-block btn-warning" 
                                onClick={()=>{this.onDetailClick(product.id)}}>Detail</button>
                            <button className="btn  btn-block btn-success" size="sm">Add</button>
                        </div>
                    </div>
                </div>
            )
            }
        })  
    }
    

    render() {
        return (
            <div className="container">
                <div className="row">
                {/* div untuk search  */}
                <div className="col-3">
                    <div className="card mt-5 p-3 shadow">
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
                        <button onClick={this.onResetClick} className="btn btn-outline-dark">Reset</button>
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