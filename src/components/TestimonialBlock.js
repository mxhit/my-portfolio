import React from "react";

const TestimonialBlock = ({ image, name, company, quote }) => {
    return (
        <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-orange-accent bg-opacity-80 p-8 rounded">
                <div className="flex items-center mb-4">
                    <img
                        alt="testimonial"
                        src={image}
                        className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4 text-left">
                        <span className="title-font font-medium text-white">
                            <strong>{name}</strong>
                        </span>
                        <span className="text-white italic text-sm py-1 uppercase">
                            {company}
                        </span>
                    </span>
                </div>
                <p className="leading-relaxed text-white text-left mb-6 italic">
                    "{quote}"
                </p>
            </div>
        </div>
    );
};

export default TestimonialBlock;