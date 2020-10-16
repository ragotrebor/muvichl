import { combineReducers } from 'redux'
import catalogReducer from './catalogReducer'
import movieReducer from './movieReducer'

export default combineReducers({
  catalogs: catalogReducer,
  movies: movieReducer,
})