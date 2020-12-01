import React from 'react'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
const App = () => {
  
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteForm />
      <AnecdoteList />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Notification />
    </div>
  )
}

export default App