import React from "react"
import { useNavigate } from "react-router-dom"

const Googlelogin = () => {

  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault()
    navigate('/alluser')
   
  }
    return (

    <div>
    
    <center>     
   
    <form  action="http://localhost:8000/api/google">
    
         <button className='button' type="submit" >
         <span className="ab q">
         <svg width={40} height={30} className='sb l'> 
         <g fill="none" fill-rule="evenodd">
        <path d="M20.66 12.7c0-.61-.05-1.19-.15-1.74H12.5v3.28h4.58a3.91 3.91 0 0 1-1.7 2.57v2.13h2.74a8.27 8.27 0 0 0 2.54-6.24z" fill="#4285f4"/>
        <path d="M12.5 21a8.1 8.1 0 0 0 5.63-2.06l-2.75-2.13a5.1 5.1 0 0 1-2.88.8 5.06 5.06 0 0 1-4.76-3.5H4.9v2.2A8.5 8.5 0 0 0 12.5 21z" fill="#34A853"/>
        <path d="M7.74 14.12a5.11 5.11 0 0 1 0-3.23v-2.2H4.9A8.49 8.49 0 0 0 4 12.5c0 1.37.33 2.67.9 3.82l2.84-2.2z" fill="#FBBC05"/>
        <path d="M12.5 7.38a4.6 4.6 0 0 1 3.25 1.27l2.44-2.44A8.17 8.17 0 0 0 12.5 4a8.5 8.5 0 0 0-7.6 4.68l2.84 2.2a5.06 5.06 0 0 1 4.76-3.5z" fill ="#ea4335"></path></g>
        </svg>
        </span>
        <span className="">sign in with Google</span>
        </button>
        <br></br><br/>
        <button className='button' type="submit">
        <span className="ab q">
        <svg width={40} height={30} className='sb l'>
          <path fill="#F25022" d="M15.2,14.1h4.5v4.5h-4.5V14.1z"/>
          <path fill="#7FBA00" d="M6.7,14.1h4.5v4.5H6.7V14.1z"/>
          <path fill="#00A4EF" d="M15.2,5.6h4.5v4.5h-4.5V5.6z"/>
          <path fill="#FFB900" d="M6.7,5.6h4.5v4.5H6.7V5.6z"/>
        </svg>
      </span>
      <span className="">sign in with Microsoft</span>
    </button>
       </form>
     </center>  
    <br/>
 </div>

    )
}



export default Googlelogin
