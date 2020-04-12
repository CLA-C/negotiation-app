import weatherApiConfig from './config'

const {
    city,
    apiKey,
    endPoint
} = weatherApiConfig

const url = `${endPoint}?q=${city}&appid=${apiKey}&units=metric`

const fetchCityWeather = () => fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return response.json()
    })
    .then((weatherData) => weatherData)
    .catch((error) => {
        console.error('Could not fetch weather, please refresh page to retry:', error) // fail silently
    })

export default fetchCityWeather
