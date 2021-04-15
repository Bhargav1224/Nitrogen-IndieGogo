import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "./Dropdown";

export const Navbar = () => {
  const [drop, setDrop] = useState(true);
  const [page, setPage] = useState(false);
  const handledrop = () => {
    setDrop(!drop);
    setPage(!page);
  };
  return (
    <div className={styles.nav1}>
      <nav className={styles.nav}>
        <div className={styles.div1}>
          <NavLink to="/" className={styles.logo}>
            INDIEGOGO
          </NavLink>
          <NavLink to="/" className={styles.navitemleft} style={{ paddingRight: "7px" }} onClick={handledrop}>
            Explore {drop ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />}
          </NavLink>
          <NavLink to="/about" className={styles.navitemleft}>
            What we do
          </NavLink>
          {/* <FontAwesomeIcon icon={faSearch} className={styles.navitemleft} /> */}
        </div>
        <div className={styles.div2}>
          <NavLink to="/how-it-work" className={styles.navitemright}>
            For Entrepreneurs
          </NavLink>
          <NavLink to="/start-a-campaign" className={styles.navitemright1}>
            Start a campaign
          </NavLink>
          <NavLink to="/login" className={styles.navitemright}>
            Log in
          </NavLink>
          <NavLink to="/login" className={styles.navitemright}>
            Sign Up
          </NavLink>
        </div>
      </nav>
      {page ? null : <Dropdown />}
    </div>
  );
};
