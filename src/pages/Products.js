import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../components/Context";
import "../index.css";
import "../pages/css/Products.css";


export class Products extends Component {
    static contextType = DataContext;
    
    render() {
        const { products } = this.context;

        return (
            <div id="product">
                {products.map((product) => (
                    <div className="card" key={product._id}>

                        <Link to={`/product/${product._id}`}>
                          <img src={product.url} alt="" />
                        </Link>

                        <div className="content">
                          <h3>
                            <Link to={`/product/${product._id}`}>{product.title}</Link>
                          </h3>
                          <span>${product.price}</span>
                          <p className="lager">Lagersaldo: {product.storage} kvar</p>
                        <div>
                          <input
                            placeholder="antal"
                            min={1}
                            max={product.storage}
                          />
                          
                            <button onClick={() => this.context.addCart(product._id)}>
                              Lägg till i varukorg
                            </button>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Products;
