
// import "./Section2.css";
export default function Sec2({state}){
    return(
     <div>
    <div className="sec2"  style={{color:state ?   "#e2dfe4":"#1E1B4B" , transition:"0.3s" }}>
      Our Book Types
    </div>
    
    </div>
    );
}