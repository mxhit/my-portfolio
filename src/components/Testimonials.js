import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
    return (
        <section id="testimonials">
            <div className="container px-5 py-10 mx-auto text-center">
                <UsersIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-12">
                    Testimonials
                </h1>
                <div className="flex flex-wrap m-4">
                    { testimonials.map((testimonial) => (
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-yellow-600 bg-opacity-60 p-8 rounded">
                                {/* <TerminalIcon className="block w-8 text-gray-900 mb-4" /> */}
                                <div className="flex items-center mb-4">
                                    <img
                                        alt="testimonial"
                                        src={testimonial.image}
                                        className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                                    />
                                    <span className="flex-grow flex flex-col pl-4 text-left">
                                        <span className="title-font font-medium text-gray-900">
                                            {testimonial.name}
                                        </span>
                                        <span className="text-gray-800 italic text-sm py-1 uppercase">
                                            {testimonial.company}
                                        </span>
                                    </span>
                                </div>
                                <p className="leading-relaxed text-gray-900 text-left mb-6 italic font-serif">"{testimonial.quote}"</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}