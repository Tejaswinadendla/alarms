import React from "react";
import "./DisplayButton.css";

const DisplayButton = () => {
  return (
    <div className="display-container">
      <button className="display-button">
        Display
        <span className="arrow-down">▼</span>
      </button>
      <div className="dropdown-menu">
        <div className="dropdown-item">Grouping</div>
        <div className="dropdown-item">Ordering</div>
      </div>
    </div>
  );
};

export default DisplayButton;
