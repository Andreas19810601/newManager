import {SET_USER, DECREMENT, DECREMENT_REQUESTED, INCREMENT_REQUESTED, INCREMENT } from '../actions/constants'

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
  test: 898,
  user:null,
  userRoll:null,
  userId:null,
  userSessionId:null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
            return {...state,
                user: action.user}
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