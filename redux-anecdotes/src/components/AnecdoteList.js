import React from 'react';
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { notificationSet } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    const anecdotes = props.anecdotes

    const vote = (id) => {
      const anecdoteToUpdate = anecdotes.find(n => n.id === id)
      const newVoteNumber = (anecdoteToUpdate.votes + 1)
      props.addVote(id, newVoteNumber)
      props.notificationSet(anecdoteToUpdate.content, 3)
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes
  }
}

const mapDispatchToProps = {
  addVote,
  notificationSet
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList
