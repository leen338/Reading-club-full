import './commentsSection.css';
export default function Comments({state}){
    return(
     <div className="Comments">
         <div className="theTitleOfComments"   style={{color:state ? "#e2dfe4" :"#1E1B4B" , transition:"0.3s"}}>
            Our happy cutomers ✨
         </div>
         <div>

         </div>
     </div>
    );
}