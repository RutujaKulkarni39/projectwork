
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <div>
<div class="row">
    
<nav>
  
 
    <div class="nav nav-pills flex-column">
  
    
    <div class="space">
   
    <Link class="nav-link" to="/profile"><h4><button className='button1' >My Profile</button></h4></Link>
    <Link class="nav-link" to="/reports" ><h4><button className='button1'>Reports</button></h4></Link>
    <Link class="nav-link" to="/crossSell"><h4><button className='button3' >Cross Sell</button></h4></Link>
    <Link class="nav-link" to="/upSell"><h4><button className='button4' >up sell</button></h4></Link>
    <Link class="nav-link" to="/lead"><h4><button className='button5' >Lead Management System</button></h4></Link>
    <Link class="nav-link" to="/knowledgecentre"><h4><button className='button6' >Knowledge Centre</button></h4></Link>
    <Link class="nav-link" to="/Renewaltracking"><h4><button className='button7' >Renewal Tracking</button></h4></Link>
    <Link class="nav-link" to="/customersingleview"><h4><button className='button8' >Single View of Customer</button></h4></Link>
    <Link class="nav-link" to="/insuranceneeds"><h4><button className='button9' >Calculate Insurance Needs</button></h4></Link>
    <Link class="nav-link" to="/claims"><h4><button className='button10' >Claims</button></h4></Link>
    <Link class="nav-link" to="/transactions"><h4><button className='button11' >Transanction</button></h4></Link>
    
</div>
 
</div>





</nav>
</div></div>
    </div>

   
  
  )
}

export default Navbar
