import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md"

export default function Footer() {
    return (
        <footer className="bg-orange-accent">
            <div className="container mx-auto flex flex-row flex-nowrap gap-x-2 justify-center items-center py-4">
                <a href="https://www.linkedin.com/in/mxhit/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="w-6 h-6 text-white" />
                </a>
                <a href="https://github.com/mxhit" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-6 h-6 text-white" />
                </a>
                <a href="mailto:mohit@dodhia.in" target="_blank" rel="noopener noreferrer">
                    <MdAlternateEmail className="w-6 h-6 text-white" />
                </a>
            </div>
        </footer>
    );
}