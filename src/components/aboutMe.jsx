import React from 'react'

const AboutMe = () => {
    return (
        <div className="m-6 sm:mx-36 flex flex-col items-center lg:flex-row p-10 justify-center gap-10">
            <article className="">
                <span className="text-textPrimary text-2xl font-bold"><span className="text-primary text-xl font-thin">01.</span> About Me</span>
                <p className="text-textSecondary max-w-[50rem]">
                    Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS! <br /><br />

                    Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.<br /><br />

                    I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.<br /><br />

                    Here are a few technologies I’ve been working with recently:
                </p>
                <ul className="text-textSecondary flex my-5 gap-20">
                    <ul className="">
                        <li className="my-5 before:content-['\2022'] before:text-primary before:mr-5 before:text-2xl">Javascript</li>
                        <li className="my-5 before:content-['\2022'] before:text-primary before:mr-5 before:text-2xl">Reatc</li>
                        <li className="my-5 before:content-['\2022'] before:text-primary before:mr-5 before:text-2xl">Node.js</li>
                    </ul>
                    <ul className="">
                        <li className="my-5 before:content-['\2022'] before:text-primary before:mr-5 before:text-2xl">Typescript</li>
                        <li className="my-5 before:content-['\2022'] before:text-primary before:mr-5 before:text-2xl">Eleventy</li>
                        <li className="my-5 before:content-['\2022'] before:text-primary before:mr-5 before:text-2xl">WordPress</li>
                    </ul>
                </ul>
            </article>
            <div className="relative">
                <img className="object-cover grayscale hover:grayscale-0 w-72 h-72 relative z-10" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="Julio Fuentes photo" />
                {/* <div className="w-72 h-72 border-2 border-primary absolute -translate-y-[90%] translate-x-10 hover:translate-x-1"></div> */}
            </div>
        </div>
    )
}

export default AboutMe