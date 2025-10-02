import React, { useState } from 'react'
import { convertRomanValueToInteger } from './convert'
import { componentMainDivStyle } from '../../css-class-constant/component-style';

const RomanToInteger = () => {
    const [value, setValue] = useState('');
    const [convertedValue, setConvertedValue] = useState('');
    const [error, setError] = useState('');

    const convertRomanToInteger = (romNum) => {
        setError('');
        setConvertedValue('');
        if (!romNum.trim()) {
            setError('Please enter a Roman numeral.');
            return;
        }
        let romanTonumber = convertRomanValueToInteger(romNum.trim().toUpperCase());
        if (romanTonumber !== 0) {
            setConvertedValue(romanTonumber);
        } else {
            setError('Invalid Roman numeral.');
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-200 via-white to-blue-100">
            {/* Header at the top, visually separated */}
            <header className="w-full flex flex-col items-center pt-10 pb-4">
                <h1 className="text-2xl font-extrabold text-blue-900 tracking-wide border-b-4 border-blue-700 p-3 mb-8 bg-white/90 rounded-xl shadow-lg max-w-xl w-full text-center">
                    Roman To Integer Converter
                </h1>
            </header>
            {/* Card below header */}
            <div className="w-full flex flex-col items-center">
                <div className="w-full max-w-lg flex flex-col items-center bg-white/80 rounded-2xl shadow-lg p-8 mt-2">
                    <input 
                        className='border-2 border-blue-400 focus:border-blue-700 focus:ring-1 focus:ring-blue-200 transition-all duration-150 my-2 h-12 w-full text-center rounded-lg text-lg shadow placeholder-gray-400 placeholder-italic'
                        type='text'
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                        placeholder='Type Roman Numeral (e.g. XIV)'
                        autoFocus
                    />
                    <button 
                        className='mt-4 mb-2 px-8 py-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-700 text-white font-semibold shadow hover:from-blue-700 hover:to-blue-400 transition-all duration-200'
                        onClick={() => convertRomanToInteger(value)}>
                        Convert
                    </button>
                    {error && (
                        <div className="text-red-600 font-medium mt-2 mb-2">{error}</div>
                    )}
                    <input 
                        className='border-2 border-blue-400 my-2 h-12 w-full text-center rounded-lg text-lg bg-blue-100 text-blue-900 font-bold shadow'
                        type='text'
                        value={convertedValue}
                        disabled
                        placeholder='Converted Integer Value'
                    />
                </div>
            </div>
        </div>
    )
}

export default RomanToInteger