import anecdoteService from '../services/anecdotes'

export const addVote = (id, newVoteNumber) => {
  return async dispatch => {
    await anecdoteService.updateVotes(id, newVoteNumber)
    dispatch({
      type: 'INCREASE_VOTE',
      data: { id }
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'ADD_ANECDOTE',
      data: { anecdote }
    })
  }
}
export const initializeAnecdotes = (anecdotes) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

const reducer = (state = [], action) => {
  switch(action.type) {
    case 'INCREASE_VOTE': {
      const id = action.data.id;
      console.log(id)
      const anecdoteToUpdate = state.find(n => n.id === id)
      console.log(anecdoteToUpdate)
      const updatedAnecdote = {
        ...anecdoteToUpdate,
        votes: anecdoteToUpdate.votes + 1
      }
      return state.map(item => 
        item.id !== id ? item : updatedAnecdote)
    }
      case 'ADD_ANECDOTE':{
        const content = action.data.anecdote
        return state.concat(content)
      }
      case 'INIT_ANECDOTES':
        return action.data
    default: 
      return state
  }
}

export default reducer