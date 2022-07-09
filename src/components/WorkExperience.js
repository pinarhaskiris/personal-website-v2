import React from 'react'

const WorkExperience = ({ duration, title, place, description}) => {
  return (
    <div className='experience_item'>
        <div className='experience_item_main'><span>{ title }</span> | <span>{ place }</span></div>
        <div className='experience_item_duration'>{ duration }</div>
        <div className='experience_item_description'>{ description }</div>
    </div>
  )
}

export default WorkExperience