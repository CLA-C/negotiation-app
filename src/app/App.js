import React, { useReducer } from 'react'
import { initialState, reducer} from '../state/state'
import {
    setCurrentUserProposal,
    setActiveUser,
    resetApp
} from '../state/actions'

import { Card, CardHeader, CardFooter, CardBody } from 'reactstrap'
import useCityWeather from '../hooks/useCityWeather'
import Tabs from '../tabs/Tabs'
import ProposalForm from '../proposalForm/ProposalForm'
import ResultModal from '../resultModal/ResultModal'

import './App.scss'

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
			<Card>
				<CardHeader>
					<Tabs
						activeUser={activeUser}
						setActiveUser={(value) => setActiveUser(value, dispatch)}/>
				</CardHeader>
				<CardBody>
					<ProposalForm
						activeUser={activeUser}
						hideInput={hideInput}
						showModal={showModal}
						setCurrentUserProposal={(value) => setCurrentUserProposal(value, dispatch)}
					/>
				</CardBody>
				<CardFooter color="info">Claudio's Negotiation App©</CardFooter>
			</Card>

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
