import {Moon, Sun} from "lucide-react";

import {useContext} from "react";

import {ThemeContext} from "../../context/ThemeContext";

import "./ThemeToggle.css";



export default function ThemeToggle(){


const {theme,toggleTheme}=useContext(ThemeContext);



return(


<button

className="theme-button"

onClick={toggleTheme}

>


{
theme === "light"

?

<Sun size={22}/>

:

<Moon size={22}/>

}



</button>


)

}