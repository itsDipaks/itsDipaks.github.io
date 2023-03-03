import Aos from "aos";
import { useEffect, useState } from "react";
import "./App.css";
import About from "./Components/AboutPart/About";
import CourseAchivments from "./Components/Achivments/CourseAchivments";
import Contact from "./Components/ContactPart/Contact";
import Fotter from "./Components/FotterPart/Fotter";
import Github from "./Components/GithubPart/Github";
import Home from "./Components/HomePart/Home";
import Project from "./Components/ProjectPart/Project";
import ScrolltoTop from "./Components/ScrollTop/ScrolltoTop";
import Techstack from "./Components/TechstackPart/Techstack";
import Testimonials from "./Components/TestimonialsPart/Testimonials";

function App() {

  let [preloader,setpreloader]=useState(true)

  useEffect(() => {
    setpreloader(true)
    setTimeout(()=>{
setpreloader(false)
    },2000)
    Aos.init({
      offset: 50,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div className="App">

      {preloader ? <span class="loader"></span>:<div>
      <Home />
      <ScrolltoTop/>
      <About />
      <Techstack />
      <CourseAchivments/>
      <Project />
      <Github />
      {/* <Testimonials /> */}
      <Contact />
      <Fotter />

      </div> }
   
    </div>
  );
}

export default App;
