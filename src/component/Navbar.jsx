import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.outer}>
        <h2> Deepak Mandal</h2>
        <div className={style.links}>
          <Link to="/"> home </Link>
          <Link to="/products"> Products </Link>
          <Link to="/login"> login </Link>
          <Link to="/aboutus"> Aboutus </Link>
          <Link to="/Contactus"> Contactus </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
