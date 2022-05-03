import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md"

export default function Footer() {
    return(
        <footer className="bg-yellow-500">
            <div className="container mx-auto flex flex-row flex-nowrap gap-x-2 justify-center items-center py-4">
                <a href="https://twitter.com/mxhit" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="w-6 h-6 text-white" />
                </a>
                <a href="https://www.instagram.com/mxhit/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="w-6 h-6 text-white" />
                </a>
                <a href="https://www.linkedin.com/in/mxhit/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="w-6 h-6 text-white" />
                </a>
                <a href="https://github.com/mxhit" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-6 h-6 text-white" />
                </a>
                <a href="https://stackoverflow.com/users/6817140/mohit-dodhia" target="_blank" rel="noopener noreferrer">
                    <FaStackOverflow className="w-6 h-6 text-white" />
                </a>
                <a href="mailto:m.dodhia@outlook.com" target="_blank" rel="noopener noreferrer">
                    <MdAlternateEmail className="w-6 h-6 text-white" />
                </a>
            </div>
        </footer>
    );
}