import React from 'react'
import { useSelector } from 'react-redux'
import { messageSelect } from '../reducers/messageReducer'

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const messageToDisplay = useSelector(({ anecdotes, searchFilter }) => {
    return anecdotes.find(anecdote => anecdote.id === searchFilter)
  })

  console.log(messageToDisplay)

  return (
    <div style={style}>
      {messageToDisplay.content}
    </div>
  )
}

export default Notification