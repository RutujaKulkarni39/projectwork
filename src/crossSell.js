import React from 'react'
import CrosssellTable from './crosssellTable'
import Navbar from './Navbar'


const CrossSell = () => {
  return (
    <div>
    <div class='row'>
    <div class='col-2'><br/><br/><br/><br/>
    <Navbar/></div>
    <div class = 'col-9'>
    <div className='spacing'>
    <h2>Customer Type : HNI / Upper Middle / Middle / Lower Middle</h2>
    </div>
    <div className='Cbox'><center><br/>
    <h2>Cross Sell</h2>
      <hr/>
      <div class='row'>
      <div class="col-6">
     <h2>Customer Type   <br/> <br/>
         State   <br/> <br/>
         Month    <br/> <br/>
         LOB Selection  <br/> <br/>
         Location  <br/> <br/>
         Target LOB   </h2> <br/> <br/>

        </div>
        <div class="col-3">
        <input type="text"/><br/><br/>
        <input type="text"/><br/><br/>
        <input type="text"/><br/><br/>
        <input type="text"/><br/><br/>
        <input type="text"/><br/><br/>
        <input type="text"/><br/><br/>
        </div>
     </div>
    </center>
     </div>
<CrosssellTable/>
</div></div></div>
  )
}

export default CrossSell
