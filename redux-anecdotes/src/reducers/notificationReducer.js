const notificationReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_MESSAGE': {
            return action.notification
        }
        default: 
            return state
    }
}

export const notificationSet = (notification, delay) => {
    return async dispatch => {
        const timeoutID = setTimeout(() => dispatch(notificationRemove()), delay * 1000)
        dispatch({
            type: 'SET_MESSAGE',
            notification
        })
    }
}

export const notificationRemove = () => {
    return {
        type: 'SET_MESSAGE',
        notification: null
    }
}

export default notificationReducer