import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import indecrement from './indecrement'

export default combineReducers({
  routing: routerReducer,
  counter: indecrement
})