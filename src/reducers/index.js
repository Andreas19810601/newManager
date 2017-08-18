import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import loginReducer from 'containers/loginForm/modules'
import managerListReducer from 'containers/managerList/modules'

export default combineReducers({
    routing: routerReducer,
    loginData: loginReducer,
    managerListData: managerListReducer,
})
