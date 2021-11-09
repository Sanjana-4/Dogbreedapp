import {
    FETCHING_DOGS,
    DOG_FETCH_SUCCESS,
    DOG_FETCH_ERROR
} from '../Constants'

const initialState = { dogs: [], fetchingDogs: false, error: "" };
export const dogReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_DOGS:
        return Object.assign({}, state, { fetchingDogs: true }); 
      case DOG_FETCH_SUCCESS:
        return Object.assign({}, state, {
          dogs: [...state.dogs, ...action.payload], 
          fetchingDogs: false 
        });
      case DOG_FETCH_ERROR:
        return Object.assign({}, state, {
          fetchingDogs: false, 
          error: "Error fetching Dogs" 
        });
      case "CLEAR_DOGS":
        return initialState;
      default:
        return state;
    }
  };
  export default dogReducer