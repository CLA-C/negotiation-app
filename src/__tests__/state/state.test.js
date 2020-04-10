import { reducer, initialState } from '../../state/state'

describe('App reducer', () => {
    it('should update the employer proposal', () => {
        const currentState = {
            ...initialState,
            employerProposal: 5000,
        }

        const newState = reducer(currentState, {
            type: 'setEmployerProposal',
            value: 3500
        })

        expect(newState.employerProposal).toBe(3500)
        expect(newState.employeeProposal).toBe(null)
    })

    it('should update the employee proposal', () => {
        const currentState = {
            ...initialState,
            employeeProposal: 4000,
        }

        const newState = reducer(currentState, {
            type: 'setEmployeeProposal',
            value: 8354
        })

        expect(newState.employeeProposal).toBe(8354)
        expect(newState.employerProposal).toBe(null)
    })

    it('should set the active user', () => {
        const currentState = {
            ...initialState,
            activeUser: 'employer',
        }

        const newState = reducer(currentState, {
            type: 'setActiveUser',
            value: 'employee'
        })

        expect(newState.activeUser).toBe('employee')
    })

    it('should default to initial active user if wrong value is passed', () => {
        const currentState = {
            ...initialState,
            activeUser: 'employee',
        }

        const newState = reducer(currentState, {
            type: 'setActiveUser',
            value: 'janitor'
        })

        const otherNewState = reducer(currentState, {
            type: 'setActiveUser',
            value: null
        })

        expect(newState.activeUser).toBe('employer')
        expect(otherNewState.activeUser).toBe('employer')
    })

    it('should reset the app state', () => {
        const currentState = {
            employerProposal: 5000,
            employeeProposal: 4000,
            activeUser: 'employee'
        }

        const newState = reducer(currentState, {
            type: 'resetApp',
        })

        expect(newState).toEqual(initialState)
    })

    it('should return the current unmodified state if unnknown action', () => {
        const currentState = {
            employerProposal: 5000,
            employeeProposal: 4000,
            activeUser: 'employer'
        }

        const newState = reducer(currentState, {
            type: 'someString',
            value: 7,
            someProp: 'foo'
        })

        expect(newState).toEqual(currentState)
    })
})