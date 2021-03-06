import { reducer, initialState } from '../../state/state'

describe('App reducer', () => {
    it('should update the active user proposal', () => {
        const currentState = {
            ...initialState,
            activeUser: 'employee',
            employeeProposal: 4000
        }

        const newState = reducer(currentState, {
            type: 'setCurrentUserProposal',
            value: 8354
        })

        expect(newState.employeeProposal).toBe(8354)
        expect(newState.employerProposal).toBe(null)

        const anotherCurrentState = {
            ...initialState,
            activeUser: 'employer',
            employerProposal: null,
            employeeProposal: 34
        }

        const anotherNewState = reducer(anotherCurrentState, {
            type: 'setCurrentUserProposal',
            value: '4'
        })

        expect(anotherNewState.employerProposal).toBe(4)
        expect(anotherNewState.employeeProposal).toBe(34)
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

        const anotherNewState = reducer(currentState, {
            type: 'setActiveUser',
            value: null
        })

        expect(newState.activeUser).toBe('employer')
        expect(anotherNewState.activeUser).toBe('employer')
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

    it('should return the current unmodified state if an unknown action is passed', () => {
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