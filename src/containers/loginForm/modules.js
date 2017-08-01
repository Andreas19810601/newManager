import axios from 'axios'
import { push } from 'react-router-redux'

const SET_USER_DATA = 'login/SET_USER_DATA'
const SET_USER_LOGIN_REQUESTED = 'login/SET_USER_LOGIN_REQUESTED'
const SET_USER_LOGIN_DATA = 'login/SET_USER_LOGIN_DATA'

const initialState = {
    userName: null,
    userPassword: null,
    userDisplayName: null,
    userRole: null,
    userId: null,
    userSessionId: null,
    isLoginRequested: false
}

export const setUserData = (userDisplayName, userName, userPassword, userRole) => ({
    type: SET_USER_DATA,
    userDisplayName,
    userName,
    userPassword,
    userRole
})


export const setUserLoginData = (field, value) => {
    return dispatch => {
        dispatch({
            type: SET_USER_LOGIN_DATA,
            field,
            value
        })
    }
}


export const setUserLogin = (p) => {
    return async dispatch => {
        dispatch({
            type: SET_USER_LOGIN_REQUESTED
        })
        const res = await axios.post('/api', {
            username: p.userName,
            password: p.userPassword
        })
        console.log(p.password)
        if (res.data.successful) {
            dispatch(
                setUserData(
                    res.data.user.displayName,
                    p.userName,
                    p.userPassword,
                    res.data.user.role
                )
            )
            dispatch(push('/about-us')) //TODO switch Statement ASYNC with userRole
        } else {
            console.log('If ist falsch')
        }
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                userDisplayName: action.userDisplayName,
                userPassword: action.userPassword,
                userName: action.userName,
                userRole: action.userRole,
                isLoginRequested: false,
            }

        case SET_USER_LOGIN_REQUESTED:
            return {
                ...state,
                isLoginRequested: true
            }

            case SET_USER_LOGIN_DATA:
                return {
                    ...state,
                    [action.field]:action.value,
                }

        default:
            return state
    }
}
