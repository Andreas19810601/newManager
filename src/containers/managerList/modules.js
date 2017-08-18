import axios from 'axios'

const SET_MANAGER_LIST = 'managerList/SET_MANAGER_LIST'
const SET_MANAGER_LIST_REQUESTED = 'login/SET_MANAGER_LIST_REQUESTED'

const initialState = {
    managerList: null,
    firstTableRequestReceived: false,
    isTableRequesting: false
}

export const setManagerList = (managerList) => ({
    type: SET_MANAGER_LIST,
    managerList,
})


export const setManagerTableList = () => {
    return async dispatch => {
        dispatch({
            type: SET_MANAGER_LIST_REQUESTED
        })
        const res = await axios.post('/managerList', {
        })
        dispatch(
            setManagerList(
                res.data.list,
            )
        )
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_MANAGER_LIST:
            return {
                ...state,
                managerList: action.managerList,
                isTableRequesting: false,
                firstTableRequestReceived: true,
            }

        case SET_MANAGER_LIST_REQUESTED:
            return {
                ...state,
                isTableRequesting: true,
            }

        default:
            return state
    }
}