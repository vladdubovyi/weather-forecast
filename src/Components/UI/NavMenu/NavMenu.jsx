import React from "react";
import SearchSection from "../SearchSection/SearchSection";
import classes from "./NavMenu.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavMenu = ({ icon }) => {
  const navigate = useNavigate();
  const cityName = useLocation().pathname.split("/").at(-1);

  return (
    <header>
      <div className="wrapper">
        <div className={classes.headerWrapperSpace}>
          <p className={classes.headerText}>MY WEATHER</p>
          <SearchSection
            icon={icon}
            onClick={(cityName) => {
              navigate("/Day/" + cityName);
            }}
          />
        </div>
      </div>
      <div className={classes.navMenu}>
        <div className={classes.navMenuItems}>
          <Link to={"/Day/" + cityName} className={classes.navItem}>
            <p>Today</p>
          </Link>
          <Link to={"/7Day/" + cityName} className={classes.navItem}>
            <p>5-day forecast</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavMenu;
