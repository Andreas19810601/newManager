import axios from 'axios'
import { push } from 'react-router-redux'

const SET_USER_DISPLAYNAME = 'login/SET_USER_DISPLAYNAME'
const SET_USER_ROLE = 'login/SET_USER_ROLE'
const SET_USER_NAME = 'login/SET_USER_NAME'
const SET_USER_LOGIN = 'login/SET_USER_LOGIN'
const SET_USER_PASSWORD = 'login/SET_USER_PASSWORD'

const initialState = {
    userName: null,
    userPassword: null,
    userDisplayName: null,
    userRole: null,
    userId: null,
    userSessionId: null,
    isLoginProof: false,
}


export const setUserDisplayName = (userDisplayName) => ({
  type: SET_USER_DISPLAYNAME,
  userDisplayName
})


export const setUserName = (userName) => ({
  type: SET_USER_NAME,
  userName
})


export const setUserPassword = (userPassword) => ({
  type: SET_USER_PASSWORD,
  userPassword
})


export const setUserRole = (userRole) => ({
  type: SET_USER_ROLE,
  userRole
})

export const setUserLogin = (p) => {
    return async dispatch => {
        dispatch({
            type: SET_USER_LOGIN
        })
        const res = await axios.post('/api', {
            username: p.identifier,
            password: p.password,
        })
        console.log(p.password)
        if (res.data.successful) {
            dispatch(setUserRole(res.data.user.role))
            dispatch(setUserName(p.identifier))
            dispatch(setUserDisplayName(res.data.user.displayName))
            dispatch(setUserPassword(p.password))
            dispatch(push('/about-us')) //TODO switch Statement ASYNC with userRole
        } else {
            console.log("If ist falsch")
        }
    }
}

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_PASSWORD:
            return {
                ...state,
                userPassword: action.userPassword
            }

        case SET_USER_LOGIN:
            return {
                ...state,
                isLoginProof: true
            }

        case SET_USER_DISPLAYNAME:
            return {
                ...state,
                userDisplayName: action.userDisplayName,
                isLoginProof: false
            }

        case SET_USER_NAME:
            return {
                ...state,
                userName: action.userName
            }

        case SET_USER_ROLE:
            return {
                ...state,
                userRole: action.userRole
            }

        default:
            return state
    }
}