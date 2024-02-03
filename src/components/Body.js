import React, { useContext, useEffect, useState } from 'react'
import { API_KEY, IMG_CDN } from '../utils/Constant'
import { CurrentTime, DayZone, TimeZone } from '../utils/helper'
import UserContext from './UserContext'
import DaysForecast from './DaysForecast'
import HourForecast from './HourForecast'

const Body = () => {
    const [currentData, setCurrentData] = useState()
    const { searchQuery } = useContext(UserContext)

    

    useEffect(() => {
        getCurrentData()
    }, [searchQuery])

    const getCurrentData = async () => {
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=metric&appid=${API_KEY}`)
        if (!data.ok) {
            return
        }
        const jsonData = await data.json()
        setCurrentData(jsonData)
    }
    if (!currentData) return
    return (
        <div className='md:grid grid-flow-col min-h-screen text-gray-200'>
            <div className='col-span-4 mx-6 my-3'>
                <div className='py-4 px-6 rounded-3xl h-fit bg-neutral-700 bg-opacity-30'>
                    <p className='text-lg font-medium'>Now</p>
                    <div className='pb-3 border-b border-gray-500'>
                        <div className='text-4xl flex items-center gap-4'>
                            <p>{Math.round(currentData?.main.temp)} °C</p>
                            <img className='w-24' src={IMG_CDN + `${currentData?.weather[0]?.icon}.png`} alt='icon' />
                        </div>
                        <p className='text-lg font-medium'>{currentData?.weather[0]?.description}</p>
                    </div>
                    <div className='flex items-center pt-4 gap-2'>
                        <i className="fa-regular fa-calendar"></i>
                        <p className=''>{CurrentTime()}</p>
                    </div>
                    <div className='flex items-center py-2 gap-2'>
                        <i class="fa-solid fa-location-dot"></i>
                        <p className=' font-medium'>{currentData?.name}</p>
                    </div>
                </div>
                <div>
                    <p className='py-3 font-semibold text-lg'>5 Days Forecast</p>
                    <DaysForecast query={searchQuery} />
                </div>
            </div>
            <div className='col-span-6 mx-6 md:mx-0 md:mr-10 py-3'>
                <div className='rounded-3xl py-4 px-6 bg-neutral-700 bg-opacity-20 h-fit'>
                    <div className='mx-6'>
                        <p className='text-lg font-medium'>Todays Highlight</p>
                        <div className='md:flex gap-10'>
                            <div className='bg-neutral-800 py-4 px-8 my-6  rounded-xl md:w-1/2 tracking-wider flex items-center gap-4'>
                                <div>
                                    <p className='text-gray-400'>Wind</p>
                                    <div className='flex items-center gap-8 py-3'>
                                        <i className="fa-solid fa-wind text-3xl"></i>
                                        <div>
                                            <p className='text-sm'>Speed</p>
                                            <p className='text-2xl'>{currentData?.wind?.speed}km/h</p>
                                        </div>
                                        <div>
                                            <p className='text-sm'>Deg</p>
                                            <p className='text-2xl'>{currentData?.wind?.deg}°</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-neutral-800 py-4 px-8 my-6  rounded-xl md:w-1/2 tracking-wider flex items-center gap-4'>
                                <div>
                                    <p className='text-gray-400'>Temp</p>
                                    <div className='flex items-center gap-4 py-3'>
                                        <i className="fa-solid fa-arrow-down text-2xl"></i>
                                        <div>
                                            <p className='text-sm'>Min temp.</p>
                                            <p className='text-xl'>{Math.round(currentData?.main?.temp_min)} °C</p>
                                        </div>
                                        <i className="fa-solid fa-arrow-up text-2xl"></i>
                                        <div>
                                            <p className='text-sm'>Max temp.</p>
                                            <p className='text-xl'>{Math.round(currentData?.main?.temp_max)} °C</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-neutral-800 py-4 px-8 my-6 md:mx-6 rounded-xl md:w-1/2 tracking-wider'>
                                <p className='text-gray-400'>Sunrise & sunset</p>
                                <div className='flex items-center gap-10 py-3'>
                                    <div className='flex gap-4 items-center'>
                                        <i className="fa-regular fa-sun text-3xl"></i>
                                        <div className='text-sm'>
                                            <p>Sunrise</p>
                                            <p className='text-xl'>{TimeZone(currentData?.sys?.sunrise)}</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-4 items-center'>
                                        <i className="fa-regular fa-moon text-3xl"></i>
                                        <div className='text-sm'>
                                            <p>Sunset</p>
                                            <p className='text-xl'>{TimeZone(currentData?.sys?.sunset)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-4 mx-6 my-6 tracking-wider md:flex gap-6'>
                        <div className='bg-neutral-800 py-5 md:w-fit px-8 rounded-xl'>
                            <p className='text-gray-400'>Humidity</p>
                            <div className='flex gap-20 items-center py-4'>
                                <i className="fa-brands fa-drupal text-2xl"></i>
                                <p className='text-2xl font-medium'>{currentData?.main?.humidity}%</p>
                            </div>
                        </div>
                        <div className='bg-neutral-800 py-5 md:w-fit px-8 my-2 md:my-0 rounded-xl'>
                            <p className='text-gray-400'>Pressure</p>
                            <div className='flex gap-20 items-center py-4'>
                                <i className="fa-solid fa-water text-2xl"></i>
                                <p className='text-2xl font-medium'>{currentData?.main?.pressure}hPa</p>
                            </div>
                        </div>
                        <div className='bg-neutral-800 py-5 md:w-fit px-8 my-2 md:my-0 rounded-xl'>
                            <p className='text-gray-400'>Feels like</p>
                            <div className='flex gap-20 items-center py-4'>
                                <i className="fa-solid fa-temperature-quarter text-2xl"></i>
                                <p className='text-2xl font-medium'>{currentData?.main?.feels_like} °C</p>
                            </div>
                        </div>
                        <div className='bg-neutral-800 py-5 md:w-fit px-8 rounded-xl'>
                            <p className='text-gray-400'>Visibility</p>
                            <div className='flex gap-20 items-center py-4'>
                                <i className="fa-regular fa-eye text-2xl"></i>
                                <p className='text-2xl font-medium'>{currentData?.visibility / 100}km</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='py-3 font-semibold text-lg'>Today At</p>
                    <HourForecast query={searchQuery}/>
                </div>
            </div>
        </div>
    )
}

export default Body