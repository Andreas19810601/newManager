import { SET_USER_PASSWORD } from './constants'

export const setUserPassword = (userPassword) => ({
  type: SET_USER_PASSWORD,
  userPassword
})