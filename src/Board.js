import React, { useContext } from 'react'
import logo from './logo/logo.jpg';
import './css/dashboard.css';
import Navbar from './Navbar';
import Logincontext from './context/Logincontext';
import Profilephoto from './profilePhoto';
import { Link } from 'react-router-dom';
import Dashboardtable from './boardTable';


const Dashboard = () => {

// const uname  = useContext(Logincontext)
let name=localStorage.getItem('uname');
  return (
  <>


  <div class="row">
  <div class="col-2">
  <img src = {logo}  alt="Logo" width="10%"/></div>
  <div class="col-3">
  <br/>
    <h2>Welcome{" "+name}</h2>
    </div>
    <div class="col-7"> 
    <div className='heading_style'>
    <nav id="navbar" class="nav justify-content-end">
  
    <div class="nav"> 
    <Link class="nav-link" to="/generalinsurance" ><h4><button>General Insurance</button></h4></Link>
    <Link class="nav-link" to="/lifeinsurance"><h4><button>Life Insurance</button></h4></Link>
    <Link class="nav-link" to="/loan"><h4><button>Loan</button></h4></Link>
    <Link class="nav-link" to="/mfund"><h4><button>Mutual Fund</button></h4></Link>
   <Profilephoto/>
    </div></nav></div></div></div>
    <div class="row">
  <div class="col-2">
  <Navbar/></div>
  
 
   <div class="col-9"> 
 <Dashboardtable/></div>
 
 </div>
   </>
  
  
  )
}

export default Dashboard

