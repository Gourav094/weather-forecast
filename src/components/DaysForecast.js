import React, { useEffect, useState } from 'react'
import { API_KEY, ConvertTIme, IMG_CDN } from '../utils/Constant'
import { TimeZone } from '../utils/helper'

const DaysForecast = ({ query }) => {
    const [dayData, setDayData] = useState([])

    
    useEffect(() => {
        getDaysForecast()
    }, [query])

    const getDaysForecast = async () => {
        const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=${API_KEY}`)
        const jsonData = await data.json()
        const groupedData = groupByDay(jsonData?.list)
        setDayData(groupedData)
    }

    const groupByDay = (data) => {
        const groupData = {}
        data.forEach((item) => {
            const date = item.dt_txt.split(' ')[0]
            if (!groupData[date]) {
                groupData[date] = item;
            }
        })
        const currentDate = new Date();
        const formattedCurrentDate = currentDate.toISOString().slice(0, 10);
        const filteredData = Object.fromEntries(
            Object.entries(groupData).filter(([date]) => date !== formattedCurrentDate)
        );
        return Object.values(filteredData)
    }

    if (!dayData) {
        return
    }
    return (
        <div className='py-4 px-6 rounded-3xl h-fit bg-neutral-700 bg-opacity-30'>
            {dayData.map((item) => (
                <div className='flex items-center gap-2 justify-between text-gray-400'>
                    <div className='flex items-center text-white'>
                        <img className='w-14' src={IMG_CDN + `${item?.weather[0]?.icon}.png`} alt='icon' />
                        <p>{Math.round(item?.main.temp)}°C</p>
                    </div>
                    <p>{ConvertTIme(item?.dt_txt.split(" ")[0])}</p>
                    <p>{item?.dt_txt.split(" ")[0]}</p>
                </div> 
            ))}
        </div>
    )
}

export default DaysForecast