import React from 'react'
import { shallow } from 'enzyme'
import ResultModal from '../../resultModal/ResultModal'
import { Modal, ModalHeader } from 'reactstrap'

describe('<ResultModal />', () => {
    const initialProps = {
        employerProposal: 5000,
        employeeProposal: 2000,
        cityWeather: {
            name: 'Berlin',
            main: {
                temp: 25.4
            }, 
            weather: [{
                main: 'Sunny'
            }]
        }
    }

    const wrapper = shallow(<ResultModal {...initialProps}/>)

    it('renders the success class and texts when employerProposal >= employeeProposal', () => {
        expect(wrapper.find(Modal).hasClass('result-modal--success')).toBe(true)
        expect(wrapper.find(ModalHeader).render().text()).toBe('Congratulations!')
        expect(wrapper.find('.result-modal__description').text()).toBe('The values are matching: ')
    })

    it('renders the weather text if all the values are passed', () => {
        expect(wrapper.find('.result-modal__weather-info').text()).toBe('Berlin weather: Sunny, 25°C')
    })

    const anotherInitialProps = {
        employerProposal: 5000,
        employeeProposal: 6000,
        cityWeather: {
            name: 'Berlin',
            main: {
                temp: 25.4
            }, 
            weather: []
        }
    }

    const anotherWrapper = shallow(<ResultModal {...anotherInitialProps}/>)

    it('renders the failure class and texts when employerProposal < employeeProposal', () => {
        expect(anotherWrapper.find(Modal).hasClass('result-modal--failure')).toBe(true)
        expect(anotherWrapper.find(ModalHeader).render().text()).toBe('Too bad!')
        expect(anotherWrapper.find('.result-modal__description').text()).toBe('The values are NOT matching: ')
    })

    it('does not render the weather text if not all the values are passed', () => {
        expect(anotherWrapper.find('.result-modal__weather-info')).toHaveLength(0)
    })
})
