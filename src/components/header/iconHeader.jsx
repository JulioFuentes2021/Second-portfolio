import React, { useContext } from 'react'
import Header from './header'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import { PortfolioContext } from '../../context/context';
import ResumeButton from '../../utilities/resumeButton';
import { useInView } from 'react-intersection-observer';

const IconHeader = () => {
    const { showMenu, setShowMenu } = useContext(PortfolioContext)

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });

    return (
        <header className="absolute text-[2rem] text-primary w-full overflow-x-hidden">
            <div className="absolute z-10 flex justify-between items-center w-full">
                <div className="flex justify-center items-center border-r-2 border-b-2 text-primary m-[1rem] w-20 h-20 logo"><span>F</span></div>
                <div className="md:hidden">
                    {!showMenu ? <MenuOpenIcon onClick={() => setShowMenu(!showMenu)} style={{ 'fontSize': '3rem', 'margin': '1rem' }} /> : <CloseIcon onClick={() => setShowMenu(!showMenu)} style={{ 'fontSize': '3rem', 'margin': '1rem' }} />}
                </div>
                <ul className="mx-2 hidden md:flex md:flex-row flex-col items-center">
                    <li ref={ref} className={`${!inView ? '-translate-y-10 opacity-0':'-translate-y-0 opacity-1'} transition-transform-opacity ease duration-700 my-5 flex items-center text-center`}>
                        <span className="text-primary mx-3 text-[1rem]">01.</span>
                        <span className="text-textPrimary text-[1rem]">About</span>
                    </li>
                    <li ref={ref} className={`${!inView ? '-translate-y-10 opacity-0':'-translate-y-0 opacity-1'} transition-transform-opacity ease duration-700 delay-200 my-5 flex items-center text-center`}>
                        <span className="text-primary mx-3 text-[1rem]">02.</span>
                        <span className="text-textPrimary text-[1rem]">Experience</span>
                    </li>
                    <li ref={ref} className="my-5 flex items-center text-center">
                        <span className="text-primary mx-3 text-[1rem]">03.</span>
                        <span className="text-textPrimary text-[1rem]">Work</span>
                    </li>
                    <li ref={ref} className="my-5 flex items-center text-center">
                        <span className="text-primary mx-3 text-[1rem]">04.</span>
                        <span className="text-textPrimary text-[1rem]">Contact</span>
                    </li>
                    <li ref={ref} className="my-5 flex items-center text-center mx-3">
                        <ResumeButton width="w-24" height="h-12" size="text-sm" />
                    </li>
                </ul>
            </div>
            <div className={`relative flex justify-end w-[100%] transition-{translate} ease duration-1000 ${showMenu ? 'translate-x-[0%]' : 'translate-x-[100%]'}`}>
                <Header />
            </div>

            {/* <span className="textPrimary text-3xl absolute top-8 m-10">X</span> */}
            {/* <ul className="relative top-0 right-0 left-0 bottom-0 m-auto"> */}
        </header>
    )
}

export default IconHeader