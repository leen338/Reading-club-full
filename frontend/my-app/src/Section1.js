export default function Sec({state}){
    return(
      <div className="headerOfSec1">
        <div className="navOfSec1">
          <h2 className="The-Title-Of-Section" style={{color:state ? "#e2dfe4" :"#1E1B4B",  fontFamily: 'playpen',fontSize:" 27px" , transition:"0.3s"}}>
            Select your mood :
          </h2>
          <div className="sel">
             <select className="sel2">
              <option>
                normal
              </option>
              <option>
                happy
              </option>
              <option>
                sad
              </option>
              <option>
                angry
              </option>
              {/* <option>
                normal
              </option>
              <option>
                normal
              </option>
              <option>
                normal
              </option>
              <option>
                normal
              </option> */}
             </select>
          </div>
         
        </div>
        <div>
        <a href="###" className="view" style={{color:state ? "#e2dfe4" :"#1E1B4B"}} >
            view all
        </a>
        </div>
      </div>
    );
}