import {BUSCAR} from '../types/pinterestTypes';

const INITIAL_STATE={
    users: [],
    cargando:false, 
    error:''
}
export default function (state = INITIAL_STATE,action) {
    switch(action.type){
        case BUSCAR:
            return {
                ...state,
                users: action.payload.data
                }
        default:
            return state;
    }
}