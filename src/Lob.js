import React from 'react'
import Navbar from './Navbar'
import Renewaltable from './Renewaltable'

const Lob = () => {
  return (
    <div>
    <div class='row'>
    <div class='col-2'><br/><br/><br/><br/>
    <Navbar/></div>
    <div class = 'col-9'>
    <Renewaltable/>
    <div className='table2'>
    <table class="table table-bordered">
      <tbody>
      <tr class="table-primary">
      <th>LOB Name<br/>(Top 5)</th>
      <th>YTD</th>
      <th>LYTD</th>
      <th>Growth</th>
      <th>MTD</th>
      <th>LMTD</th>
      <th>Growth</th>
      <th>Yesterday<br/>Premium</th>
      <th>Monthly<br/> Target </th>
      <th>Monthly<br/> Achievement % (MTD)</th>
      </tr>
      </tbody>
      
      </table>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Lob
