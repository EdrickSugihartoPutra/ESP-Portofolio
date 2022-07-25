import React, { useContext } from "react";
import "./toggle.css";

import light from "../../img/light.png";
import dark from "../../img/dark.png";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const clickHandler = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <img src={light} alt="" className="t-icon" />
      <img src={dark} alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={clickHandler}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
