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

// export const searchUserAsync = () => {
//   return async dispatch => {
//     dispatch({
//       type: SEARCH_USER_REQUESTED
//     })

//     const res = await axios.get('/api', {
//       username: this.state.identifier,
//       password: this.state.password
//     })


    
//     if (res.data.successful) {
//       dispatch(setUserRole(res.data.user.role))
//       this.props.setUserName(res.data.user.userName)
//       this.props.setUserDisplayName(res.data.user.displayName) 
//       this.props.changePage();
//     } else {
//       console.log('5 ', res.data.successful)
//       console.log("If ist falsch")
//     }
//   }
// }