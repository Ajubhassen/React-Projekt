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
          <Route path="/" component={Products} exact />
          <Route path="/product" component={Products} exact />
          <Route path="/product/:id" component={Details} exact />
          <Route path="/cart" component={Cart} exact />
          <Route path="/checkout" component={Checkout} exact />
          </Routes>
        </section>
    )
  }
}

export default Section
