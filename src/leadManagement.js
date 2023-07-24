import React from 'react'
import Navbar from './Navbar'
import Header from './Header'

const Leadmanagement = () => {
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
      
      <th>Name</th>
      <th>City</th>
      <th>Reference</th>
      <th>LOB</th>
      <th>Notes</th>
      <th>Phone #</th>
      <th>Follow-up<br/>Start Date</th>
      <th>Follow-up<br/>End Date</th>
     
     
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

export default Leadmanagement
