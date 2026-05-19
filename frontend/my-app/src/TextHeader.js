import Search from './Search';
import './header.css'
export default function Textheader({setstate,state}) {
    return(
        <div style={{width:'70%',display:'flex' ,flexDirection:'column',justifyContent:'center',alignContent:'center', alignItems:'center',paddingLeft:'26px',marginTop:'40px',marginBottom:"70px"}}>
<h1  className='move par text' style={{marginBottom:'20px',width:'100%' ,color:state ? "#e2dfe4" :"#1E1B4B",opacity:"0" , transition:"0.3s"}}>
Buy and Sell your books <span  className='par' style={{color:"#6366F1"}}>for the best <br/>prices</span>
</h1>
<p className='move par text1' style={{fontSize:"12px",width:'90%',opacity: "0",color:state ? "#e2dfe4" :"#1E1B4B" , transition:"0.3s"}}>
    Find and read more your'll love, and keep track of the books you want to read.<br/>
Be part of the word's largeest community of book lovers on Goodreads.
</p>

<Search/>
</div>
    );
    
}