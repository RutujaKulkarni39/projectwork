import React from 'react'
import Navbar from './Navbar'
import Header from './Header'

const RenewalTracking = () => {

  
  return (
    <div>
       <div class='row'>
    <div class='col-2'><br/><br/><br/><br/>
    <Navbar/></div>
    <div class = 'col-9'>


    <br/><br/><br/><br/>
    <Header/>
    <br/>
<div className='table1'>
    <table class="table table-bordered">
      <tbody>
      <tr class="table-primary">
      
      <th>Client <br/> Name</th>
      <th>Client <br/> Phone#</th>
      <th>Reference</th>
      <th>LOB</th>
      <th>Renewal <br/>Premium</th>
      <th>Policy<br/>Expirary<br/>Date</th>
      <th>Notes</th>
      <th>Start <br/>Date</th>
      <th>End <br/>Date</th>
     
     
      </tr>
      </tbody>
      <td>.</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      </table>
      </div>









    </div>
    </div>
    </div>
  )
}

export default RenewalTracking
