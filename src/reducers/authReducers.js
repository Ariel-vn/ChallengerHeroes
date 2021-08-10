import { types } from "../types/types";


export const authReducers = (state={},action) => {
    switch (action.type) {
        case types.login:
            return{
                ...state,
                logged:true
            }
        case types.logout:
            return{
                ...state,
                logged:false
            }
            
    
        default:
            return state;
    }

    
}
