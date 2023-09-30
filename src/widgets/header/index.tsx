import React from 'react';
import styles from "./styles.module.scss"
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <ul>
        <li><Link to="/">Projects</Link></li>
        <li><Link to="/">Tables</Link></li>
      </ul>
    </div>
  );
};

export default Header;