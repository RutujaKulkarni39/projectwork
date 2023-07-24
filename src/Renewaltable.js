import React from 'react'
import { Link } from 'react-router-dom'
const Renewaltable = () => {
  return (
    <div>
    <div className='container'>
       <div className='table1'> 
     
       <table class="table table-bordered">
       <tbody>
       <tr class="table-primary table-bordered">
       <th><Link class= "link-no-underline" to="/renewal" >New/Renewal</Link></th>
       <th><Link class= "link-no-underline" to="/lob" >LOB</Link></th>
       <th><Link class= "link-no-underline" to="/insurancecompany">Insurance Company</Link></th>
       <th><Link class= "link-no-underline"  to="/teamwise" >Sales Team Wise</Link></th>
       <th><Link class= "link-no-underline" to="/locationwise" >Location Wise</Link></th>
       <th><Link class= "link-no-underline" to="/partnerwise" >Partner Wise</Link></th>
       </tr>
       </tbody>
       </table>
       </div>
      </div>
    </div>
  )
}

export default Renewaltable
