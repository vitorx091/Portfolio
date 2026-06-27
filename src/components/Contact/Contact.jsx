import Reveal from "../Reveal/Reveal";

import {
Send,
Mail
} from "lucide-react";

import {
FaGithub,
FaLinkedin,
FaWhatsapp
} from "react-icons/fa";


import "./Contact.css";



export default function Contact(){


return(


<section

className="contact"

id="contato"

>


<Reveal>

<div className="contact-container">



<h2>

Vamos conversar?

</h2>



<p>

Tem algum projeto em mente?
Vamos transformar sua ideia em realidade.

</p>




<div className="contact-cards">



<a

href="https://wa.me/5583987943437?text=Ol%C3%A1%20Vitor%2C%20vi%20teu%20portfolio%2C%20podemos%20conversar%3F"

target="_blank"

rel="noreferrer"

>

<FaWhatsapp/>

<span>

WhatsApp

</span>


</a>




<a

href="https://github.com/vitorx091"

target="_blank"

rel="noreferrer"

>

<FaGithub/>

<span>

GitHub

</span>

</a>



<a

href="https://www.linkedin.com/in/jo%C3%A3o-vitor-fidelis-da-silva-4b8410233/?skipRedirect=true"

target="_blank"

rel="noreferrer"

>

<FaLinkedin/>

<span>

LinkedIn

</span>

</a>

<a
href="https://mail.google.com/mail/?view=cm&fs=1&to=vitorfidelis091@gmail.com"

target="_blank"

rel="noreferrer"
>


<Mail/>


<span>

Email

</span>


</a>




</div>


</div>
</Reveal>



</section>


)


}