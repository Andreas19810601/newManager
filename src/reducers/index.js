import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import loginReducer from 'containers/loginForm/modules'

export default combineReducers({
    routing: routerReducer,
    loginData: loginReducer
})
