import './App.css';
import './index.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { DataProvider } from './components/Context'
import Products from './pages/Products'
import Footer from './components/Footer'
//import Section from './components/Section'
import Details from './pages/Details';
import Cart from './components/Cart';
import Checkout from './pages/Checkout';


class App extends React.Component {
  render() {
    return (
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
              <Routes>
              <Route path="/" element={<Products/>} exact />
              <Route path="/product" element={<Products/>} exact />
              <Route path="/product/:id" element={<Details/>}  />
              <Route path="/cart" element={<Cart/>} exact />
              <Route path="/checkout" element={<Checkout/>}  />
              </Routes>
            <Footer />
          </Router>
          
        </div>
      </DataProvider>
    );
  }
}

export default App;