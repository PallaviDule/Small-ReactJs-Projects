import React from 'react'

const Flag = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <div className='flex m-1'>
            <div className='h-10 w-10 rounded-full border overflow-hidden animate-pulse'>
                <div className="h-1/3 bg-black" />
                <div className="h-1/3 bg-red-600" />
                <div className="h-1/3 bg-yellow-400" />
            </div>
            <h1 className='font-black items-center'>German Flag</h1>
        </div>
        <div className="w-[500px] border border-gray-400">
            <div className="h-[100px] bg-black" />
            <div className="h-[100px] bg-red-600" />
            <div className="h-[100px] bg-yellow-400" />
        </div>
    </div>
  )
}

export default Flag