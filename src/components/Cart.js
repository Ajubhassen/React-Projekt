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
        return  <h2 style={{textAlign:"center"}}>Tom varukorg<br></br><Link to="/Product">Gå tillbaka till Productsidan</Link></h2>
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

                                <p>{item.content}</p>
                                

                                <div className="amount">
                                    
                                    
                                </div>

                            </div>

                            <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
                        </div>
                    ))
                }
                <div className="total">
                    <Link to="/checkout/">Checkout</Link>
                    <h3>Total: ${total}</h3>
                    <Link to="/">Go to products</Link>
                </div>
            </>
            )
        }
    }
}

export default Cart