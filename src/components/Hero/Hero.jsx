import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import {
Send
} from "lucide-react";


import {
FaGithub,
FaLinkedin,
FaWhatsapp
} from "react-icons/fa";


import "./Hero.css";

import profile from "../../data/profile.jsx";


export default function Hero(){


return(


<section className="hero" id="inicio">


<div className="hero-container">



<motion.div

className="hero-content"

initial={{
opacity:0,
x:-50
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:.8
}}

>


<span className="hello">

👋 Olá, eu sou

</span>



<h1>

{profile.name.split(" ")[0]} <span>{profile.name.split(" ")[1]}</span>

</h1>



<h2 className="typewriter">


<TypeAnimation

sequence={[

"Desenvolvedor Full Stack",

2000,

"Desenvolvedor Node.js",

2000,

"Criador de soluções Web",

2000

]}


repeat={Infinity}

/>


</h2>




<p>

Transformo ideias em aplicações web modernas,
performáticas e escaláveis.

</p>




<div className="buttons">


<a href="#projetos">

Ver projetos →

</a>



<a className="outline"

href="#contato">

Entre em contato <Send size={16}/>

</a>


</div>




<div className="social">


<a

href="https://github.com/vitorx091"

target="_blank"

rel="noreferrer"

>

<FaGithub/>

</a>

<a

href="https://www.linkedin.com/in/jo%C3%A3o-vitor-fidelis-da-silva-4b8410233/?skipRedirect=true"

target="_blank"

rel="noreferrer"

>

<FaLinkedin/>

</a>
    
<a

href="https://wa.me/5583987943437?text=Ol%C3%A1%20Vitor%2C%20vi%20teu%20portfolio%2C%20podemos%20conversar%3F"

target="_blank"

rel="noreferrer"

>

<FaWhatsapp/>

</a>


</div>



</motion.div>





<motion.div

className="code-card"


initial={{
opacity:0,
scale:.8
}}

animate={{
opacity:1,
scale:1
}}


transition={{
duration:.8
}}


>


<pre>


<code>


const vitor = {"{"}

<br/>


&nbsp; foco:
<span>
" Desenvolver soluções "
</span>


<br/>


&nbsp; stack: [

<br/>

&nbsp;&nbsp; "React",

<br/>

&nbsp;&nbsp; "Node.js",

<br/>

&nbsp;&nbsp; "PostgreSQL"

<br/>


&nbsp; ]

<br/>


{"}"}


<br/><br/>


while(true) {"{"}

<br/>

&nbsp; aprender();

<br/>

&nbsp; construir();

<br/>

&nbsp; evoluir();

<br/>

{"}"}


</code>


</pre>



</motion.div>



</div>


</section>


)

}