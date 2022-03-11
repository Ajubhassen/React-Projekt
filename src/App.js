import './App.css';
import './index.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import { DataProvider } from './components/Context'
import Products from './pages/Products'
import Footer from './components/Footer'
import Cart from './components/Cart';


class App extends React.Component{
  render(){
   return (
     <DataProvider>
        <div className="App">
       
          <Router>
            <Cart />
            <Header />
            
            <Products />
            <Footer />
          </Router> 
         
        </div>
      </DataProvider>
    );
  }
}

export default App;