import React, { useContext, useEffect, useState} from 'react';
import img from '../logo/wings.png';
import Logincontext from '../context/Logincontext';
import "../css/App.css";

import axios from "../unused/axios";
import { useNavigate } from 'react-router-dom';


function Password() {

 
  const navigate = useNavigate();
  
  const [password, setPassword] = useState('');
  const {uname} = useContext(Logincontext);
  

  
  const handlepassword = (e) => {
    console.log(e.target.value)
    setPassword(e.target.value);
  }

 

  const handleSubmit = (e)=>{
    e.preventDefault()
    
    axios.post("/plogin",{
    uname : uname,
    password:password,
     
    })
    
    .then((response)=>{
     console.log("login successfully")

      navigate('/dashboard')
    
    })
    .catch((err)=>{
      console.log(err)
      console.log(err.response)
      alert("Invalid Password")
    })


  
  }

  // useEffect(()=>{

  //       const Name = localStorage.getItem(uname);
  //       console.log(uname);
  //     setUname(Name);

  // },[])


  return (
    <div className='loginpage'>         

    <img src= {img} alt='wings'/>
    <div className='form1'>
    
      <form id='form' onSubmit={handleSubmit}>
      <div className='log'><div class="container-fluid">
      <div class="row"><div class ="row-sm-0 col-md-0">
      <a class="link-no-underline" href="/otp"><h1>&larr;</h1></a><div class="col-sm-0 col-md-0">Login With Password</div></div></div></div></div><center>
      <label style={{ display: 'block', fontFamily:"'system-ui,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif'" }}>
       <span style={{ display: 'block', marginBottom: '0.5rem'}}></span>
       <label htmlFor="exampleInputEmail1" className="form-label">
                 
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder='password'
                  id=""
                  name=""
                  aria-describedby=""
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              
        

               
       </label>
       <label style={{ display: 'block', fontFamily: "'Indie Flower', Times New Roman" }}>
       <span style={{ display: 'block', marginBottom: '0.5rem'}}></span>
       </label>
      <br />
     
      <button type="submit">Login</button>
     <br/><br/><label style={{ color : 'gray'}}>
     <h6> Forget Password ?<a class="link-no-underline" href="/reset">Reset</a></h6></label>     
   </center></form></div> 
    </div>
  );
}

export default Password;






