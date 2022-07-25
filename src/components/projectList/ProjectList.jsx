import React from "react";
import "./projectList.css";
import Projects from "../projects/Project";
import { projects } from "../../data";

const ProjectList = () => {
  return (
    <>
      <div className="projectList" data-aos="fade-up">
        <div className="projectList-texts">
          <h1 className="projectList-title">My Past Projects</h1>
          <p className="projectList-desc">
            These are some of my works during my studies
          </p>
        </div>
        <div className="projectList-list" data-aos="fade-up">
          {projects.map((item) => (
            <Projects
              key={item.id}
              img={item.img}
              link={item.link}
              caption={item.caption}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectList;
