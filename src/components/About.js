import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left
                    mb:16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800">
                        Hello, I'm Mohit Dodhia.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        A B.Tech graduate in Computer Science currently working at Infosys as a Systems Engineer.
                        I am also an avid Formula One enthusiast. I love talking about food, theology and consumer technology.
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