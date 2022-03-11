import React, { Component } from 'react'
import {DataContext} from '../components/Context'
import '../pages/css/Product.css'
import { Link } from 'react-router-dom';

export class Productdetails extends Component {
        static contextType = DataContext;
        state = {
          product: []
        }

        getProduct =() =>{
          if(this.props.match.params.id){
            const res = this.context.products;
            const data = res.filter(item =>{
              return item._id === this.props.match.params.id;
            })
           this.setState({product: data})
          }
        };

        componentDidMount(){
          this.getProduct();
        }

  render() {
    const {product} = this.state;
    const {addCart} = this.context;
    return (
      <>
          {
             product.map(item =>(
               <div className="details" key={item._id}>
                 <img src={item.url} width="250" alt=""/>
                 <div className="box">
                   <div className='row'>
                     <h2>{item.title}</h2>
                     <span>${item.price}</span>
                     
                     </div>
                      <p className='de'>{item.description}</p>
                      <p className='lag'>Lagersaldo: {item.storage} kvar</p>
                      
                     <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
                        Lägg till i varukorgen
                     </Link>
                   </div>
                 
                 </div>

             ))

          }
        
      </>
    )
  }
}

export default Productdetails
