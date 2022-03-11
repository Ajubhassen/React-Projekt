import React, { Component } from 'react'

export class Checkout extends Component {
  render() {
    return (
      <div>
       

        <div className='header-1'>
        <h5 className='info'>Betalinformation</h5>
        <p className='fält'>* Indikerar fält som måste fyllas i.</p>
        <form action="/action_page.php" class="form1">
            <label for="fname">Namn *</label>
            <input type="text" class="i1" id="fname" placeholder="Namn.."/>

            <label for="lname">Efternamn *</label>
            <input type="text" class="i1" id="lname" placeholder="Efternamn.."/>

            <label for="lname">E-post *</label>
            <input type="text" class="i1" id="epost" placeholder="E-post.."/>

            <label for="adress">Telefon</label>
            <input type="text" class="i1" id="number" placeholder="Nummer.."/>

            <label for="pnummer">Personnumer *</label>
            <input type="text" class="i1" id="pnummer" placeholder="Personnumer.."/>

            <label for="adress"> Leveransadress *</label>
            <input type="text" class="i1" id="adress" placeholder="Adress.."/>

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
        <input type="checkbox" name="Kort" id="Kort"/>
        <label for="Kort">Kort</label> <i class="fas fa-credit-card"></i>

        <br></br>
        <br></br>
        <input placeholder="För- och efternamn" type="tel" name="nummer"/>

        <input type="tel" name="Kort" id="kort-1" placeholder="Visa/MasterCard Nummer"/>
        <br></br>
        <form action="">
            <br></br>
            <input placeholder="MM/ÅÅ" type="tel" name="expiry"/>
            <input placeholder="CVC" type="number" name="cvc"/>
        </form>

        <br></br>
        <br></br>
        <br></br>
        <input type="checkbox" name="Swish" id="Swish"/>
        <label for="Swish">Swish</label> <i class="fa fa-swish"><img class="swish" src="/Bilder/swish.ico" alt=""/></i>
        <input type="text" name="Swish" id="swish" placeholder="Nummer"/>

        <br></br>
        <br></br>
        <span class="faturaadress">
            <input type="checkbox" id="checkbox" name="checkbox"/>
            <label for="adress">Skicka till fakturaadressen</label>

        </span>
        <br></br>
        <br></br>
        

        <button onclick="myFunction1()" class="Nästa">Slutför</button>


    </div>
        
    
      
    )
  }
}

export default Checkout