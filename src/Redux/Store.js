import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import ListReducer from './Reducer'

const store = createStore(
    ListReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store