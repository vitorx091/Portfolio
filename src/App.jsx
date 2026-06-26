import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App(){


return(

<div className="
min-h-screen
bg-white
dark:bg-zinc-950
transition-colors
duration-500
">


<Navbar />

<Hero/>

<About/>

<Skills/>

<Projects/>

<Contact/>

<Footer/>

</div>


)

}


export default App;