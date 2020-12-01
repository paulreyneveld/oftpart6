import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import { createAnecdote } from './reducers/anecdoteReducer'
import { messageSelect } from './reducers/messageReducer'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.subscribe(() => console.log(store.getState()))
// store.dispatch(messageSelect(3))
// store.dispatch(createAnecdote('New anecdote'))