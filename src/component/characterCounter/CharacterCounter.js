import React from 'react'
import { componentMainDivStyle } from '../../css-class-constant/component-style'

const CharacterCounter = () => {
  return (
    <div className={componentMainDivStyle}>
        <div className='text-3xl font-bold p-2 m-2'>
          <label className='border-b border-b-blue-800'>Character Counter</label>
        </div>
    </div>
  )
}

export default CharacterCounter