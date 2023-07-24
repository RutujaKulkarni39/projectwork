import React, { useState } from "react";

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css' 

import Login from "./Login/Login";
import Googlelogin from "./Login/Googlelogin";
import Text from "./unused/Text";
import Alluser from "./allUser";
import Password from "./Login/Password";
import Otplogin from "./Login/Otplogin";
import Logincontext from "./context/Logincontext";
import Reports from "./Reports";
import Profile from "./Profile";
import LifeInsurance from "./lifeInsurance";
import Loan from "./loan";
import MutualFund from "./mutualFund";
import KnowledgeCentre from "./KnowledgeCentre";
import CrossSell from "./crossSell";
import Upsell from "./uSell";
import RenewalTracking from "./renewalTracking";
import CustomerSingleView from "./customerSingleView";
import InsuranceNeeds from "./insuranceNeeds";
import Claims from "./claims";
import Transactions from "./transactions";
import Leadmanagement from "./leadManagement";
import Dashboard from "./Board";
import Dashboardtable from "./boardTable";
import GeneralInsurance from "./Insurance";
import Renewal from "./Renewal";
import Lob from "./Lob";
import Saleswise from "./Saleswise";
import Partnerwise from "./Partnerwise";
import Insurancecompany from "./Insurancecompany";
import Locationwise from "./locationwise";








const App =()=>{
    const [uname,setUname] = useState();
    return(
        <>
            <Logincontext.Provider value={{uname,setUname}}>
            <Router>
                <Routes>
                  
                    <Route exact path = '/' element={<Login/>}></Route>
                    <Route exact path="/googlelogin" element={<Googlelogin/>}></Route>  
                    <Route exact path="/text" element={<Text/>}></Route>      
                    <Route exact path="/alluser" element={<Alluser/>}></Route>    
                    <Route exact path="/password" element={<Password/>}></Route>                                                                                                    
                    <Route exact path="/otp" element={<Otplogin/>}></Route>     
                    <Route exact path="/dashboard" element={<Dashboard/>}></Route>   
                    <Route exact path="/dashboardtable" element={<Dashboardtable/>}></Route>   
                    <Route exact path="/generalinsurance" element={<GeneralInsurance/>}></Route>
                    <Route exact path="/lifeinsurance" element={<LifeInsurance/>}></Route>
                    <Route exact path="/loan" element={<Loan/>}></Route>
                    <Route exact path="/mfund" element={<MutualFund/>}></Route>  
                    <Route exact path="/profile" element={<Profile/>}></Route>   
                    <Route exact path="/reports" element={<Reports/>}></Route>   
                    <Route exact path="/crosssell" element={<CrossSell/>}></Route>    
                    <Route exact path="/upsell" element={<Upsell/>}></Route>   
                    <Route exact path="/lead" element={<Leadmanagement/>}></Route>   
                    <Route exact path="/knowledgecentre" element={<KnowledgeCentre/>}></Route>  
                    <Route exact path="/Renewaltracking" element={<RenewalTracking/>}></Route>   
                    <Route exact path="/customersingleview" element={<CustomerSingleView/>}></Route>   
                    <Route exact path="/insuranceneeds" element={<InsuranceNeeds/>}></Route>   
                    <Route exact path="/claims" element={<Claims/>}></Route>  
                    <Route exact path="/transactions" element={<Transactions/>}></Route>   
                    <Route exact path="/insurancecompany" element={<Insurancecompany/>}></Route>   
                    <Route exact path="/renewal" element={<Renewal/>}></Route>   
                    <Route exact path="/lob" element={<Lob/>}></Route>   
                    <Route exact path="/teamwise" element={<Saleswise/>}></Route>   
                    <Route exact path="/locationwise" element={<Locationwise/>}></Route>   
                    <Route exact path="/partnerwise" element={<Partnerwise/>}></Route>   
                                                                                                          
                </Routes>
                    

            </Router>
            </Logincontext.Provider>
        </>
        
    )
}


export default App
