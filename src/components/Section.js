import React, { Component } from 'react'
import Products from '../pages/Products'
import { Routes, Route } from 'react-router-dom'
import Cart from '../components/Cart'
import '../index.css';

export class Section extends Component {
  render() {
    return (
      <section>
      <Routes>
        <Route path="/" component={Products} exact />
        {/*<Route path="/product" component={Product} exact />*/}
        <Route path="/Cart" component={Cart} />
        </Routes>
      </section>
    )
  }
}

export default Section