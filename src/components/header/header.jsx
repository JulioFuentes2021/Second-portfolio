import React from 'react'
import ResumeButton from '../../utilities/resumeButton'

const Header = () => {
    return (
        // <nav className="flex justify-end items-center w-[60%] h-screen bg-primary">
        <nav className="flex justify-center items-center w-[100%] max-w-md h-screen bg-bgMenu">
            {/* <span className="textPrimary text-3xl absolute top-8 m-10">X</span> */}
            {/* <ul className="relative top-0 right-0 left-0 bottom-0 m-auto"> */}
            <ul className="flex flex-col items-center">
                <li className="my-5 flex flex-col text-center">
                    <span className="text-primary text-[1.3rem]">01.</span>
                    <span className="text-textPrimary text-[1.5rem]">About</span>
                </li>
                <li className="my-5 flex flex-col text-center">
                    <span className="text-primary text-[1.3rem]">02.</span>
                    <span className="text-textPrimary text-[1.5rem]">Experience</span>
                </li>
                <li className="my-5 flex flex-col text-center">
                    <span className="text-primary text-[1.3rem]">03.</span>
                    <span className="text-textPrimary text-[1.5rem]">Work</span>
                </li>
                <li className="my-5 flex flex-col text-center">
                    <span className="text-primary text-[1.3rem]">04.</span>
                    <span className="text-textPrimary text-[1.5rem]">Contact</span>
                </li>
                <li className="my-5 flex flex-col text-center">
                    <ResumeButton />
                </li>
            </ul>
        </nav>
    )
}

export default Header