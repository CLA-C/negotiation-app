import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'

import './Tabs.scss'

function Tabs({
    activeUser,
    setActiveUser
}) {
    const handleClick = (val) => {
        if (activeUser !== val) {
            setActiveUser(val)
        }
    }

    return (
        <div className="tabs">
            <Button
                outline
                className={`tabs__employer ${activeUser === 'employer' ? 'tabs__employer--isActive' : ''}`}
                onClick={() => handleClick('employer')}>
                Employer
            </Button>
            <Button
                outline
                className={`tabs__employee ${activeUser === 'employee' ? 'tabs__employee--isActive' : ''}`}
                onClick={() => handleClick('employee')}>
                Employee
            </Button>
        </div>
    )
}

export default Tabs
Tabs.propTypes = {
    activeUser: PropTypes.oneOf(['employer', 'employee']).isRequired,
    setActiveUser: PropTypes.func.isRequired
}