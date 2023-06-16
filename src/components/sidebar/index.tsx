import React from "react";
import "./sidebar.scss";
import { sideBar } from "../../utils/sideBar";

export default function Sidebar() {
  return (
    <div className="listContainer">
      <ul>
        {sideBar.map((elm) => (
          <div className="listItem">
            <span>{elm.icon}</span>
            <li>{elm.title}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}
