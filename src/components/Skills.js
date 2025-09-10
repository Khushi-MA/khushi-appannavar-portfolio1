import React from "react";
import "./Skills.css";

const skills1 = [
  { name: "Angular", logo: "https://angular.io/assets/images/logos/angular/angular.svg" },
  { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
  { name: "Django", logo: "https://cdn.worldvectorlogo.com/logos/django.svg" },
  { name: "Node.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" },
  { name: "JavaScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
  { name: "HTML5", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" },
  { name: "CSS3", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" },
];

const skills4 = [
  { name: "MongoDB", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" },
  { name: "MySQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" },
  { name: "SQLite", logo: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" }
];

const skills3 = [
  { name: "Git", logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
  { name: "Pandas", logo: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg" },
  { name: "Seaborn", logo: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" },
  { name: "Selenium", logo: "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg" },
  { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "Figma", logo: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
];

const skills2 = [
  { name: "C", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
  { name: "C++", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
  { name: "Python", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { name: "R programming", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg" },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <h1>Languages and Tools</h1>
      <h2>Web Development</h2>
      <div className="skills-container">
        {skills1.map((skill, index) => (
          <div className="skill-item" key={index}>
            <img src={skill.logo} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
      <div className="skills-container">
        {skills4.map((skill, index) => (
          <div className="skill-item" key={index}>
            <img src={skill.logo} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
      <h2>Programming Languages</h2>
      <div className="skills-container">
        {skills2.map((skill, index) => (
          <div className="skill-item" key={index}>
            <img src={skill.logo} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
      <h2>Tools and Utilities</h2>
      <div className="skills-container">
        {skills3.map((skill, index) => (
          <div className="skill-item" key={index}>
            <img src={skill.logo} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
