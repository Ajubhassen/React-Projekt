import './App.css';
import './index.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import { DataProvider } from './components/Context'
import Products from "./pages/Products"


class App extends React.Component{
  render(){
   return (
     <DataProvider>
        <div className="App">
          <Router>
          <Header />
          <Products />
          </Router> 
        </div>
      </DataProvider>
    );
  }
}

export default App;