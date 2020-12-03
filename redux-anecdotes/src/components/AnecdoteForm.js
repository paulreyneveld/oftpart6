import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdotes'
import { messageSelect } from '../reducers/messageReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const messageToTarget = useSelector(({ anecdotes }) => anecdotes.length)

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value;
        event.target.anecdote.value = '';
        dispatch(createAnecdote(content))
        // dispatch(messageSelect(content.id))
      }

    return (
        <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button>create</button>
      </form>
    )
}

export default AnecdoteForm