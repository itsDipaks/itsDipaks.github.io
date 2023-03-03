import React from 'react'
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const CourseAchivments = () => {
  return (
    <div className=' m-auto'>
           <h1 className="text-4xl  text-black sm:m-2 lg:p-4 lg:mt-4 sm:mt-14 font-semibold"  data-aos="fade-right">
           Achievements
      </h1>
      <span className="inline-block h-1 sm:w-1/12 mb-8 rounded bg-rose-500 "  data-aos="fade-left"></span>
      
        <section className="text-gray-600 body-font w-11/12 m-auto" >
  <div className=" px-2 py-8 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full " data-aos="fade-up">
        <div className="border-2 border-gray-200 px-4 py-4 rounded-lg hover:shadow-lg   drop-shadow-md shadow-current h-auto  hover:transform hover:scale-105 duration-500 ease-in-out">
        {/* <Example label="Default"> */}

      <CircularProgressbar value={70} text={`1200+`} styles={buildStyles({
          textColor: "black",
          pathColor: "tomato",
    
        })} className="text-red-500 w-24 h-24 mb-3 inline-block" />
    {/* </Example> */}
         
          <h2 className="title-font font-medium text-3xl text-gray-900">Coding</h2>
          <p className="leading-relaxed"> Hours Of Coding</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos="fade-up">
        <div className="border-2 border-gray-200 px-4 py-4 rounded-lg hover:shadow-lg   drop-shadow-md shadow-current h-auto  hover:transform hover:scale-105 duration-500 ease-in-out">
        <CircularProgressbar value={60} text={`559+`} styles={buildStyles({
          textColor: "black",
          pathColor: "tomato",
    
        })} className="text-red-500 w-24 h-24 mb-3 inline-block" />
          <h2 className="title-font font-medium text-3xl text-gray-900">DSA</h2>
          <p className="leading-relaxed">Problem Solved</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos="fade-up">
        <div className="border-2 border-gray-200 px-4 py-4 rounded-lg hover:shadow-lg   drop-shadow-md shadow-current h-auto  hover:transform hover:scale-105 duration-500 ease-in-out">
        <CircularProgressbar value={70} text={`12+`} styles={buildStyles({
          textColor: "black",
          pathColor: "tomato",
    
        })} className="text-red-500 w-24 h-24 mb-3 inline-block" />
          <h2 className="title-font font-medium text-3xl text-gray-900">Projects</h2>
          <p className="leading-relaxed">Full Stack + Mini Projects</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos="fade-up">
        <div className="border-2 border-gray-200 px-4 py-4 rounded-lg hover:shadow-lg   drop-shadow-md shadow-current h-auto  hover:transform hover:scale-105 duration-500 ease-in-out">
        <CircularProgressbar     styles={buildStyles({
          textColor: "black",
          pathColor: "tomato",
    
        })} value={80} text={`300+`} className="text-red-500 w-24 h-24 mb-3 inline-block" />
          <h2 className="title-font font-medium text-3xl text-gray-900">Soft Skill </h2>
          <p className="leading-relaxed">Hours Behavioral Traning</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default CourseAchivments