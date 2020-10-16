import {GET_CATALOGS} from '../types'

const initialState = {
    catalogs:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_CATALOGS:
        return {
            ...state,
            catalogs:action.payload,
            loading:false

        }
        default: return state
    }

}