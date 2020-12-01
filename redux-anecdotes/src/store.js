import { createStore, combineReducers } from 'redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import messageReducer from './reducers/messageReducer'


const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    searchFilter: messageReducer
})

const store = createStore(
    reducer,
    composeWithDevTools()
    )

console.log(store.getState())


export default store