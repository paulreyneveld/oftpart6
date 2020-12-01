const messageReducer = (state = 1, action) => {
    switch(action.type) {
        case 'SELECT_MESSAGE': {
            return action.searchFilter
        }
        default: 
            return state
    }
}

export const messageSelect = searchFilter => {
    return {
        type: 'SELECT_MESSAGE',
        searchFilter
    }
}

export default messageReducer