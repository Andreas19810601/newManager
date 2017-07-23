import { SET_USERROLE } from './constants'

export const setUserRole = (userRole) => ({
  type: SET_USERROLE,
  userRole
})