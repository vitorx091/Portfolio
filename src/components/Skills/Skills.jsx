import Reveal from "../Reveal/Reveal";


import {
SiJavascript,
SiReact,
SiNodedotjs,
SiPostgresql,
SiGit,
SiHtml5,
SiCss,
SiDocker,
SiFirebase,
SiTailwindcss
} from "react-icons/si";


import "./Skills.css";

import skills from "../../data/skills.jsx";




export default function Skills(){



return(


<section

className="skills"

id="skills"

>


<Reveal>



<div className="skills-container">



<h2>

Minhas Skills

</h2>




<div className="skills-grid">



{

skills.map((skill,index)=>(



<div

className="skill-card"

key={index}

>


<div>

{skill.icon}

</div>



<h3>

{skill.name}

</h3>



</div>



))

}



</div>



</div>



</Reveal>



</section>



)



}