import React from 'react'

const Flag = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <div>
            <h1 className='font-black'>German Flag</h1>
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