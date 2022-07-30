import React, { useContext } from 'react'
import Header from './header'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import { PortfolioContext } from '../../context/context';

const IconHeader = () => {
    const { showMenu, setShowMenu } = useContext(PortfolioContext)

    return (
        <header className="text-[2rem] text-primary w-full overflow-x-hidden">
            <div className="absolute z-10 flex justify-between items-center w-full">
                <div className="flex justify-center items-center border-r-2 border-b-2 text-primary m-[1rem] w-20 h-20 logo"><span>F</span></div>
                {!showMenu ? <MenuOpenIcon onClick={() => setShowMenu(!showMenu)} style={{ 'fontSize': '3rem', 'margin': '1rem' }} /> : <CloseIcon onClick={() => setShowMenu(!showMenu)} style={{ 'fontSize': '3rem', 'margin': '1rem' }} />}
            </div>
            <div className={`flex justify-end w-[100%] transition-{translate} ease duration-1000 ${showMenu ? 'translate-x-[0%]' : 'translate-x-[100%]'}`}>
                <Header />
            </div>
        </header>
    )
}

export default IconHeader