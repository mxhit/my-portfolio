import React from "react";
import { UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";
import TestimonialBlock from "./TestimonialBlock";

export default function Testimonials() {
    return (
        <section id="testimonials">
            <div className="container px-5 py-10 mx-auto text-center">
                <UsersIcon className="w-10 inline-block mb-4 text-orange-accent" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12 font-press-start">
                    <strong>Testimonials</strong>
                </h1>
                <div className="flex flex-wrap m-4">
                    {testimonials.map(({ image, name, company, quote }) => <TestimonialBlock key={name} image={image} name={name} company={company} quote={quote} />)}
                </div>
            </div>
        </section>
    );
}