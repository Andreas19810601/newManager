import axios from 'axios'

export const userLogin = (data) => {
    return dispatch => {
        return axios
            .post('/api', data)
            .then((res) => {
                console.log(res.data.successful)
            });
    }
}

//fetch('/posts/1').then((res)=> console.log('hallo', res))

/*

/posts/1

http://localhost:3000/posts/1

/server/login, data

https://jsonplaceholder.typicode.com/posts/1

*/