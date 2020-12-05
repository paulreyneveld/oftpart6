import React from 'react';
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import store from '../store';

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value;
        event.target.anecdote.value = '';
        dispatch(createAnecdote(content))
        console.log(store.getState())
        // setTimeout(() => dispatch(notificationRemove()), 3000)
        // dispatch(notificationSet(id))
      }

    return (
        <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button>create</button>
      </form>
    )
}

export default AnecdoteForm