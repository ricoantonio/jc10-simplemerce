import React, { Component } from 'react'
import axios from 'axios'



class ProductDetail extends Component{

    state={
        product: null
    }


    componentDidMount() {


        axios.get(
            `http://localhost:2019/products/${this.props.match.params.id}`
        ).then((res)=>{
            // res.data={id, name, desc, price, pic}
            this.setState({product: res.data})
        }).catch(()=>{

        })
    }
    

    render() {
        if (this.state.product){
            return(
                <div className="container"> 
                    <div className="card col-5 my-5 mx-auto p-3 shadow">
                    <div className="card-header text-center">
                        <h3>
                            {this.state.product.name}
                        </h3>
                    </div>
                    <div className="card-body">
                        <div style={{height:"400px"}}>
                        <img className="card-img-top" src={this.state.product.pic} alt=""/>
                        </div>
                        <h4 className="my-3">{this.state.product.name}</h4>
                        <p className="text-right">{this.state.product.desc}</p>
                        <p className="text-right">Rp.{this.state.product.price}</p>
                    </div>
                    <form action="">
                        <input className="form-control text-right" type="text" name="" id=""/>
                        <button className="btn btn-success btn-block mt-2" >Add to Cart</button>
                    </form>
                </div>
                </div>
            )
        } else {
            return(
                <div className="text-center">
                    <h1>loading</h1>
                </div>
            )
        }
    }
}

export default ProductDetail

// false => "", 0, undefined