import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [activeNavLink, setActiveNavLink] = useState("home");
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const handleNavLinkClick = (navItem) => {
    setActiveNavLink(navItem);
    setShowSideDrawer(false); // Close side drawer after clicking a link
  };

  const toggleSideDrawer = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <header className="navbar6">
      <img
        className="gr-logo-icon"
        loading="lazy"
        alt=""
        src={require("../images/GR Logo.png")}
      />
      <div className="parent-frame">
        <div className="nav-item-parent">

        <div className="burger-menu" onClick={toggleSideDrawer}>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </div>

          <div className="nav-item">
            <NavLink
              exact
              to="/"
              className={activeNavLink === "home" ? "home active" : "home"}
              onClick={() => handleNavLinkClick("home")}
            >
              HOME
            </NavLink>
            <div className={activeNavLink === "home" ? "underline" : ""} />
          </div>
          {/* <div className="nav-item1">
            <NavLink
              exact
              to="/about"
              className={activeNavLink === "about" ? "home active" : "home"}
              onClick={() => handleNavLinkClick("about")}
            >
              ABOUT
            </NavLink>
            <div className={activeNavLink === "about" ? "underline" : ""} />
          </div> */}
          {/* <div className="nav-item2">
            <NavLink
              exact
              to="/achievement"
              className={
                activeNavLink === "achievement" ? "home active" : "home"
              }
              onClick={() => handleNavLinkClick("achievement")}
            >
              ACHIEVEMENT
            </NavLink>
            <div
              className={activeNavLink === "achievement" ? "underline" : ""}
            />
          </div> */}
          <div className="nav-item3">
            <NavLink
              exact
              to="/events"
              className={activeNavLink === "events" ? "home active" : "home"}
              onClick={() => handleNavLinkClick("events")}
            >
              EVENTS
            </NavLink>
            <div className={activeNavLink === "events" ? "underline" : ""} />
          </div>
          <div className="nav-item4">
            <NavLink
              exact
              to="/team"
              className={activeNavLink === "team" ? "home active" : "home"}
              onClick={() => handleNavLinkClick("team")}
            >
              TEAM
            </NavLink>
            <div className={activeNavLink === "team" ? "underline" : ""} />
          </div>
        </div>
      </div>

      <div className={`side-drawer ${showSideDrawer ? 'open' : ''}`}>
        <div className="side-drawer-content">
          <NavLink exact to="/" onClick={() => handleNavLinkClick("home")}>
            HOME
          </NavLink>
          {/* <NavLink exact to="/about" onClick={() => handleNavLinkClick("about")}>
            ABOUT
          </NavLink> */}

          <NavLink exact to="/events" onClick={() => handleNavLinkClick("events")}>
            EVENTS
          </NavLink>
          {/* <NavLink exact to="/achievement" onClick={() => handleNavLinkClick("achievement")}>
            ACHIEVEMENT
          </NavLink>
          <NavLink exact to="/contact" onClick={() => handleNavLinkClick("contact")}>
            CONTACT
          </NavLink> */}
          <NavLink exact to="/team" onClick={() => handleNavLinkClick("team")}>
            TEAM
          </NavLink>
        </div>
      </div>

    </header>
  );
};

export default Navbar;
