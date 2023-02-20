import React from "react";
import GitHubCalendar from "react-github-calendar";
const GithubCalender = () => {
  return (
    <div className=" w-11/12 m-auto  lg:pl-44 sm:pl-2">
      <GitHubCalendar username="itsDipaks" className="w-full h-full" />
    </div>
  );
};

export default GithubCalender;
