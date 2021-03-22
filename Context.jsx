import  React, { useReducer } from "react"
import reducer from "./Cartre"
// const reducer=(state,action)=>{
//     if (action.type==="inc"){
//         return state+1;
//     }else{
//         return state-1
//     }
//     return state;
// }
// const Context=()=>{

//  const[state,dispatch]= useReducer(reducer,0)
//     return(
//         <>
//         <p>{state}</p>
//         <div className="rtg">
//             {/* <button onClick={()=>dispatch({type:'inc',})}>inc</button>
//             <button onClick={()=>dispatch({type:'dec',})}>dec</button> */}
//             <button onClick={()=>dispatch({type:"inc"})}>inc</button>

//         </div>

//         </>
//     )
// }
// const reducer=(state,action)=>{
//     if (action.type==="inc"){
//         return state+1
//     }else{
//         return state-1
//     }

// }
const Context=()=>{
    const [state,dispatch]=useReducer(reducer,0)
    return(
        <>
        <p>{state}</p>
        <div className="rtg">
            <button onClick={()=>dispatch({type:"inc"})}>inc</button>
        </div>
        </>
    )
}
export default Context;