import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { messageSelect } from '../reducers/messageReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes);
    const dispatch = useDispatch();
    const messageToDisplayID = useSelector(state => state.searchFilter)
    console.log(messageToDisplayID)


  
    const vote = (id) => {
      dispatch(addVote(id))
      // This is where my efforts for 6.11 begin. The first step, sending a dispatch to update the 
      // state in the store, works great. 
      dispatch(messageSelect(id))
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