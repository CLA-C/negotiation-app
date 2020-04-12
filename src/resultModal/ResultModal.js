import React from 'react'
import PropTypes from 'prop-types'
import cityWeatherShape from './cityWeatherShape'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import './ResultModal.scss'
function ResultModal({
    employerProposal,
    employeeProposal,
    resetApp,
    cityWeather
}) {
    const isSuccess = employerProposal >= employeeProposal
    
    const modalClass = `result-modal${isSuccess ? '--success' : '--failure'}`
    const modalTitle = isSuccess ? 'Congratulations!' : 'Too bad!'
    const modalDescription = `The values are ${!isSuccess ? 'NOT ' : ''}matching: `

    let showWeather = true
    let weatherText
    try {
        const {
            name,
            main,
            weather
        } = cityWeather
        weatherText = `${name} weather: ${weather[0].main}, ${Math.floor(main.temp)}°C`
    } catch(e) {
        showWeather = false
    }

    return (
        <Modal isOpen={true} className={modalClass} backdrop="static">
            <ModalHeader>{modalTitle}</ModalHeader>
            <ModalBody>
                <div className="result-modal__description">{modalDescription}</div>
                <div>Employer's offer -> {employerProposal}</div>
                <div>Employee's request -> {employeeProposal}</div>
            </ModalBody>
            <ModalFooter>
                {showWeather && <p className="result-modal__weather-info">{weatherText}</p>}
                <Button color="info" onClick={resetApp}>Reset</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ResultModal

ResultModal.propTypes = {
    employerProposal: PropTypes.number.isRequired,
    employeeProposal: PropTypes.number.isRequired,    
    resetApp: PropTypes.func,
    cityWeather: cityWeatherShape
}