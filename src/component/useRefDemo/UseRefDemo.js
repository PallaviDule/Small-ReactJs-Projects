import React, { useRef, useState } from 'react'

const UseRefDemo = () => {
    let x = 0;
    const [yValue, setYValue] = useState(0);
    const ref = useRef(0); // ref = {current: '0'}

    const handleIncreaseX = () =>{
        x = x+1;
        console.log('Value of x:', x);
    };
    const handleIncreaseY= () => {
        setYValue(yValue+1);
        console.log('Value of x when Y increases', x);
    };
    const handleIncreaseRef= () => {
        ref.current = ref.current + 1;
        console.log('Value of Ref when Ref increases', ref.current);
    };
    console.log('Component Re-Rendering');

    return (
    <div className='my-2 p-2 w-100 h-100 m-auto border border-blue-200 text-center bg-blue-100 rounded-2xl'>
        <h1 className="text-xl mb-4  border-b border-b-blue-800">useRef() Demo</h1>
        <button 
            onClick={handleIncreaseX}
            className='bg-blue-200 rounded-2xl m-2 p-2  border border-blue-800'
        >
            Increase x
        </button>
        <h2>Let x = {x}</h2>

        <button 
            onClick={handleIncreaseY}
            className='bg-blue-200 rounded-2xl m-2 p-2  border border-blue-800'
        >
            Increase Y
        </button>
        <h2>Let Y = {yValue}</h2>

        <button 
            onClick={handleIncreaseRef}
            className='bg-blue-200 rounded-2xl m-2 p-2  border border-blue-800'
        >
            Increase Ref
        </button>
        <h2>Let ref = {ref.current}</h2>
    </div>
)
};

export default UseRefDemo