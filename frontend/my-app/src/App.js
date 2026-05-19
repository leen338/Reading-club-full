import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Nav from './Nav';
import Textheader from './TextHeader';
import ImgHeader from './ImgHeader'
import About from './About';
import Chat from './Chat'
import Sec from './Section1';
import'./Section1.css';
import Sec2 from './Section2';
import './Section2.css';
import Book from './Books';
import './Books.css';
import Types from './Section22';
import Sec3 from './section3.js';
import "./BookStore1.css";
import Hero from './BookStore2.js';
import'./BookStore2.css';
// import Sec4 from './mmm.js';
import './mainHeader.css';
import Comments from './commentsSection';
import './commentsSection.css';
function App() {
  const [page,setpage]=useState('home');
  const[state,setstate]=useState(false);
  
  return (
    <div className="App coloring" style={state === true ? { backgroundColor: "#1D1845" } : { backgroundColor: '#e9d5ff97' }}>
     
     <div>
    
      <div >
        {page === 'home' &&  <div>
            <Nav setpage={setpage} setstate={setstate}  state={state}/>
          <div className="Header"   style={state === true ? { backgroundColor: '#120E2E' } : { backgroundColor: '#dfc4fd' }}>
          
            <Textheader setstate={setstate}  state={state} />
            <ImgHeader/> 
          </div>

         <Hero setpage={setpage} state={state} /> 
         <Sec state={state} /> 
         <Book/>
        <Sec2/>
        <Types />
       <Sec3 state={state}/>
       {/* <Sec4/> */}
       <Comments state={state}/>
  
     <div>

     </div>
     </div> 
      
     }
        {page === 'signin' && <div> <Nav setpage={setpage} state={state} setstate={setstate}/> <Login   state={state}  setpage={setpage} field1="email" field2="password"  namebutton="Sign in" ><h2  style={{marginBottom:"20px"}}>welcom <br></br> to your Account </h2> 
            </Login> </div>}
        {page === 'signup' &&  <div> <Nav setpage={setpage} state={state} setstate={setstate}/> <Login   state={state}  setpage={setpage}  field1="email" field2="password" namebutton="Sign up" field3="name"> <h2 style={{marginBottom:"20px"}}>create <br></br> your account</h2></Login></div>}
        {page === "chat" &&<Chat setpage={setpage} state={state}/>}
        {page==='about'&&  <div> <Nav setpage={setpage} /> <About/> </div>}
      </div>
    </div>
    
    </div>
  );
}


export default App;