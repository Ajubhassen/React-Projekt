import React, { Component } from 'react'
import Products from '../pages/Products'
import Checkout from '../pages/Checkout'
import Details from '../components/Details'

import { Route } from 'react-router-dom'
import Cart from '../components/Cart'
import '../index.css';

export class Section extends Component {
  render() {
    return (
      <section>
        <Route path="/" component={Products} exact />
        <Route path="/product" component={Products} exact />
        <Route path="/product/:id" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
      </section>
    )
  }
}

export default Section

