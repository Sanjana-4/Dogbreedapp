import {
    GET_LIST_REQUEST,
    GET_LIST_SUCCESS,
    GET_LIST_FAILURE
} from '../Constants'

const initialState = { dogsList: [], allist: [], breedList: {},fetchingDogsList: false, error: "" };

export const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_REQUEST:
      return Object.assign({}, state, { fetchingDogsList: true }); 
    case GET_LIST_SUCCESS:
      return Object.assign({}, state, {
        dogsList: [...state.dogsList, ...action.payload], 
        fetchingDogsList: false 
      });
      case "GET_ALL":
        return Object.assign({}, state, {
            allist: [...state.allist, ...action.payload], 
            fetchingDogsList: false
        });
        case "SET_BREED_LIST":
         return {
          ...state,
          breedList: action.payload
        }
        
    case GET_LIST_FAILURE:
      return Object.assign({}, state, {
        fetchingDogsList: false, 
        error: "Error fetching Dogs" 
      });
    default:
      return state;
  }
};
export default ListReducer