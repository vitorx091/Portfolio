import perfil from "../../assets/images/perfil.png";
import Reveal from "../Reveal/Reveal";

import {
Code2,
Rocket,
BookOpen
} from "lucide-react";


import "./About.css";



export default function About(){


return(


<section 

className="about"

id="sobre"

>



<Reveal>



<div className="about-container">



<div className="about-text">



<h2>

Sobre mim

</h2>




<p>

Sou desenvolvedor em constante evolução, com foco na criação de aplicações funcionais, bem estruturadas e pensadas para resolver problemas reais.

</p>




<p>

Gosto de entender como as coisas funcionam por trás das telas, transformar ideias em código e construir soluções que unam organização, desempenho e uma boa experiência para quem utiliza.

</p>





<div className="about-cards">



<div className="about-card">


<Code2/>


<h3>

Desenvolvimento

</h3>


<span>

Criando sistemas modernos

</span>


</div>






<div className="about-card">


<Rocket/>


<h3>

Evolução

</h3>


<span>

Sempre buscando melhorar

</span>


</div>






<div className="about-card">


<BookOpen/>


<h3>

Aprendizado

</h3>


<span>

Novas tecnologias

</span>


</div>



</div>



</div>







<div className="about-image">


<div className="image-box">



<img

src={perfil}

alt="perfil"

/>



</div>


</div>





</div>



</Reveal>




</section>


)

}
