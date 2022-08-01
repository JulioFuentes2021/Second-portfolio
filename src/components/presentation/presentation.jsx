import React from 'react'
import Button from '../../utilities/resumeButton';

const Presentation = () => {
    return (
        <div className="m-6 sm:mx-36 md:mx-48 flex flex-col text-left my-48 text-primary">
            <span className="text-2xl">Hi, my name is</span>
            <h1 className="mt-5 mb-4 font-bold text-textPrimary title">Julio Fuentes</h1>
            <span className="mb-5 font-bold text-textSecondary title">Backend developer</span>
            <small className="text-textSecondary text-xl max-w-[35rem]">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</small>
            <div className="my-8">
                <Button />
            </div>
        </div>
    )
}

export default Presentation