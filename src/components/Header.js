import React, { Component } from "react";
import Menu from "../images/bars-solid.svg";
import Close from "../images/xmark-solid.svg";
import Shopping from "../images/shopping-solid.svg";
import { Link } from "react-router-dom";
import { DataContext } from "./Context";
import "./css/Header.css"
import "../index.css";


export class Header extends Component {
  static contextType = DataContext;

  state = {
    toggle: false
  }

  menuToggle = () => {
    this.setState({toggle: !this.state.toggle});
  }

  render() {
    const {toggle} = this.state;
    const {cart} = this.context;

    return (

      <header>
        <div className="menu" onClick={this.menuToggle}>
          <img src={Menu} alt="" width="20" />
        </div>

        <div className="logo">
          <h1>
            <Link to="/">Footlocker 2.0</Link>
          </h1>
        </div>

        <nav>
          <ul className={toggle ? "toggle" : ""}>
            <li>
              <Link to="/">Home</Link>
            </li>
          
          
          

            <li className="close">
              <img src={Close} alt="Close" width="20" />
            </li>
          </ul>
            
          
          <div className="cart-basket" onClick={this.menuToggle}>
            <span>{cart.length}</span>
            
            <Link to="/cart">
              <img src={Shopping} alt="" width="20"/>
            </Link>
            
          </div>
          
        </nav>
      </header>
    )
  }
}

export default Header;
