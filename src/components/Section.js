import React, { Component } from 'react'
import Products from '../pages/Products'
import Checkout from '../pages/Checkout'
import Productdetails from '../pages/Productdetails'
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
          <Route path="/product/:id" component={Productdetails} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          </Routes>
      </section>
    )
  }
}

export default Section
