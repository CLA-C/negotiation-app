import React from 'react'
import { shallow } from 'enzyme'
import App from '../../app/App'
import Tabs from '../../tabs/Tabs'
import ProposalForm from '../../proposalForm/ProposalForm'
import ResultModal from '../../resultModal/ResultModal'

describe('<App />', () => {
	const wrapper = shallow(<App />)

	it('should render a ProposalForm component', () => {
		expect(wrapper.find(ProposalForm)).toHaveLength(1)
	})

	it('should render a Tabs component', () => {
		expect(wrapper.find(Tabs)).toHaveLength(1)
	})

	it('should not initially render a ResultModal component', () => {
		expect(wrapper.find(ResultModal)).toHaveLength(0)
	})
})
