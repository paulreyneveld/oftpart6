import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { messageSelect } from '../reducers/messageReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const messageToTarget = useSelector(({ anecdotes }) => anecdotes.length)
    console.log(messageToTarget)

    const addAnecdote = (event) => {
        event.preventDefault()
        const anecdoteContents = event.target.anecdote.value;
        event.target.anecdote.value = '';
        dispatch(createAnecdote(anecdoteContents))
        dispatch(messageSelect(messageToTarget))

      }

    return (
        <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button>create</button>
      </form>
    )
}

export default AnecdoteForm