import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import "./App.css";

import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import backimg from "./img/backgraund.jpg"
import Techstack from "./components/Techstack/Techstack";
import Githubstats from "./components/Github/Githubstats";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
    
      <Navbar />
      <Intro />

  
      <About />
      <Githubstats/>
      <Techstack/>

     <Projects/>

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
