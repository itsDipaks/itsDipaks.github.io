import React from "react";

const About = () => {
  return (
    <div className=" rounded-2xl w-11/12 m-auto  lg:p-4 lg:mt-4 sm:mt-14" id="About">
      <h1 className="text-3xl  text-black  font-semibold" data-aos="fade-right">
        About Me,
      </h1>
      <span
        className="inline-block h-1 sm:w-1/12 mb-8 rounded bg-rose-500 mt-4"
        data-aos="fade-left"
      ></span>
      <section className="text-gray-600 bg-black rounded-2xl body-font">
        <div className=" lg:px-5 lg:py-24 mx-auto sm:px-1 sm:py-8">
          <div className="xl:w-9/12 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block lg:w-8 lg:h-8 sm:w-6 sm:h-6 text-rose-400 lg:mb-8 sm:mb-2"
              viewBox="0 0 975.036 975.036"
              data-aos="zoom-in"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p
              className=" lg:text-lg text-start text-white sm:p-4 sm:text-sm"
              data-aos="fade-up"
            >
              {" "}
              <span
                className="text-rose-500 lg:text-2xl sm:text-xl"
                data-aos="fade-up"
              >
                Hey,
              </span>{" "}
              <br />
              Hellow my name is{" "}
              <span
                className="text-rose-400 lg:text-xl sm:text-lg font-bold"
                data-aos="fade-up"
              >
                Dipak Pawar
              </span>{" "}
              im An enthusiastic full-stack web developer, with an ability to
              write efficient code using MERN stack. Highly proficient in
              building interactive and user-friendly websites. Hands-on
              experience in designing, developing, and maintaining projects.
              Looking for a role as a full-stack developer in an organization
              that promotes long term learning, while contributing to the
              organization’s end goal. If you think my skills are relevant to
              your job requirements then do contact me.
            </p>
            <span className="inline-block h-1 sm:w-1/4  rounded bg-rose-500 mt-4 mb-2"></span>
            <h2 className="text-rose-400 font-medium title-font tracking-wider lg:text-xl">
              DIPAK PAWAR
            </h2>
            <p className="lg:text-md text-gray-500 sm:text-lg">
              FULL STACK WEB-DEVELOPER
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
