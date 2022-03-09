import React, { Component } from 'react'
import Products from '../pages/Products'
import { Route } from 'react-router-dom'
import Cart from '../components/Cart'
import '../index.css';

export class Section extends Component {
  render() {
    return (
      <section>
        <Route path="/" component={Products} exact />
        <Route path="/product" component={Products} exact />
        <Route path="/cart" component={Cart} />
      </section>
    )
  }
}

export default Section