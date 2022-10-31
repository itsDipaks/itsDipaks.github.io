import React, {useContext, useRef, useState} from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import {themeContext} from "../../Context";
import gif from "../../img/Other/gif.gif";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mu5xtl",
        "template_m5udu2c",
        form.current,
        "VLwg1ltOWvnCYAiK_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form1" id="contact">
      {/* left side copy and paste from work section */}

      <div className="awesome">
        {/* darkMode */}
        <h1 style={{color: darkMode ? "white" : ""}}>Get in Touch</h1>
     <h5>Submit the form below to get in touch with me</h5>
      </div>

      <div className="contact-form">
        <div className="w-left">
          <img src={gif} alt="" />
        </div>
        {/* right side form */}
        <div className="c-right">
          <h1>Contact Me</h1>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              className="user"
              placeholder="Name"
            />
            <input
              type="email"
              name="user_email"
              className="user"
              placeholder="Email"
            />
            <textarea name="message" className="user" placeholder="Message" />
            <input type="submit" value="Send" className="button" />
            <span>{done && "Thanks for Contacting me"}</span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
