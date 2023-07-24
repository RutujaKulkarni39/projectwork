import React, { useEffect, useState } from 'react'
import Renewaltable from './Renewaltable'
import Navbar from './Navbar'

const Locationwise = () => {
  let [user,setUser] = useState([])
  // useEffect(()=>{
  //   fetch("API URL") 
  //   .then((res)=>{return res.json()}).then((data)=>{
  //     setUser(data.Users)
  //   })
  // },[])

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
      <th>Location Wise<br/>(Top 5)</th>
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
      {user.map((result)=>(
      <tr className ="table-Success">
      <td className ="table-Success">{result.locationwise}</td>
      <td className ="table-Success">{result.ytd}</td><br></br><br></br>
      <td className ="table-Success">{result.lytd}</td>
      <td className ="table-Success">{result.growth}</td>
      <td className ="table-Success">{result.mtd}</td>
      <td className ="table-Success">{result.lmtd}</td>
      <td className ="table-Success">{result.growth}</td>
      <td className ="table-Success">{result.yest_premium}</td>
      <td className ="table-Success">{result.monthlytarget}</td>
      <td className ="table-Success">{result.monachieve}</td>
      </tr>
          
          ))}
         
      
       </table>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Locationwise
