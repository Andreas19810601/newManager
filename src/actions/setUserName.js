import { SET_USERNAME } from './constants'

export const setUserName = (userName) => ({
  type: SET_USERNAME,
  userName
})