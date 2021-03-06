import { MdOutlineWorkOutline } from "react-icons/md";
import React from "react";
import { skills } from "../data";
import SkillWithIcons from "./SkillWithIcons";

export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <MdOutlineWorkOutline className="w-10 inline-block mb-4 text-4xl text-orange-accent" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 font-press-start">
                        <strong>Skills</strong>
                    </h1>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    { skills.map((skill) => (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                            <SkillWithIcons skill={skill} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}