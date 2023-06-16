import React from "react";
import "./sidebar.scss";
import { projects, sideBar } from "../../utils/sideBar";
import { addWhiteIcon } from "../../constant";

export default function Sidebar() {
  return (
    <div className="listContainer">
      <ul>
        {sideBar.map((elm) => (
          <div key={elm.title} className="listItem">
            <span>
              <img src={elm.icon} alt="icon" />
            </span>
            <li>{elm.title}</li>
          </div>
        ))}
      </ul>
      <div className="projects">
        <div className="projectHeader">
          <h4>MY PROJECTS</h4>
          <span>
            <img src={addWhiteIcon} alt="addBtn" />
          </span>
        </div>
        <ul>
          {projects.map((elm) => (
            <div
              key={elm.color}
              className={`listItem ${elm.isActive ? "active" : ""}`}
            >
              <span
                className="dot"
                style={{ backgroundColor: `${elm.color}` }}
              ></span>
              <li>{elm.title}</li>
              {elm.isActive && <span className="menuDot">...</span>}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
