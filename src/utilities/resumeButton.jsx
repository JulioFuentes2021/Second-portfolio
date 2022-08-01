import React from 'react'

const resumeButton = ({ title }) => {
    return (
        <button className="text-primary bg-btnBackground text-2xl w-40 h-16 border-2 border-primary">{title || 'Resume'}</button>
    )
}

export default resumeButton