import {
    GET_LIST_REQUEST,
    GET_LIST_SUCCESS,
    GET_LIST_FAILURE
} from './Constants'
const initialState = {
    loading : false,
    data: [],
    error: ''
}
const ListReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST_REQUEST:
            return{
                ...state,
                loading: true
            }
        case GET_LIST_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case GET_LIST_FAILURE:
            return{
                loading: false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}
export default ListReducer