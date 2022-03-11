import React, { Component } from 'react'
import './css/Footer.css'
import Youtube from'../images/youtube-square-brands.jpg'
import Twitter from'../images/twitter-square-brands.jpg'
import Facebook from'../images/facebook-square-brands.jpg'
import Instagram from'../images/instagram-square-brands.jpg'
import Amazon from'../images/cc-amazon-pay-brands.jpg'
import Apple from'../images/cc-apple-pay-brands.jpg'
import Mastercard from'../images/cc-mastercard-brands.jpg'
import Paypal from'../images/cc-paypal-brands.jpg'
import Visa from'../images/cc-visa-brands.jpg'
import Footlocker from'../images/footlocker-2.0.jpg'
import Red from'../images/red.jpg'

export class Footer extends Component {
  render() {
    return (
      <footer>

        <div className="foot"><img src={Footlocker} alt="" width="230"/></div>

        <div className='pay'>
       
         <h3>Payment Methods</h3>
         <img className='redtwo' src={Red} alt="" width="32"/>
         <nav>
         <ul>
         <li><img src={Visa} alt="" width="32"/></li>
         
         <li><img src={Apple} alt="" width="32"/></li>
         
         <li><img src={Mastercard} alt="" width="32"/></li>
         
         <li><img src={Amazon} alt="" width="32"/></li>
         
         <li><img src={Paypal} alt="" width="32"/></li>
         </ul>
         </nav>
         </div>

        <div className='soc'>
         <h3 className='socia'>Social</h3>
         <img className='redone' src={Red} alt="" width="32"/>
         <nav>
         <ul>
         <li><a href="https://www.youtube.com/"><img src={Youtube} alt="" width="30"/></a></li>
         
         <li><a href="https://twitter.com/"><img src={Twitter} alt="" width="30"/></a></li>
         
         <li><a href="https://www.facebook.com/"><img src={Facebook} alt="" width="30"/></a></li>
         
         <li><a href="https://www.instagram.com/"><img src={Instagram} alt="" width="30"/></a></li>
         </ul>
         </nav>
         </div>
       
       <p className='copy'>© 2021 Footlocker 2.0.com, Inc. All Rights Reserved</p>

       
      </footer>
    )
  }
}

export default Footer
