import React from 'react'
import Header from './header'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const IconHeader = () => {
    return (
        <header className="text-[2rem] text-primary w-full overflow-x-hidden">
            <div className="absolute z-10 flex justify-between items-center w-full">
                <span className="m-[1rem]">Icon</span>
                <MenuOpenIcon style={{ 'fontSize': '3rem', 'margin': '1rem' }} className="" />
            </div>
            <div className="flex justify-end w-[100%] translate-x-[100%]">
                <Header />
            </div>
        </header>
    )
}

export default IconHeader