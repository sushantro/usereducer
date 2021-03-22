
const reducer=(state,action)=>{
    if (action.type==="inc"){
        return state+1
    }else{
        return state-1
    }

}
export default reducer;