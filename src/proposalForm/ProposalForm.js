import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Input, Button } from 'reactstrap'
import isValidInput from './validation'

import './ProposalForm.scss'

function ProposalForm({
    activeUser,
    hideInput,
    showModal, // needed to know when to reset the input value
    setCurrentUserProposal
}) {
    const [proposalValue, setProposalValue] = useState('')
    const [showError, setShowError] = useState(false)
    
    useEffect(() => { // reset state when user switches tabs, or modal is closed
        setProposalValue('')
        setShowError(false)
    }, [activeUser, showModal])

    const handleSubmit = () => {
        // validate proposal value
        if (!isValidInput(proposalValue)) {
            setShowError(true)
            return
        }
        setCurrentUserProposal(proposalValue)
    }

    const callToActionText = activeUser === 'employer'
        ? 'Please enter your maximum offer'
        : 'Please enter your minimum accepted salary' 

    return (
        <div className="proposal-form">
            {hideInput && 'Thank you for your submission! Fingers crossed'}

            {!hideInput && 
                <>  
                    <p>{callToActionText}</p>
                    <div>
                        <Input
                            invalid={showError}
                            type="text"
                            maxLength="9"
                            name="proposal"
                            value={proposalValue}
                            onChange={(e) => setProposalValue(e.target.value)}/>
                    </div>

                    {showError &&
                        <div className="proposal-form__error-msg text-danger">
                            Please insert a positive number
                        </div>
                    }
                    
                    <Button
                        color="primary"
                        className="proposal-form__submit-btn"
                        onClick={handleSubmit}>
                        Submit
                    </Button>
                </>
            }
        </div>
    )
}

export default ProposalForm

ProposalForm.propTypes = {
    activeUser: PropTypes.oneOf(['employer', 'employee']).isRequired,
    setCurrentUserProposal: PropTypes.func.isRequired,
    hideInput: PropTypes.bool,
    showModal: PropTypes.bool
}