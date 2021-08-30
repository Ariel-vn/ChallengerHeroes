import { types } from "../types/types";


export const heroReducers=(state=[],action)=>{
    switch (action.type) {
        case types.addtHero:
            if (state.length<6) {
                return [
                    ...state, action.payload
                ]
            }else{
                return state;
            }
            
            
            
    
        default:
            return state;
    }

}