import { createStore, combineReducers } from 'redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import messageReducer from './reducers/messageReducer'

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    message: messageReducer
})

const store = createStore(
    reducer,
    composeWithDevTools()
    )

export default store