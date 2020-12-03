import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes);
    const dispatch = useDispatch();
    
    const vote = (id) => {
      const anecdoteToUpdate = anecdotes.find(n => n.id === id)
      const newVoteNumber = (anecdoteToUpdate.votes + 1)
      dispatch(addVote(id, newVoteNumber))
    }
    
    return (
        <div>
        {anecdotes.sort((a, b) => a.votes > b.votes ? -1 : 1).map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id)}>vote</button>
              </div>
            </div>
          )}
          </div>
    )
}

export default AnecdoteList