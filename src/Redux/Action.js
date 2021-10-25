import axios from "axios";

import {
    GET_LIST_REQUEST,
    GET_LIST_SUCCESS,
    GET_LIST_FAILURE,
    FETCHING_DOGS,
    DOG_FETCH_SUCCESS,
    DOG_FETCH_ERROR
} from './Constants'

export const fetchDogs = () => {
  const promise = axios.get(`https://dog.ceo/api/breed/hound/basset/images`);
  return dispatch => {
    dispatch({ type: FETCHING_DOGS }); // first state of 'fetching' is dispatched
    promise
      .then(response => {
        dispatch({ type: DOG_FETCH_SUCCESS, payload: response.data.message }); // 2nd state of success is dispatched IF the promise resolves
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: DOG_FETCH_ERROR }); // our other 2nd state of 'rejected' will be dispatched here.
      });
  };
};

export const fetchListData = () => {
    const promise = axios.get(`https://dog.ceo/api/breed/hound/list`);
    return dispatch => {
      dispatch({ type: GET_LIST_REQUEST }); // first state of 'fetching' is dispatched
      promise
        .then(response => {
          dispatch({ type: GET_LIST_SUCCESS, payload: response.data.message }); // 2nd state of success is dispatched IF the promise resolves
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: GET_LIST_FAILURE }); // our other 2nd state of 'rejected' will be dispatched here.
        });
    };
  };