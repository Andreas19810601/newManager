import { INCREMENT, INCREMENT_REQUESTED } from './constants'

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })
    
    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      })
    }, 3000)
  }
}