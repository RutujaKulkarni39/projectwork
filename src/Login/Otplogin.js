import React from 'react';
import "../css/otp.css";
import img from '../logo/wings.png';
import  axios  from '../unused/axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


class Otplogin extends React.Component {




    constructor(props) {
    super(props);
    this.state = { value: '', otp1: "", otp2: "", otp3: "", otp4: "", otp5: "", disable: true };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(value1, event) 
  {

    this.setState({ [value1]: event.target.value });
  }

  handleSubmit(event)
  {

    const data = new FormData(event.target);
    console.log(this.state);
    event.preventDefault();
  }

  inputfocus = (elmnt) => 
  {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") 
    {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) 
      {

        elmnt.target.form.elements[next].focus()
      }
    }
    else 
    {
      console.log("next");
     
        const next = elmnt.target.tabIndex;
        if (next < 5) 
        {
          elmnt.target.form.elements[next].focus()
        }
    }


  }



 Otplogin = () => {
  const navigate = useNavigate();
  const [otp,setOtp] = useState("");

  //   const sendOtp = (e)=>{
  //     e.preventDefault();
  //   }

  //  if(email ===""){
    
  //  }


    
  const handleotp =(e)=>{
    setOtp(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    
    axios.post("/loginotp",{
     otp1 : otp
    })
    .then((response)=>{
      console.log(response.data)
      console.log(response)
      alert("OTP verified Successfully !")
      navigate('/home')
    
    })
    .catch((err)=>{
      console.log(err)
      console.log(err.response)
      alert("Invalid OTP")
    })
    
  }
}

  render()  
  {
    return (
      
      <div className='loginpage'>
      <div className='body'><center><img src= {img} alt='wings'/></center>
      <div className='form1'>
      
      <div class="container-fluid">
      <div class="row"><div class ="col-xs-6 col-md-6">
      <a class="link-no-underline" href="/"><h1>&larr;</h1></a></div><div class="col-xs-6 col-md-6"><label style={{ color : 'black'}}> <h2>OTP Login</h2></label></div></div></div>
      <div class="otp-input">
        <form onSubmit={this.handleSubmit}>
        <center>
          <input 
            name="otp1"
            type="text"
            autoComplete="off"
            value={this.state.otp1}
            onKeyPress={this.keyPressed}
            onChange={e => this.handleChange("otp1", e)}
            tabIndex="1" maxLength="1" onKeyUp={e => this.inputfocus(e)}
          
          />

          <input
            name="otp2"
            type="text"
            autoComplete="off"
            value={this.state.otp2}
            onChange={e => this.handleChange("otp2", e)}
            tabIndex="2" maxLength="1" onKeyUp={e => this.inputfocus(e)}

          />

          <input
            name="otp3"
            type="text"
            autoComplete="off"
            value={this.state.otp3}
            onChange={e => this.handleChange("otp3", e)}
            tabIndex="3" maxLength="1" onKeyUp={e => this.inputfocus(e)}

          />

          <input
            name="otp4"
            type="text"
            autoComplete="off"
            value={this.state.otp4}
            onChange={e => this.handleChange("otp4", e)}
            tabIndex="4" maxLength="1" onKeyUp={e => this.inputfocus(e)}
          />

           
     <br/><br/>
     <button type="submit">Submit</button><br/><br/>
     <a class="link-no-underline" href="/password">Login via password</a>

    </center>    

      </form></div></div></div></div>
    );
   
  }
}

export default Otplogin;