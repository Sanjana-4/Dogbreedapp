import { createStore, applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import dogReducer from './Reducer/dogReducer'
import ListReducer from './Reducer/ListReducer'

const store = createStore(
    combineReducers({
        dogs:dogReducer,
        list:ListReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store