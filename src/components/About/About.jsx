import React, {useContext} from "react";
import "./Services.css";
import {themeContext} from "../../Context";
import Accordion from "react-bootstrap/Accordion";
const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="outerDiv" id="services">
      <div className="about">
        <div className="leftside">
        <h1>
        About <span>Me,</span>
      </h1>
          An enthusiastic full-stack web developer, with an ability to write
          efficient code using MERN stack. Highly proficient in building
          interactive and user-friendly websites. Hands-on experience in
          designing, developing, and maintaining projects. Looking for a role as
          a full-stack developer in an organization that promotes long term
          learning, while contributing to the organization’s end goal.
         
        </div>
     
      </div>
    </div>
  );
};

export default Services;
