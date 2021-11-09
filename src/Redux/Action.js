import axios from "axios";

import {
    GET_LIST_REQUEST,
    GET_LIST_SUCCESS,
    GET_LIST_FAILURE,
    FETCHING_DOGS,
    DOG_FETCH_SUCCESS,
    DOG_FETCH_ERROR
} from './Constants'


export const clearlist = () => {
  return dispatch => {
    dispatch({ type: FETCHING_DOGS });
    dispatch({ type: "CLEAR_DOGS" });
  }
}
export const fetchDogs = (mode=false, breedName, sub='no') => {
  var url = `https://dog.ceo/api/breed/${breedName}/images`;
  if(mode){
    url = `https://dog.ceo/api/breed/${breedName}/${sub}/images`
  }
  const promise = axios.get(url);
  return dispatch => {
    dispatch({ type: FETCHING_DOGS }); 
    promise
      .then(response => {
        dispatch({ type: DOG_FETCH_SUCCESS, payload: response.data.message }); 
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: DOG_FETCH_ERROR }); 
      });
  };
};

export const fetchListData = (breedName) => {
    const promise = axios.get(`https://dog.ceo/api/breed/${breedName}/list`);
    return dispatch => {
      dispatch({ type: GET_LIST_REQUEST }); 
      promise
        .then(response => {
          dispatch({ type: GET_LIST_SUCCESS, payload: response.data.message }); 
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: GET_LIST_FAILURE }); 
        });
    };
  };
  
  export const fetchListAll = () => {
    const promise = axios.get('https://dog.ceo/api/breeds/list/all');
    return dispatch => {
      dispatch({ type: GET_LIST_REQUEST }); 
      promise
        .then(response => {
          dispatch({ type: "GET_ALL", payload: Object.keys(response.data.message) }); 
          dispatch({ type: "SET_BREED_LIST", payload: response.data.message });
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: GET_LIST_FAILURE }); 
        });
    };
  };