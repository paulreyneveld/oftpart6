import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {

  // const notification = useSelector(state => {
  //   const id = state.searchFilter
  //   const anecdoteToDisplay = state.anecdotes.find(anecdote => String(anecdote.id) === id)
  //   return anecdoteToDisplay
  // })

  const notification = useSelector(state => {
    console.log(state)
    return state.notification
  })

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (notification) {
    return (
      <div style={style}>
        {notification}
      </div>
    )
  }

  return null

}

export default Notification