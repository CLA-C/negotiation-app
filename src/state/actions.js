const setCurrentUserProposal = (value, dispatch) => {
    return dispatch({
        type: 'setCurrentUserProposal',
        value
    })
}

const setActiveUser = (value, dispatch) => {
    return dispatch({
        type: 'setActiveUser',
        value
    })
}

const resetApp = (dispatch) => {
    return dispatch({
        type: 'resetApp'
    })
}

export {
    setCurrentUserProposal,
    setActiveUser,
    resetApp
}
