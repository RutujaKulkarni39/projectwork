
import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
const GeneralInsurance = () => {
  return (
    <div>
  
   <div class='row'>
    <div class='col-2'><br/><br/><br/><br/>
    <Navbar/></div>
    <div class = 'col-9'>

    <div className='container'>


    <div className='table1'> 
    
    <Header/>
    <table class="table table-bordered bg-primary">
    <th>Premium(in Rupees)
    </th></table>
    <table class="table table-bordered">
    <tbody>
    <th>PREMIUM</th>
    <th>YTD</th>
    <th>LYTD</th>
    <th>Growth</th>
    <th>MTD</th>
    <th>LMTD</th>
    <th>Growth</th>
    <th>Yesterday<br/>  Premium</th>
    <tr class="table-primary table-bordered">
    <td>.</td>
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

    <br/>


    <table class="table table-bordered bg-info ">
    <th>NOP
    </th></table>
    <table class="table table-bordered">
    <tbody>
    <th>PREMIUM</th>
    <th>YTD</th>
    <th>LYTD</th>
    <th>Growth</th>
    <th>MTD</th>
    <th>LMTD</th>
    <th>Growth</th>
    <th>Yesterday<br/>  Premium</th>
    <tr class="table-info table-bordered">
    <td>.</td>
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


     <br/><br/>    
    
    <div class="row">
    <div class="col-6">
    <table class="table table-bordered bg-primary">
    <th>Renewals Due
    </th></table>
    <table class="table table-bordered">
    <tbody>
    <th  class="table-primary" >Client Name</th>
    <th class="table-primary">Renewal Due</th>
    <th class="table-primary">LOB</th>
    <th class="table-primary">Renewal Premium</th>
    <th class="table-primary">Reference Name</th>
    <tr class="table-light table-bordered">
    <td>.</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
    </tbody>
    </table>
    </div>
    
    <br/>


    <div class="col-6">
    <table class="table table-bordered bg-warning">
    <th>Renewals Lost
    </th></table>
    <table class="table table-bordered">
    <tbody>
    <th class="table-warning">Client Name</th>
    <th class="table-warning">Renewal Due</th>
    <th class="table-warning">LOB</th>
    <th class="table-warning">Renewal Premium</th>
    <th class="table-warning">Reference Name</th>
    <tr class="table-light table-bordered">
    <td>.</td>
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
    </div>
    </div>
    





    </div>
    </div>




      
      
  )
}

export default GeneralInsurance
