const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

export const addVote = (id) => {
  return (
  {
    type: 'INCREASE_VOTE',
    data: { id }
  })
}

export const createAnecdote = (anecdoteContents) => {
  return (
    {
      type: 'ADD_ANECDOTE',
      data: { anecdoteContents }
    }
  )
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
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
        const content = action.data.anecdoteContents
        console.log(content)
        const newAnecdote = {
          content,
          id: getId(),
          votes: 0
        }
        return state.concat(newAnecdote)
      }
    default: 
      return state
  }
}

export default reducer