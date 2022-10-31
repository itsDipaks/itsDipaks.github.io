import React from "react";
import "./git.css";
import {GithubContributions} from "react-github-graph";
import GitHubCalendar from "react-github-calendar";

const Githubstats = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 9;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <div className="gihubstats">
      <h1>Github Contributions</h1>
      <div className="stats">
        <GitHubCalendar
          username="itsDipaks"
          transformData={selectLastHalfYear}
          blockSize={18}
        />
      </div>
      <div className="graph">
        <img src="https://activity-graph.herokuapp.com/graph?username=itsdipaks&theme=rogue" />
      </div>
      <div className="gitdata">
        <img
          align="left"
          width="47%"
          src="https://github-readme-stats.vercel.app/api?username=itsDipaks&show_icons=true&theme=radical"
        />
        <img
          align="right"
          width="47%"
          src="https://github-readme-streak-stats.herokuapp.com/?user=itsDipaks&theme=radical"
        />
        <img
          width="47%"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=itsDipaks&layout=compact&theme=radical"
        />
      </div>
    </div>
  );
};

export default Githubstats;
