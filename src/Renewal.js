import React from 'react'
import Renewaltable from './Renewaltable'
import Navbar from './Navbar'

const Renewal = () => {
  return (
    <>
    <div class='row'>
    <div class='col-2'><br/><br/><br/><br/>
    <Navbar/></div>
    <div class = 'col-9'>
    <Renewaltable/>
     <div className='table2'>
    <table class="table table-bordered">
      <tbody>
      <tr class="table bg-primary">
      <th>New/Renewal<br/>  Business</th>
      <th>YTD</th>
      <th>LYTD</th>
      <th>Growth</th>
      <th>MTD</th>
      <th>LMTD</th>
      <th>Growth</th>
      <th>% <br/> Contribution</th>
      
      </tr>
      </tbody>
      <tbody>
      <tr class="table-light">
      <th>New  (Premium)</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      
      </tr>
      <tr class="table-primary">
      <th>Renewal (Premium)</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      </tr>

     
      <tr class="table-light">
      <th>New (NOP)</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      </tr>

      
      <tr class="table-primary">
      <th>Renewal (NOP)</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      </tr>

      </tbody>
      


      </table>

    </div>
    </div>
    </div>
    </>
  )
}

export default Renewal
