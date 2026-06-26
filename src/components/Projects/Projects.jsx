import Reveal from "../Reveal/Reveal";

import {
ExternalLink
} from "lucide-react";

import {
FaGithub
} from "react-icons/fa";


import "./Projects.css";

import projects from "../../data/projects.jsx";


export default function Projects(){



return(


<section

className="projects"

id="projetos"

>



<Reveal>

 <div className="projects-container">



<h2>

Meus Projetos

</h2>



<div className="projects-grid">



{

projects.map((project,index)=>(


<div

className="project-card"

key={index}

>


<img

src={project.image}

alt={project.title}

/>



<div className="project-content">



<h3>

{project.title}

</h3>



<p>

{project.description}

</p>




<div className="tags">


{

project.tech.map((item)=>(


<span key={item}>

{item}

</span>


))

}


</div>




<div className="project-links">


<a href={project.github}>

<FaGithub size={18}/>

GitHub

</a>



<a href={project.demo}>

<ExternalLink size={18}/>

Demo

</a>


</div>



</div>


</div>



))


}



</div>

</div>

</Reveal>



</section>



)

}