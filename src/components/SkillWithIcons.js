import React from "react";
import { SiJava, SiJavascript, SiSpringboot, SiReact, SiNodedotjs, SiMysql, SiHtml5, SiCss3, SiMongodb } from "react-icons/si";
import { MdBuild } from "react-icons/md";

export default function SkillWithIcons(skillObject) {
    let skillWithIcon = null;

    switch(skillObject.skill) {
        case "Java": skillWithIcon = <SiJava className="text-white w-6 h-6 flex-shrink-0 mr-4" />;
        break;

        case 'Spring Boot': skillWithIcon = <SiSpringboot className="text-white w-6 h-6 flex-shrink-0 mr-4" />;
        break;

        case 'JavaScript': skillWithIcon = <SiJavascript className="text-white w-6 h-6 flex-shrink-0 mr-4" />;
        break;

        case 'React': skillWithIcon = <SiReact className="text-white w-6 h-6 flex-shrink-0 mr-4" />;
        break;

        case 'Node.js': skillWithIcon = <SiNodedotjs className="text-white w-6 h-6 flex-shrink-0 mr-4" />;
        break;

        case 'MySQL': skillWithIcon = <SiMysql className="text-white w-6 h-6 flex-shrink-0 mr-4" />;
        break;

        case 'HTML': skillWithIcon = <SiHtml5 className="text-white w-6 h-6 flex-shrink-0 mr-4" />;
        break;

        case 'CSS': skillWithIcon = <SiCss3 className="text-white w-6 h-6 flex-shrink-0 mr-4" />;
        break;

        case 'MongoDB': skillWithIcon = <SiMongodb className="text-white w-6 h-6 flex-shrink-0 mr-4" />;
        break;

        default: skillWithIcon = <MdBuild className="text-white w-6 h-6 flex-shrink-0 mr-4" />;
    }
    
    return(
        <div className="bg-yellow-500 rounded flex p-4 h-full items-center">
            {skillWithIcon}
            <span className="title-font font-medium text-white">
                {skillObject.skill}
            </span>
        </div>
    );
}