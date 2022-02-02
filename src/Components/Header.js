import React from "react";
import "./Header.css";
import punklogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png";
const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="punklogo" src={punklogo} alt="logo" />
      </div>
      <div className="searchBar">
        <div className="searchIconContainer">
          <img className="searchIcon" src={searchIcon} alt="logo" />
        </div>
        <input
          className="searchBarInput"
          type="text"
          placeholder="Collection, item or user ..."
        />
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>MarketPlace</p>
        <p>Create</p>
      </div>
      <div className="headerItems">
        <div className="themeSwitchContainer">
          <img className="themeSwitch" src={themeSwitchIcon} alt="logo" />
        </div>
      </div>
      <div className="loginButtonContainer">
          GET IN
      </div>
    </div>
  );
};

export default Header;
