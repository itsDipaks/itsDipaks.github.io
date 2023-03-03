import React, {useRef, useState} from "react";
import FollowLinks from "./FollowLinks";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(done);
    emailjs
      .sendForm(
        "service_d6skwip",
        "template_t6fybbl",
        form.current,
        "K6vjPwff8BmnBxL1h"
      )
      .then(
        (result) => {
          setDone(true);

          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="" id="Contact">
      <h1 className="text-4xl text-black pt-8 font-semibold" data-aos="fade-right">
        Get in Touch
      </h1>
      <span
        className="inline-block h-1 sm:w-1/12 mb-8 rounded bg-rose-500 mt-4 "
        data-aos="fade-left"
      ></span>
      <section className="text-gray-600 body-font relative bg-black rounded-2xl  sm:m-2  lg:ml-24  lg:mr-24 ">
        <div className=" lg:px-4 py-4 mx-auto sm:px-1">
          <div className="flex flex-col text-center w-full mb-2">
            <FollowLinks />
            <p
              className="lg:w-2/3 mx-auto leading-relaxed text-white mb-4 text-base"
              data-aos="fade-up"
            >
              Submit the form below to get in touch with me
            </p>
          </div>

          <div className="lg:w-1/2 md:w-2/3 mx-auto p-4">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative" data-aos="fade-up">
                  <label for="name" className="leading-7 text-lg text-rose-400">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative" data-aos="fade-up">
                  <label
                    for="email"
                    className="leading-7 text-lg text-rose-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative " data-aos="fade-up">
                  <label
                    for="message"
                    className="leading-7 text-lg p-4  text-rose-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full" data-aos="fade-up">
                <button className="flex mx-auto text-white bg-rose-500 border-0 py-2 px-8 focus:outline-none hover:bg-white hover:text-black rounded text-lg">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
