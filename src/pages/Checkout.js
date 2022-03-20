import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../pages/css/Checkout.css'


export default function Checkout() {
  const navigate = useNavigate();

  function completeCheckout() {
    navigate("/product");
    alert("Thanks for your purchase!");
    localStorage.removeItem('dataCart');
    localStorage.setItem('dataTotal', 0);
  }

  const cartTotalValue = localStorage.getItem('dataTotal');
  const dataCart = localStorage.getItem('dataCart');
  const cartItems = JSON.parse(dataCart);

  return (
    <div>
      <table border="1" className='cartReviewTable'>
        <thead>
          <th>Product</th>
          <th>Price</th>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr>
              <td>
                <img width='150' src={item.url} />
                <span>{item.title}</span>
              </td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{cartTotalValue}</td>
          </tr>
        </tfoot>
      </table>
      
      <div className='header-1'>
        <h5 className='info'>Betalinformation</h5>
        <p className='fält'>* Indikerar fält som måste fyllas i.</p>
        <form action="/action_page.php" class="form1">
          <label for="fname">Namn *</label>
          <input type="text" class="i1" id="fname" placeholder="Namn.." />

          <label for="lname">Efternamn *</label>
          <input type="text" class="i1" id="lname" placeholder="Efternamn.." />

          <label for="lname">E-post *</label>
          <input type="text" class="i1" id="epost" placeholder="E-post.." />

          <label for="adress">Telefon</label>
          <input type="text" class="i1" id="number" placeholder="Nummer.." />

          <label for="pnummer">Personnumer *</label>
          <input type="text" class="i1" id="pnummer" placeholder="Personnumer.." />

          <label for="adress"> Leveransadress *</label>
          <input type="text" class="i1" id="adress" placeholder="Adress.." />

          <label for="land">Land</label>
          <select id="land" class="i1" name="Land">
            <option value="sverige">Sverige</option>
            <option value="danmark">Danmark</option>
            <option value="norge">Norge</option>
          </select>


        </form>



        <br></br>

      </div>

      <h5 class="info">Betalningsalternativ</h5>
      <input type="checkbox" name="Kort" id="Kort" />
      <label for="Kort">Kort</label> <i class="fas fa-credit-card"></i>

      <br></br>
      <br></br>
      <input placeholder="För- och efternamn" type="tel" name="nummer" />

      <input type="tel" name="Kort" id="kort-1" placeholder="Visa/MasterCard Nummer" />
      <br></br>
      <form action="">
        <br></br>
        <input placeholder="MM/ÅÅ" type="tel" name="expiry" />
        <input placeholder="CVC" type="number" name="cvc" />
      </form>

      <br></br>
      <br></br>
      <br></br>
      <input type="checkbox" name="Swish" id="Swish" />
      <label for="Swish">Swish</label> <i class="fa fa-swish"><img class="swish" src="/Bilder/swish.ico" alt="" /></i>
      <input type="text" name="Swish" id="swish" placeholder="Nummer" />

      <br></br>
      <br></br>
      <span class="faturaadress">
        <input type="checkbox" id="checkbox" name="checkbox" />
        <label for="adress">Skicka till fakturaadressen</label>

      </span>
      <br></br>
      <br></br>

      <button onClick={completeCheckout} class="Nästa">Slutför</button>
    </div>
  )
}