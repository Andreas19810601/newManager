import axios from 'axios'
import { SET_USER_LOGIN } from './constants'
import { setUserDisplayName } from './setUserDisplayName';
import { setUserRole } from './setUserRole'
import { setUserName } from  './setUserName'
import { setUserPassword } from './setUserPassword'


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
        } else {
            console.log("If ist falsch")
        }
    }
}