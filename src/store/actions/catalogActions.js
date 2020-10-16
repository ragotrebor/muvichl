import {GET_CATALOGS, CATALOGS_ERROR} from '../types'
import axios from 'axios'

export const getCatalogs = () => async dispatch => {
    
    try{
        const res = await axios.get(`https://api.redsalas.cl/api/vod-catalogs`)
        dispatch( {
            type: GET_CATALOGS,
            payload: res.data.data
        })
    }
    catch(e){
        dispatch( {
            type: CATALOGS_ERROR,
            payload: console.log(e),
        })
    }

}