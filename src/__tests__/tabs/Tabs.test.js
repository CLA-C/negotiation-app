import React from 'react'
import { shallow } from 'enzyme'
import Tabs from '../../tabs/Tabs'

describe('<Tabs />', () => {
    const initialProps = {
        activeUser: 'employee',
        setActiveUser: jest.fn()
    }

    const wrapper = shallow(<Tabs {...initialProps}/>)

    it('renders two buttons', () => {
        expect(wrapper.find('button')).toHaveLength(2)
    })

    it('sets the correct active button', () => {
        expect(wrapper.find('button').at(1).hasClass('tabs__employee--isActive')).toBe(true)
    })

    it('calls the click event with the correct value', () => {
        wrapper.find('button').at(0).simulate('click')
        expect(initialProps.setActiveUser).toHaveBeenCalledWith('employer')
    })
})
