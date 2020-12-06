import React from 'react';
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import {notificationRemove, notificationSet} from '../reducers/notificationReducer'
import store from '../store';

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value;
        event.target.anecdote.value = '';
        await dispatch(createAnecdote(content))
        const arrayLength = store.getState().anecdotes.length
        const id = store.getState().anecdotes[arrayLength - 1].id
        setTimeout(() => dispatch(notificationRemove()), 3000)
        dispatch(notificationSet(id))
      }

    return (
        <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button>create</button>
      </form>
    )
}

export default AnecdoteForm