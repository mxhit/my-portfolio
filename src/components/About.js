import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left
                    mb:16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-accent">Hello!</h1>
                    <p className="mb-2 leading-relaxed">
                        I'm a Software Engineer currently working at <a href="https://www.infosys.com/" className="text-orange-accent" target="_blank" rel="noopener noreferrer">Infosys</a>.
                    </p>
                    <p className="mb-8 leading-relaxed">
                        I enjoy working on Backend and have recently taken a liking towards Frontend development.
                    </p>

                </div>
                <div className="lg:max-w-sm lg:w-sm md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded-full"
                        alt="hero"
                        src="./img/my-avatar-compressed.png">
                    </img>
                </div>
            </div>
        </section>
    );
}