import PropTypes from 'prop-types'

const cityWeatherShape = PropTypes.shape({
    name: PropTypes.string,
    main: PropTypes.shape({
        temp: PropTypes.number
    }), 
    weather: PropTypes.arrayOf(PropTypes.shape({
        main: PropTypes.string
    }))
})

export default cityWeatherShape
