import React, { useEffect, useState } from 'react'
import { API_KEY, IMG_CDN } from '../utils/Constant'
import { TimeZone } from '../utils/helper'

const HourForecast = ({ query }) => {
    const [hourData, setHourData] = useState()
    useEffect(() => {
        getDaysForecast()
    }, [query])

    const getDaysForecast = async () => {
        const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=${API_KEY}`)
        const jsonData = await data.json()
        const groupedData = groupByHour(jsonData?.list)
        setHourData(groupedData)
    }

    const groupByHour = (data) => {
        const currentDate = new Date();
        // const todayDate = currentDate.toISOString().split('T')[0];
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
        const day = String(currentDate.getDate()).padStart(2, '0');
        const todayDate = `${year}-${month}-${day}`;
        return data.filter(item => item.dt_txt.startsWith(todayDate));
    }
    if (!hourData) return
    return (
        <div className='flex gap-6 flex-wrap'>
            {hourData.map((data) => (
                <div className='text-center w-fit rounded-xl py-3 px-6 h-32 bg-neutral-700 bg-opacity-30'>
                    <p className='text-sm'>{TimeZone(data?.dt)}</p>
                    <img className='w-14' src={IMG_CDN + `${data?.weather[0]?.icon}.png`} alt='icon' />
                    <p className='text-sm'>{Math.round(data?.main.temp)} °C</p>
                </div>
            ))}
        </div>
    )
}

export default HourForecast