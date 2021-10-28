import {
    FETCHING_DOGS,
    DOG_FETCH_SUCCESS,
    DOG_FETCH_ERROR
} from '../Constants'

const initialState = { dogs: [], fetchingDogs: false, error: "" };
export const dogReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_DOGS:
        return Object.assign({}, state, { fetchingDogs: true }); // if we're fetching simply trigger the boolean!
      case DOG_FETCH_SUCCESS:
        return Object.assign({}, state, {
          dogs: [...state.dogs, ...action.payload], // if our promise was successfull, build out the dogs array.
          fetchingDogs: false // also, set our boolean to false, because we're no longer fetching
        });
      case DOG_FETCH_ERROR:
        return Object.assign({}, state, {
          fetchingDogs: false, // we're also no longer fetching here so set the boolean to false
          error: "Error fetching Dogs" // now we're getting an error back, set the error as we'd see fit
        });
      case "CLEAR_DOGS":
        return initialState;
      default:
        return state;
    }
  };
  export default dogReducer