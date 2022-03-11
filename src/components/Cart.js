import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../components/Context";
import "../components/css/Cart.css"

export class Cart extends Component {
  static contextType = DataContext;

  componentDidMount(){
    this.context.getTotal();
}

render() {
    const {cart,removeProduct,total} = this.context;
    if(cart.length === 0){
        return <div className="total" >
         <h2 style={{textAlign:"center"}}>Tom varukorg</h2>
        <Link to="/" style={{borderRadius: 10}}>Products</Link>
        </div>
    }else{
        return (
            <>
                {
                    cart.map(item =>(
                      
                        <div className="details cart" key={item._id}>
                            <img src={item.url} alt="bild"/>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>
                            </div>

                            <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
                        </div>
                    ))
                }
                <div className="total">
                    <Link to="/checkout" style={{borderRadius: 10}}>Checkout</Link>
                    <h3>Total: ${total}</h3>
                    <Link to="/" style={{borderRadius: 10}}>Go to products</Link>
                </div>
            </>
            )
        }
    }
}

export default Cart