import React, { useEffect, useState } from 'react';
import axios from './unused/axios';
import "./css/Paganation.css";


const Alluser = () => {
  const [mydata, setMydata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [setIsError] = useState('');
  


  const getAPI = async () => {
    try 
    {
      const res = await axios.get('/getalluser');
      setMydata(res.data);
    } 
    catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getAPI();
  }, []);

   









  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mydata.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (

<>

<div className='heading_style'>
  <nav id="navbar" class="navbar">
  <a class="navbar-brand" ><h2><b>Welcome </b></h2></a>
  </nav></div>

    <div className="container lg-6 table-bordered">
      <br />
      <br />
      <center>
      <h2>Your Database Entries:</h2>
      <br />

      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email-ID</th>
            <th>User Name</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((result, index) => (
            <tr key={index}>
              <td>{result.fname}</td>
              <td>{result.lname}</td>
              <td>{result.email}</td>
              <td>{result.uname}</td>
              <td>{result.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
<br/>
     
      <div className="pagination">
      <button type='submit' onClick={goToPreviousPage} disabled={currentPage === 1}>
          {'<'}
        </button><br/><br/><br/><br/>

        {mydata.length > itemsPerPage && (
         <h4> 
            {Array.from({ length: Math.ceil(mydata.length / itemsPerPage) }, (_, index) => (
             <span key={index} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
                {index + 1}
              </span>
            ))}
         </h4>
       
        )}
        
         <button type='submit' onClick={goToNextPage} disabled={currentPage === Math.ceil(mydata.length / itemsPerPage)}
          >{'>'}

</button>
        
      </div></center>
    </div></>
    
  );
};

export default Alluser;
