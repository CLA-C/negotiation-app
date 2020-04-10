import React, { useReducer } from 'react'
import { initialState, reducer} from '../state/state'
import {
    setEmployerProposal,
    setEmployeeProposal,
    setActiveUser,
    resetApp
} from '../state/actions'

import Tabs from '../tabs/Tabs'
import ProposalForm from '../proposalForm/ProposalForm'

import './App.css'

function App() {
	const [state, dispatch] = useReducer(reducer, initialState)
	const {
		activeUser,
		employerProposal,
		employeeProposal
	} = state

	const hideInput = (activeUser === 'employer' && employerProposal !== null)
		|| (activeUser === 'employee' && employeeProposal !== null) 

	console.log('active user is :', activeUser)
	return (
		<div className="navigation-app">
			<Tabs
				activeUser={activeUser}
				setActiveUser={(value) => setActiveUser(value, dispatch)}/>

			<ProposalForm
				activeUser={activeUser}
				hideInput={hideInput}
			/>

			<div>Current employer proposal is: {employerProposal}</div>
			<div>Current employee proposal is: {employeeProposal}</div>			
		</div>
	)
}

export default App
