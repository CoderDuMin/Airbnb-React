import { CHANGE_ENTIRE_TYPE } from "./constants";

const initState = {
  entireType:[]
}
function reducer(state=initState,action){
  switch(action.type){
    case CHANGE_ENTIRE_TYPE:
      return {...state,entireType:action.entireType};
    default:
      return state
  }
}

export default reducer