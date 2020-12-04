import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { notificationSelect } from '../reducers/notificationReducer'

const Notification = () => {

  const data = useSelector(state => state)
  console.log(data)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (
    <div style={style}>
    Something here. . . .
  </div>
  )
}

export default Notification