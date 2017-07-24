import {
  SET_USER_LOGIN, SET_USERROLE, 
  SET_USERNAME, SET_USERDISPLAYNAME, 
  DECREMENT, DECREMENT_REQUESTED, 
  INCREMENT_REQUESTED, INCREMENT,
  SET_USER_PASSWORD
} from '../actions/constants'

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
  userName:null,
  userPassword:null,
  userDisplayName:null,
  userRole:null,
  userId:null,
  userSessionId:null,
  isLoginProof: false,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SET_USER_PASSWORD:
      return {
        ...state,
        userPassword:action.userPassword
      }

    case SET_USER_LOGIN:
      return {
        ...state,
        isLoginProof:true
      }

    case SET_USERDISPLAYNAME:
            return {...state,
                userDisplayName: action.userDisplayName,
                isLoginProof:false
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