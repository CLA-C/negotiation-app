// renders text, input and submit button
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function ProposalForm({
    activeUser,
    hideInput
}) {
    const [proposalValue, setProposalValue] = useState('')
    
    useEffect(() => { // reset input value when we switch tabs
        setProposalValue('')
    }, [activeUser])

    const callToActionText = activeUser === 'employer'
        ? 'Please enter your maximum offer'
        : 'Please enter your minimum accepted salary' 


    const handleSubmit = () => {

    }

    return (
        <div className="proposal-form">
            {hideInput && 'Thank you for your submission! Waiting for the other submission'}

            {!hideInput && 
                <>  
                    <p>{callToActionText}</p>
                    <div>
                        <input type="number" name="proposal" value={proposalValue} onChange={(e) => setProposalValue(e.target.value)}/>
                    </div>

                    <button onClick={handleSubmit}>
                        Submit
                    </button>
                </>
            }
        </div>
    )
}

export default ProposalForm

ProposalForm.propTypes = {
    activeUser: PropTypes.oneOf(['employer', 'employee']).isRequired,
    hideInput: PropTypes.bool
}