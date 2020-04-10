import React, { useReducer } from 'react'
import { initialState, reducer} from '../state/state'
import {
    setEmployerProposal,
    setEmployeeProposal,
    setActiveUser,
    resetApp
} from '../state/actions'

import Tabs from '../tabs/Tabs'

import './App.css'

function App() {
	const [state, dispatch] = useReducer(reducer, initialState)
	const {
		activeUser
	} = state

	console.log('active user is :', activeUser)
	return (
		<div className="navigation-app">
			<Tabs
				activeUser={activeUser}
				setActiveUser={(value) => setActiveUser(value, dispatch)}/>
			
		</div>
	)
}

export default App
