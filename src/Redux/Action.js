import axios from 'axios'

import {
    GET_LIST_REQUEST,
    GET_LIST_SUCCESS,
    GET_LIST_FAILURE
} from './Constants'
export const fetchListRequest = () => {
    return{
        type:GET_LIST_REQUEST
    }
}
export const fetchListSuccess = data => {
    return{
        type:GET_LIST_SUCCESS,
        payload: data
    }
}
export const fetchListFailure = error => {
    return{
        type:GET_LIST_FAILURE,
        payload: error
    }
}

export const fetchListData = () =>{

   
    return(dispatch)=>{
        dispatch(fetchListRequest)
        axios.get('https://dog.ceo/api/breed/hound/list')
          .then(response => {
              const data = response.data
              
              dispatch(fetchListSuccess(data.message))
          })
          .catch(error =>{
              const errorMsg = error.message
              dispatch(fetchListFailure(errorMsg))
          })
    }
}

export const fetchListImage = () =>{

   
    return(dispatch)=>{
        dispatch(fetchListRequest)
        axios.get('https://dog.ceo/api/breed/hound/basset/images')
          .then(response => {
              const data = response.data
              
              dispatch(fetchListSuccess(data.message))
          })
          .catch(error =>{
              const errorMsg = error.message
              dispatch(fetchListFailure(errorMsg))
          })
    }
}