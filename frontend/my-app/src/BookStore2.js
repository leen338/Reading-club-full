import Imgp1 from "./images/photo1.png"
import Imgp2 from "./images/photo2.png"
import Imgp4 from "./images/photo4.png"
import Imgp5 from "./images/photo5.png"
export default function Hero({setpage,state}){
    function go_to_chat(){
     setpage("chat");
    }
    return(
   <div>
    <div  className="para1">
       <div className="ph14">
            <img className="photo11" src={Imgp1} alt="ph1" />
            <div   className="par1"style={{color:state ? "#e2dfe4" :"#1E1B4B",fontSize:" 43px",fontFamily: "playpen",marginTop:" 6%" , transition:"0.3s"}}>
                 Welcome to our world
                <div className="par2">
                   Reading Club
                </div>
            </div>
            <img className="photo22" src={Imgp2} alt="ph2" />
       </div>
        <p className="par3" style={{color:state ? "#e2dfe4" :"#1E1B4B",fontFamily: "playpen",textAlign: "center",paddingLeft:"10%" ,paddingRight: "10%"
 , transition:"0.3s"}}>
           Find and read more your'll love, and keep track of the books you want to read.<br/> Be part of the word's largeest community of book lovers on Goodreads.
         </p>
       <div className="Butt ph25">
         <img className="photo44" src={Imgp4} alt="ph4" />
          <button className="button1" onClick={go_to_chat}>
               Chatting 📲
           </button>
            <img className="photo55" src={Imgp5} alt="ph5" />
          
       </div>
    </div>
   </div>
    );
}