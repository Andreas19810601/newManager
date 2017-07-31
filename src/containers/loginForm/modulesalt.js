import axios from 'axios'
import { push } from 'react-router-redux'

const SET_USER_DISPLAYNAME = 'login/SET_USER_DISPLAYNAME'
const SET_USER_ROLE = 'login/SET_USER_ROLE'
const SET_USER_NAME = 'login/SET_USER_NAME'
const SET_USER_LOGIN = 'login/SET_USER_LOGIN'
const SET_USER_PASSWORD = 'login/SET_USER_PASSWORD'
const SET_USER_DATA = 'login/SET_USER_DATA'
const SET_USER_LOGIN_REQUESTED = 'login/SET_USER_LOGIN_REQUESTED'

const initialState = {
    userName: null,
    userPassword: null,
    userDisplayName: null,
    userRole: null,
    userId: null,
    userSessionId: null,
    isLoginRequested: false
}

export const setUserData = (
    userDisplayName,
    userName,
    userPassword,
    userRole
) => ({
    type: SET_USER_DATA,
    userDisplayName,
    userName,
    userPassword,
    userRole
})

export const setUserLogin = ({ username, password }) => {
    return async dispatch => {
        dispatch({
            type: SET_USER_LOGIN_REQUESTED
        })
        const res = await axios.post('/api', {
            username: username,
            password: password
        })
        console.log(p.password)
        if (res.data.successful) {
            dispatch(
                setUserData(
                    res.data.user.displayName,
                    p.identifier,
                    p.password,
                    res.data.user.role
                )
            )
            dispatch(push('/about-us')) //TODO switch Statement ASYNC with userRole
        } else {
            console.log('If ist falsch')
        }
    }
}

/*
export const setUserLoginData = (field, value) => {

dispatch({
    type: 'SET_USER_LOGIN_DATA',
    field: field,
    value: value
})

this.props.setUserLoginData('username', 'jk')
*/

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_LOGIN_DATA':
            return {
                ...state,
                [action.field]: action.value // username: 'jk'
            }
        case SET_USER_DATA:
            return {
                ...state,
                userDisplayName: action.userDisplayName,
                userPassword: action.userPassword,
                userName: action.userName,
                userRole: action.userRole,
                isLoginRequested: false
            }

        case SET_USER_LOGIN_REQUESTED:
            return {
                ...state,
                isLoginRequested: true
            }

        default:
            return state
    }
}
