import React, {useContext} from "react";
import {useState} from "react";
import {Carousel} from "react-bootstrap";
import express from "../../img/Techstacks/express.png";
import mongodb from "../../img/Techstacks/mongodb.png";
import react from "../../img/Techstacks/react.png";
import nodejs from "../../img/Techstacks/nodejs.png";
import css from "../../img/Techstacks/css3.png"
import html from "../../img/Techstacks/html-5.png"
import js from "../../img/Techstacks/js.png"
import react1 from "../../img/Techstacks/reactdi.png"
import chakra from "../../img/Techstacks/chakra-ui.png"
import mongodiv from "../../img/Techstacks/mongodbdiv.png"
import express1 from "../../img/Techstacks/expressdiv.png"
import node1 from "../../img/Techstacks/nodediv.png"


import github from "../../img/Techstacks/github..png"
import jserver from "../../img/Techstacks/jserver.png"
import git from "../../img/Techstacks/git.jpg"
import postman from "../../img/Techstacks/postman.jpg"
import npm from "../../img/Techstacks/npm.png"
import netlifiy from "../../img/Techstacks/netlifiy.png"
import redux from "../../img/Techstacks/redux.png"
import {themeContext} from "../../Context";
import reactdom from "../../img/Techstacks/routerdom.png"
import "./Experience.css";
const Techstack = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="Techstack" id="experience">
      <h1 className="title1">TechStack</h1>

      <div className="techstack_div">
        <div className="Touterdiv">
          <img src={mongodb} className="Timgs1" alt="mongodb" />
          <h2>MongoDb</h2>
        </div>
        <div className="Touterdiv">
          <img src={express1} className="Timgs1" alt="express" />
          <h2>Express</h2>
        </div>
        <div className="Touterdiv">
          <img src={react} className="Timgs1" alt="react" />
          <h2>React Js</h2>
        </div>
        <div className="Touterdiv">
          <img src={nodejs} className="Timgs1" alt="Nodejs" />
          <h2>Node JS</h2>
        </div>
      </div>



      <h1 className="title">Skills</h1>
      <h5>These are the technologies I've worked with</h5>

      <h1 className="Subtitle">Frontend Skills</h1>

      <div className="techstack_div">
        <div className="Touterdiv">
          <img src={css} className="Timgs" alt="css" />
          <h2>MongoDb</h2>
        </div>
        <div className="Touterdiv">
          <img src={html} className="Timgs" alt="html" />
          <h2>HTML</h2>
        </div>
        <div className="Touterdiv">
          <img src={js} className="Timgs" alt="js" />
          <h2>Javascript</h2>
        </div>
        <div className="Touterdiv">
          <img src={react1} className="Timgs" alt="react" />
          <h2>React JS</h2>
        </div>
        <div className="Touterdiv">
          <img src={chakra} className="Timgs" alt="chakra" />
          <h2>Node JS</h2>
        </div>

      </div>

  

      <h1 className="Subtitle">Backend Skills</h1>

 
      <div className="techstack_div">
        <div className="Touterdiv">
          <img src={mongodiv} className="Timgs" alt="mongodb" />
          <h2>MongoDb</h2>
        </div>
        <div className="Touterdiv">
          <img src={express1} className="Timgs" alt="express" />
          <h2>Express</h2>
        </div>
        <div className="Touterdiv">
          <img src={nodejs} className="Timgs" alt="Nodejs" />
          <h2>Node JS</h2>
        </div>
     
      </div>


      <h1 className="Subtitle">Tools I Used</h1>

      <div className="Toolsdiv">
        <div className="Touterdiv1">
          <img src={github} className="Timgs" alt="github" />
          <h2>MongoDb</h2>
        </div>
        <div className="Touterdiv1">
          <img src={git} className="Timgs" alt="git" />
          <h2>Express</h2>
        </div>
        <div className="Touterdiv1">
          <img src={jserver} className="Timgs" alt="jserver" />
          <h2>React Js</h2>
        </div>
        <div className="Touterdiv1">
          <img src={npm} className="Timgs" alt="npm" />
          <h2>Node JS</h2>
        </div>
        <div className="Touterdiv1">
          <img src={netlifiy} className="Timgs" alt="netlifiy" />
          <h2>Node JS</h2>
        </div>
        <div className="Touterdiv1">
          <img src={redux} className="Timgs" alt="redux" />
          <h2>Node JS</h2>
        </div>
        <div className="Touterdiv1">
          <img src={postman} className="Timgs" alt="postman" />
          <h2>Node JS</h2>
        </div>
        <div className="Touterdiv1">
          <img src={reactdom} className="Timgs" alt="react-dom" />
          <h2>React-Router-Dom</h2>
        </div>

      </div>
    </div>
  );
};

export default Techstack;
