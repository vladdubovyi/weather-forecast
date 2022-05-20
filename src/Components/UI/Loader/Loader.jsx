import React from "react";
import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes.loaredWrapper}>
      <div className={classes.loader}></div>
    </div>
  );
};

export default Loader;
