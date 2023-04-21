import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./githubstats.css";
const GithubStats = () => {
  // const username = 'Rashmiranjan117'
  //   const selectLastHalfYear = (contributions) => {
  //     const currentYear = new Date.getFullYear();
  //     const currentMonth = new Date.getMonth();
  //     const shownMonths = 10;

  //     return contributions.filter((day) => {
  //       const date = new Date(day.date);
  //       const monthOfDay = date.getMonth();

  //       return (
  //         date.getFullYear() === currentYear &&
  //         monthOfDay > currentMonth - shownMonths &&
  //         monthOfDay <= currentMonth
  //       );
  //     });
  //   };
  return (
    <section id="githubStats">
      <div className="github-calender">
        <h5>Presenting</h5>
        <h2>Github Stats</h2>
        <GitHubCalendar
          username="Rashmiranjan117"
          class="react-activity-calendar"
          style={{ margin: "auto", padding: "1rem", gap:'1.2rem'}}
          // transformData={selectLastHalfYear}
          blockSize={12}
          fontSize={9}
        ></GitHubCalendar>
      </div>
      <div className="github-stats-image">
        <img id="github-streak-stats" src="https://github-readme-stats.vercel.app/api?username=Rashmiranjan117&show_icons=true" />
      </div>
      <div className="github-stats-image">
        <img id="github-streak-stats"  src="https://github-readme-streak-stats.herokuapp.com?user=Rashmiranjan117" />
      </div>
      <div className="github-stats-image">
        <img id="github-top-langs"  src="https://github-readme-stats.vercel.app/api/top-langs?username=Rashmiranjan117" />
      </div>
    </section>
  );
};

export default GithubStats;
