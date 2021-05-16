import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { linklist } from "../linklist";

const NavLinks: React.FC = () => {
  const styling = [
    styles.first,
    styles.sec,
    styles.third,
    styles.fourth,
    styles.fifth,
    styles.sixth,
  ];

  return (
    <>
      {linklist.map((e, key) => (
        <Link
          key={key}
          to={e.url}
          className={
            key === 0 ? `${styles.Link} ${styles.firstLink}` : `${styles.Link}`
          }
        >
          <li className={styling[key]}>{e.name}</li>
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
