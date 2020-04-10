import React from 'react'
import PropTypes from 'prop-types'

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
            <button
                className={`tabs__employer${activeUser === 'employer' && '--isActive'}`}
                onClick={() => handleClick('employer')}>
                Employer
            </button>
            <button
                className={`tabs__employee${activeUser === 'employee' && '--isActive'}`}
                onClick={() => handleClick('employee')}>
                Employee
            </button>
        </div>
    )
}

export default Tabs

Tabs.propTypes = {
    activeUser: PropTypes.oneOf(['employer', 'employee']).isRequired,
    setActiveUser: PropTypes.func.isRequired
}