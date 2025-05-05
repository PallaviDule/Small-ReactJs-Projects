import React, { useState } from 'react'
import { convertRomanValueToInteger } from './convert'

const RomanToInteger = () => {
    const [value, setValue] = useState('');
    const [convertedValue , setConvertedValue] = useState('');
    const convertRomanToInteger = (romNum) => {
        let romanTonumber = convertRomanValueToInteger(romNum);

        if(romanTonumber!= 0) setConvertedValue(romanTonumber);
    }

    return (
        <div className='m-auto w-100 p-4 h-100 my-4 border border-blue-200 bg-blue-100 rounded-2xl text-center flex flex-col'>
            <label className='text-xl font-bold mb-4 border-b border-b-blue-800'>Roman To Integer</label>
            <input 
                className='border border-blue-800 hover:bg-blue-50 my-2 h-10 text-center rounded-md'
                type='text'
                value = {value}
                onChange={(event) => setValue(event.target.value)}
                placeholder='Type Roman Number Here'
            />
            <button 
                className='border border-blue-800 w-30 m-auto my-5 rounded-2xl px-4 py-2 bg-blue-200 hover:bg-blue-300'
                onClick={() => convertRomanToInteger(value)}>Convert</button>
            <input 
                className='border-2 border-blue-800 my-2 h-10 disabled:bg-blue-200 text-center rounded-md'
                type='text'
                value = {convertedValue}
                onChange={(event) => setConvertedValue(event.target.value)}
                disabled = {true}
                placeholder='Converted Integer Value'
            />
        </div>
    )
}

export default RomanToInteger