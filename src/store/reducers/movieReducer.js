import {GET_MOVIES, MOVIES_SUCCESS} from '../types'

const initialState = {
    movies:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_MOVIES:
        return {
            ...state,
            loading:true

        }
        case MOVIES_SUCCESS:
        return {
            ...state,
            movies:action.payload,
            loading:false

        }
        default: return state
    }

}