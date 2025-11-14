import React from 'react'

export const HolidaysData = ({ daysData }) => {


    return (
        <div className='w-1/3 p-4 border-black-400 border-2 shadow-2xl hover:shadow-lg rounded-2xl hover:scale-105 transition-transform' >
            <div className='' >
                <div className='mb-3 ' >
                    <img src={daysData.link} alt="" className='w-100 h-80 object-cover rounded-xl ' />
                </div>
                <div className='text-left'>
                    <h1 className='text-xl'>{daysData.title}</h1>
                    <p>{daysData.description}</p>
                </div>
            </div>

        </div>
    )
}
