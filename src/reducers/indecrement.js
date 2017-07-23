import {SET_USERROLE, SET_USERNAME, SET_USERDISPLAYNAME, DECREMENT, DECREMENT_REQUESTED, INCREMENT_REQUESTED, INCREMENT } from '../actions/constants'

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
  userName:null,
  userDisplayName:null,
  userRole:null,
  userId:null,
  userSessionId:null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USERDISPLAYNAME:
            return {...state,
                userDisplayName: action.userDisplayName
              }

    case SET_USERNAME:
            return {...state,
                userName: action.userName
              }
                  
    case SET_USERROLE:
            return {...state,
                userRole: action.userRole
              }

    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }

    default:
      return state
  }
}