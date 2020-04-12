import React, { useReducer } from 'react'
import { initialState, reducer} from '../state/state'
import {
    setCurrentUserProposal,
    setActiveUser,
    resetApp
} from '../state/actions'

import useCityWeather from '../hooks/useCityWeather'
import Tabs from '../tabs/Tabs'
import ProposalForm from '../proposalForm/ProposalForm'
import ResultModal from '../resultModal/ResultModal'

import './App.css'

function App() {
	const [state, dispatch] = useReducer(reducer, initialState)
	const cityWeather = useCityWeather()

	const {
		activeUser,
		employerProposal,
		employeeProposal
	} = state

	const hideInput = (activeUser === 'employer' && employerProposal !== null)
		|| (activeUser === 'employee' && employeeProposal !== null) 
	
	const showModal = Boolean(employeeProposal && employerProposal)

	return (
		<div className="navigation-app">
			<Tabs
				activeUser={activeUser}
				setActiveUser={(value) => setActiveUser(value, dispatch)}/>

			<ProposalForm
				activeUser={activeUser}
				hideInput={hideInput}
				showModal={showModal}
				setCurrentUserProposal={(value) => setCurrentUserProposal(value, dispatch)}
			/>

			<div>Active user is: {activeUser}</div>
			<div>Current employer proposal is: {employerProposal}</div>
			<div>Current employee proposal is: {employeeProposal}</div>

			{showModal &&
				<ResultModal
					employerProposal={employerProposal}
					employeeProposal={employeeProposal}
					resetApp={() => resetApp(dispatch)}
					cityWeather={cityWeather}
				/>
			}
		</div>
	)
}

export default App
