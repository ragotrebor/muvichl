import {GET_MOVIES, MOVIES_ERROR, MOVIES_SUCCESS} from '../types'
import axios from 'axios'

export const getMovies= (catalogId) => async dispatch => {
    dispatch( {
        type: GET_MOVIES
    });
    if (catalogId === -1) {
        dispatch( {
            type: MOVIES_SUCCESS,
            payload: [],
        });
    } else {
        try{
            const res = await axios.get(`https://api.redsalas.cl/api/vod-catalogs/`+catalogId)
            dispatch( {
                type: MOVIES_SUCCESS,
                payload: res.data.data.movies,
            })
        }
        catch(e){
            dispatch( {
                type: MOVIES_ERROR,
                payload: console.log(e),
            })
        }
    }
    

}