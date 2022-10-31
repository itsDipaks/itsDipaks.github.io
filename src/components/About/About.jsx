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
          learning, while contributing to the organization’s end goal. ispum is
          simpley dummy text of printing
        </div>
        <div className="rightside">
          <h1>Education</h1>
          <div>
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Full Stack Web Developer</Accordion.Header>
                <Accordion.Body >
                  <h6>Masai School ,Bangaluru</h6>
                  <span>Jan 2021 - Nov 2022</span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header >BE Mechanical Engginearing</Accordion.Header>
                <Accordion.Body>
                  <h6>GGSF College Of Engineering ,Nashik</h6>
                  <span>Feb 2018 - Sep 2021</span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Diploma Mechanical Engginearing
                </Accordion.Header>
                <Accordion.Body>
                  <h6>Amrutvahini Polytechnic Sangamner</h6>
                  <span>Jun 2014- May 2017</span>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
