import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoon,faSun} from '@fortawesome/free-solid-svg-icons';
import './nav.css'
import { useState } from 'react';

export default function Nav( { setpage,setstate,state}){
 
  
  function gotoSignin(){
    setpage('signin');
  }
   function goToHome() {
    setpage('home');
  }
   function gotosignup() {
    setpage('signup');
  }
  function gotoabout(){
    setpage('about')
  }
  function moon_mode(){
setstate(true);

  }
  function sun_mode(){
setstate(false);

  }

    return(
      <div style={{fontFamily:"playpen",backgroundColor:state ? "#1D1845" : "#eaddf9", transition:"0.3s"}} >
       <nav className="navbar navbar-expand-lg" >
  <div className="container-fluid">
    <h2 className="navbar-brand" style={{color:state ? "#e2dfe4" :"#2E1B4B " , transition:"0.3s"}} >BOOKS</h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" 
    style={{color:state ? "#e2dfe4" :"#2E1B4B " , transition:"0.3s"}}>
      <span className="navbar-toggler-icon" style={{color:state ? "#e2dfe4" :"#2E1B4B "}}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <button className="nav-link active" aria-current="page" href="#"  onClick={goToHome} style={{color:state ? "#e2dfe4" :"#1E1B4B" , transition:"0.3s" }}>Home</button>
        </li>
        <li className="nav-item">
          <button  className="nav-link" href="#" style={{color:state ? "#e2dfe4" :"#1E1B4B" , transition:"0.3s"}}>Shop</button>
        </li>
                <li className="nav-item">
          <button  className="nav-link" href="#" onClick={gotoabout} style={{color:state ? "#e2dfe4" :"#1E1B4B" , transition:"0.3s" }}>About</button>
        </li>

        <li className="nav-item">
          <button  className="nav-link" href="#" onClick={gotoSignin} style={{color:state ? "#e2dfe4" :"#1E1B4B" , transition:"0.3s" }}>Sign in</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={gotosignup}  style={{color:state ? "#e2dfe4" :"#1E1B4B" , transition:"0.3s" }}>Sign up</button>
        </li>
        
      </ul>
      <div class="d-flex" role="search" style={{listStyleType:"none" , paddingLeft:"20px"}}>
         <li className="nav-item">
           <div style={{display:"flex",justifyContent:"center",width:"10%",marginRight:"20px"}}>
             <button style={{color:state ? "#e2dfe4" :"#1E1B4B" ,border:"none",background:"none" , transition:"0.3s"}} onClick={moon_mode}> <FontAwesomeIcon icon={faMoon}  style={{fontSize:"20px"}}/></button>
           </div>
        </li>
        <li className="nav-item">
           <div style={{display:"flex",justifyContent:"center",width:"10%",marginRight:"20px"}}>
            <button style={{color:state ? "#e2dfe4" :"#1E1B4B" ,border:"none",background:"none" , transition:"0.3s"}} onClick={sun_mode}><FontAwesomeIcon icon={faSun} style={{fontSize:"20px"}}/></button>
           </div>
        </li>
      </div>
    </div>
  </div>
</nav>
</div>
    )
}