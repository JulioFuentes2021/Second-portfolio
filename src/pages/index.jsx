import React from 'react'
import Header from '../components/header/iconHeader';
import Presentation from '../components/presentation/presentation';
import AboutMe from '../components/aboutMe';

const Index = () => {
    return (
        <div className="flex flex-col">
            <Header />
            <Presentation />
            <main>
                <AboutMe />
            </main>
        </div>
    )
}

export default Index