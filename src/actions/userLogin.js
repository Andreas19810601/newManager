import axios from 'axios'
// import {connect} from 'react-redux'

export const userLogin = (data) => {
    return dispatch => {
        return axios
            .post('/api', data)
            .then((res) => {
                console.log(res.data.successful)
            });
    }
}

// getData = () => {
//         const dispatch = this.props.dispatch;

//         fetch('/api/login', {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 username: this.state.username, password: this.state.password
//             })
//         })
//             .then(function (res) { return res.json(); })
//             .then(function (res) {
//                 if (res.successful) {
//                     dispatch(setUser(res.user));
//                     dispatch(addFlashMessage({
//                         type: 'success',
//                         text: 'Willkommen im Manager '+res.user.displayName+', Sie haben derzeit keine weiteren Nachrichten.'
//                     }));
//                     // dispatch(addFlashMessage({
//                     //     type: 'error',
//                     //     text: "Falsch eingeloggt"
//                     // }));
//                     //redirect
//                     browserHistory.push('/features');
//                 } else {

//                     console.log("If ist falsch")
//                 }
//             })

//     }


// const mapStateToProps = state => ({})


// export default connect(mapStateToProps)(userLogin)

//fetch('/posts/1').then((res)=> console.log('hallo', res))

/*

/posts/1

http://localhost:3000/posts/1

/server/login, data

https://jsonplaceholder.typicode.com/posts/1

*/