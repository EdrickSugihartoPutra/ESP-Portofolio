import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "./project.css";

const Project = ({ img, link, caption }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div style={{ borderColor: !darkMode && "#333" }} className="project">
        <div className="p-browser">
          <div className="p-circle-1"></div>
          <div className="p-circle-2"></div>
          <div className="p-circle-3"></div>
          <p style={{ color: darkMode && "#333" }} className="p-caption">
            {caption}
          </p>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="project-img" />
        </a>
      </div>
    </>
  );
};

export default Project;
