import {
    GET_LIST_REQUEST,
    GET_LIST_SUCCESS,
    GET_LIST_FAILURE
} from '../Constants'

const initialState = { dogsList: [], allist: [], breedList: {},fetchingDogsList: false, error: "" };

export const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_REQUEST:
      return Object.assign({}, state, { fetchingDogsList: true }); // if we're fetching simply trigger the boolean!
    case GET_LIST_SUCCESS:
      return Object.assign({}, state, {
        dogsList: [...state.dogsList, ...action.payload], // if our promise was successfull, build out the dogs array.
        fetchingDogsList: false // also, set our boolean to false, because we're no longer fetching
      });
      case "GET_ALL":
        return Object.assign({}, state, {
            allist: [...state.allist, ...action.payload], // if our promise was successfull, build out the dogs array.
            fetchingDogsList: false
        });
        case "SET_BREED_LIST":
          /* return Object.assign({}, state, {
            breedList: [...state.breedList, ...action.payload], // if our promise was successfull, build out the dogs array.
            fetchingDogsList: false
        }); */
        return {
          ...state,
          breedList: action.payload
        }
        
    case GET_LIST_FAILURE:
      return Object.assign({}, state, {
        fetchingDogsList: false, // we're also no longer fetching here so set the boolean to false
        error: "Error fetching Dogs" // now we're getting an error back, set the error as we'd see fit
      });
    default:
      return state;
  }
};
export default ListReducer