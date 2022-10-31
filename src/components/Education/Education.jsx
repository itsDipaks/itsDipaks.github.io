import React, { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
const Education = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="outerdiv" id="works">
Eductation
    </div>
  );
};

export default Education;
