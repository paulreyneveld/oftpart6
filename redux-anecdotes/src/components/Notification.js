import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { messageSelect } from '../reducers/messageReducer'

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const dispatch = useDispatch()

  const messageToDisplay = useSelector(({ anecdotes, searchFilter }) => {
    return anecdotes.find(anecdote => anecdote.id === searchFilter)
  })

  console.log(messageToDisplay)

  if (messageToDisplay) {
    setTimeout(() => dispatch(messageSelect(null)), 3000)
    return (
      <div style={style}>
        {messageToDisplay.content}
      </div>
    )
  }

  return null
}

export default Notification