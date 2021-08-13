import { types } from "../types/types";


export const heroReducers=(state=[],action)=>{
    switch (action.type) {
        case types.addtHero:
            return[
                ...state, action.payload
            ]
            
            
    
        default:
            return state;
    }

}