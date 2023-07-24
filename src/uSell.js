import React from 'react'
import UpsellTable from './upsellTable'
import Navbar from './Navbar'

const Upsell = () => {
  return (
    <div>

<div class='row'>
    <div class='col-2'><br/><br/><br/><br/>
    <Navbar/></div>
    <div class = 'col-9'>


    <div className='spacing'>
      <h2>Customer Type : HNI / Upper Middle / Middle / Lower Middle</h2>
      </div>
      <div className='Ubox'><center><br/>
      <h2>Up Sell</h2>
      <hr/>
      <div class='row'>
      <div class="col-6">
      <h2>Customer Type   <br/><br/>
          State   <br/><br/>
          Month    <br/><br/>
          Sum Insured Range <br/><br/>
          Location  <br/><br/>
          Policy Type  </h2> <br/><br/>

        </div>
        <div class="col-3">
        <input type="text"/><br/><br/>
        <input type="text"/><br/><br/>
        <input type="text"/><br/><br/>
        <input type="text"/><br/><br/>
        <input type="text"/><br/><br/>
        <input type="text" placeholder='Floater/Non-Floater'/><br/><br/>
        </div>
     </div>
    </center>
     </div>
     <br/><br/>
     <UpsellTable/>
    </div>






    </div>
    </div>






      

  )
}

export default Upsell
