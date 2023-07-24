import React, { useContext, useState} from 'react';
import logo from '../logo/logo.jpg';
import { Link } from 'react-router-dom';
import "../css/App.css";
import Googlelogin from './Googlelogin';
import axios from '../unused/axios';
import { useNavigate } from 'react-router-dom';
import Logincontext from '../context/Logincontext';

function Login() {

  const {uname,setUname}= useContext(Logincontext);
  const [isChecked, setIsChecked] = useState(false);
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  }

  const handleUname = (e) => {
    setUname(e.target.value);
  }

  const handlePassword= (e) => { 
    setPassword(e.target.value);
  }


  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.post("/login",{
    uname : uname,
    password : password,
     
    })

    .then((response)=>{
      console.log(response.data)
      console.log(response)
      navigate('/dashboard')
      localStorage.setItem('uname',(response.data.uname))
      localStorage.setItem('token',JSON.stringify(response.data.auth))
    
    })
    .catch((err)=>{
      console.log(err)
      console.log(err.response)
      alert("Invalid username or password")
    })
    
  }


  return (
    <div className='loginpage'>
    <img src= {logo} alt='logo'/>
    <div className='form1'>
      <form id='form' onSubmit={handleSubmit }>
      <div className='log'>Log In</div>
      <label style={{ display: 'block', fontFamily:"'Times New Roman', Times, serif" }}>
      <span style={{ display: 'block', marginBottom: '0.5rem'}}></span>
      <label htmlFor="exampleInputEmail1" className="form-label">
                 
                </label>
              
                <input
                  type="text"
                  className='input1'
                  placeholder='User name'
                  id=""
                  name=""
                  aria-describedby=""
                  required
                  value={uname}
                  onChange={handleUname}
                />     <br/><br/>  
                  <input
                  type="text"
                  className='input1'
                  placeholder='password'
                  id=""
                  name=""
                  aria-describedby=""
                  required
                  value={password}
                  onChange={handlePassword}
                />                 
       </label>
       <label style={{display: 'block', fontFamily:"'system-ui,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif'" }}>
       <span style={{ display: 'block', marginBottom: '0.5rem'}}></span>
       </label>
      <br />
      
      <label style={{ fontSize: '20px', color: "gray",fontFamily:"'system-ui,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif'" }}><div className='required'><input type="checkbox"  aria-describedby=""
                 required checked={isChecked} onChange={handleCheckboxChange}/> By Signing in to Wwings Technology, You agree with the <Link to = './privacy' style={{textDecoration: 'none'}}> privacy Policy </Link>  and <Link to ='./terms' style={{textDecoration: 'none'}}>Terms of Use</Link></div></label>        
      <br />
      <button type="submit">Proceed</button>
     <br/><br/>
     <label style={{ color : 'gray'}}>
     <center><h6>OR</h6></center><br/></label>
     <Googlelogin/>
    
      

    </form></div>
  
    
    </div>
  );
 
}

export default Login;