import { SET_USERDISPLAYNAME } from './constants'

export const setUserDisplayName = (userDisplayName) => ({
  type: SET_USERDISPLAYNAME,
  userDisplayName
})