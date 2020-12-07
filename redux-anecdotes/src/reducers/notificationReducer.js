const notificationReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_MESSAGE': {
            return action.notification
        }
        default: 
            return state
    }
}

export const notificationSet = notification => {
    return {
        type: 'SET_MESSAGE',
        notification
    }
}

export const notificationRemove = () => {
    return {
        type: 'SET_MESSAGE',
        notification: null
    }
}

export default notificationReducer