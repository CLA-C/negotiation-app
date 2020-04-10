const setEmployerProposal = (value, dispatch) => {
    return dispatch({
        type: 'setEmployerProposal',
        value
    })
}

const setEmployeeProposal = (value, dispatch) => {
    return dispatch({
        type: 'setEmployeeProposal',
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
    setEmployerProposal,
    setEmployeeProposal,
    setActiveUser,
    resetApp
}
