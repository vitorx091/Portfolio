import { Menu, X } from "lucide-react";
import { useState } from "react";

import ThemeToggle from "../ThemeToggle/ThemeToggle";

import "./Navbar.css";


export default function Navbar(){


const [open,setOpen] = useState(false);



return(

<header className="navbar">


<div className="nav-container">



<div className="logo">

<span>&lt;/&gt;</span>

Vitor

</div>



<nav className={open ? "nav-links active" : "nav-links"}>


<a href="#inicio">
Inicio
</a>


<a href="#sobre">
Sobre
</a>


<a href="#skills">
Skills
</a>


<a href="#projetos">
Projetos
</a>


<a href="#contato">
Contato
</a>


</nav>




<div className="actions">


<ThemeToggle />



<button

className="menu-btn"

onClick={()=>setOpen(!open)}

>


{
open

?

<X/>

:

<Menu/>

}


</button>



</div>




</div>



</header>


)

}