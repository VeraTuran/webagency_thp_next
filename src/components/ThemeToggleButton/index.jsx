import React, { useContext } from "react";
import { ThemeContext } from "Context/ThemeContext";

const ToggleBtn = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div
      onClick={toggleTheme}
      className={theme ? "btn-toggle goLight" : "btn-toggle goDark"}
    >
      {theme ? "Dark" : "Light"}
    </div>
  );
};

export default ToggleBtn;
