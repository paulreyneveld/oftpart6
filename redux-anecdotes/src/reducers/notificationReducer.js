const notificationReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_MESSAGE': {
            return action.notification
        }
        default: 
            return state
    }
}

let timer = null

export const notificationSet = (notification, delay) => {
    return async dispatch => {
        clearTimeout(timer)
        // If a new request is dispatched, reset previous timer
        timer = setTimeout(() => dispatch(notificationRemove()), delay * 1000)
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