import React, { Component } from 'react'
import Products from '../pages/Products'
import Checkout from '../pages/Checkout'
import Details from '../pages/Details'
import { Route, Routes } from 'react-router-dom'
import Cart from '../components/Cart'
import '../index.css';


export class Section extends Component {
  render() {
    return (
      <section>
          <Routes>
            <Route path="/" element={Products} exact />
            <Route path="/product" element={Products} exact />
            <Route path="/product/:id" element={Details} exact />
            <Route path="/cart" element={Cart} exact />
            <Route path="/payment" element={Checkout} exact />
          </Routes>
        </section>
    )
  }
}

export default Section
