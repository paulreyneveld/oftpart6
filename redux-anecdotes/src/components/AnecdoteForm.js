import React from 'react';
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notificationSet } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {
    // const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value;
        event.target.anecdote.value = '';
        await props.createAnecdote(content)
        props.notificationSet(content, 3)
        // await dispatch(createAnecdote(content))
        // dispatch(notificationSet(content, 3))
      }

    return (
        <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button>create</button>
      </form>
    )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes
  }
}

const mapDispatchToProps = {
  createAnecdote,
  notificationSet
}

const ConnectedAnecdoteForm = connect(
  mapStateToProps,
  mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm
// export default AnecdoteForm