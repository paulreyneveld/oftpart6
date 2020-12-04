const notificationReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_MESSAGE': {
            return action.searchFilter
        }
        default: 
            return state
    }
}

export const notificationSet = searchFilter => {
    return {
        type: 'SET_MESSAGE',
        searchFilter
    }
}

export const notificationRemove = () => {
    return {
        type: 'REMOVE_MESSAGE',
        searchFilter: null
    }
}

export default notificationReducer