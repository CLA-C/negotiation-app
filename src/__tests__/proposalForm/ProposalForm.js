import React from 'react'
import { mount } from 'enzyme'
import ProposalForm from '../../proposalForm/ProposalForm'

describe('<ProposalForm />', () => {
    const initialProps = {
        activeUser: 'employee',
        hideInput: false,
        setCurrentUserProposal: jest.fn()
    }

    const wrapper = mount(<ProposalForm {...initialProps}/>)
    const inputEl = wrapper.find('input')

    it('updates the current user proposal with the right value', () => {
        const submitBtn = wrapper.find('button')

        inputEl.simulate('change', {
            target: {
              value: '356'
            }
        })

        submitBtn.simulate('click')

        expect(initialProps.setCurrentUserProposal).toHaveBeenCalledWith('356')
    })
})
