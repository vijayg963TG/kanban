import React, { useEffect } from "react";
import "./header.scss";
import { logoIcon, logo_sec_arrow } from "../../constant";
import { SearchInput } from "../input/SearchInput";

export default function Header({ clname, open, setOpen }) {
  return (
    <header className={clname}>
      <div className="lt">
        <div className="lg_wrap">
          <span>
            <img src={logoIcon} alt="logo" />
          </span>
          <strong style={{ display: open && "none" }}>Project M.</strong>

          <div onClick={() => setOpen(!open)} className="ar_nv">
            <img src={logo_sec_arrow} alt="logo" />
          </div>
        </div>
      </div>
      <div className="rt">
        <SearchInput />
        <div className="header_user_del">
          <span className="notification">notify</span>
          <button className="user_del">
            <div className="srtName">JD</div>
            <span>{"John"} </span>
          </button>
          <div>DropDown</div>
        </div>
      </div>
    </header>
  );
}
