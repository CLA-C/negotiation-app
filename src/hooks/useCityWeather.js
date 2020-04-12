import { useEffect, useState } from 'react'
import fetchCityWeather from '../api/fetchCityWeather'

const useCityWeather = () => {
    const [cityWeather, setCityWeather] = useState({})

    useEffect(() => {
        const fetchWeather = async () => {
            const weather = await fetchCityWeather()
            setCityWeather(weather)
        }
        fetchWeather()
    }, [])

    return cityWeather
}

export default useCityWeather
