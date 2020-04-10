const initialState = {
    activeUser: 'employer', // must be either 'employee' or 'employer'
    employerProposal: null,
    employeeProposal: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'resetApp':
            return initialState
        case 'setEmployerProposal':
            return {
                ...state,
                employerProposal: action.value,
            }
        case 'setEmployeeProposal':
            return {
                ...state,
                employeeProposal: action.value,
            }
        case 'setActiveUser':
            let val = action.value
            if ((val !== 'employee') && (val !== 'employer')) { // simple user value validation
                val = initialState.activeUser
            }

            return {
                ...state,
                activeUser: val,
            }
        default:
            return state;
    }
}

export {
    initialState,
    reducer
}
