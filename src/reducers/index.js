import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import indecrementReducer from 'containers/home/modules'
import loginReducer from 'containers/loginForm/modules'

export default combineReducers({
  routing: routerReducer,
  counter: indecrementReducer,
  loginData: loginReducer,
})