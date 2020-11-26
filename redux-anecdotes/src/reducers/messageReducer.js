const messageReducer = (state = 1, action) => {
    switch(action.type) {
        case 'SELECT_MESSAGE': {
            return action.searchID
        }
        default: 
            return state
    }
}

export const messageSelect = searchID => {
    return {
        type: 'SELECT_MESSAGE',
        searchID
    }
}

export default messageReducer