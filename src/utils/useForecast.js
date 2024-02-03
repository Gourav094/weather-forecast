import { useEffect } from 'react'

const useForecast = ({query}) => {
    useEffect(() => {
        getDaysForecast()
    }, [query])

    const getDaysForecast = async () => {
        const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=${API_KEY}`)
        const jsonData = await data.json()
        return jsonData?.list
    }
}

export default useForecast