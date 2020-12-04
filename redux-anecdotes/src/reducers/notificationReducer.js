const notificationReducer = (state = null, action) => {
    switch(action.type) {
        case 'SELECT_MESSAGE': {
            return action.searchFilter
        }
        default: 
            return state
    }
}

export const notificationSelect = searchFilter => {
    return {
        type: 'SELECT_MESSAGE',
        searchFilter
    }
}

export default notificationReducer