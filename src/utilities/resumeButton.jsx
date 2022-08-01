import React from 'react'

const resumeButton = ({ title, width, height, size }) => {
    return (
        <button className={`text-primary bg-btnBackground ${size || 'text-2xl'} ${width || 'w-40'} ${height || 'h-16'} border-2 border-primary`}>{title || 'Resume'}</button>
    )
}

export default resumeButton