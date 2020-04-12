import React from "react"
import { render } from "react-dom"
import { act } from "react-dom/test-utils"
import fetchCityWeather from '../../api/fetchCityWeather'
import useCityWeather from '../../hooks/useCityWeather'
import mockedRes from '../../__mocks__/mockedCityWeatherRes.json'

jest.mock('../../api/fetchCityWeather')
fetchCityWeather.mockResolvedValue(mockedRes)

// can't test hooks outisde of React, so using a dummy component here
const DummyComponent = () => {
    const weatherData = useCityWeather()

    return (
        <>
            <div className="temp">{weatherData.main && weatherData.main.temp}</div>
            <div className="weather">{weatherData.weather && weatherData.weather[0].main}</div>
            <div className="city">{weatherData.name}</div>
        </>
    )
}

describe('useCityWeather hook', () => {
    it('should fetch weather data', async () => {
        const container = document.createElement("div")
        document.body.appendChild(container)

        await act(async () => {
            render(
                <DummyComponent/>,
                container
            )
        })
        
        expect(container.querySelector('.city').textContent).toBe('London')
        expect(container.querySelector('.weather').textContent).toBe('Drizzle')
        expect(container.querySelector('.temp').textContent).toBe('280.32')
    })
})
