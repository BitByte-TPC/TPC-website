import React from "react";
import styles from "./style.module.css";
import { Link, useHistory } from "react-router-dom";
import { linklist } from "../linklist";
import { logout } from "src/utils/auth/logout";
import useTokenStore from "src/store/tokenStore";

const NavLinks: React.FC = () => {
  const setToken = useTokenStore((state) => state.setToken);
  const history = useHistory();
  const styling = [
    styles.first,
    styles.sec,
    styles.third,
    styles.fourth,
    styles.fifth,
    styles.sixth,
  ];

  const handleLogout = async (url: string) => {
    const res = await logout(setToken);
    if (res) {
      history.push(url);
    }
  };
  const token = useTokenStore((state) => state.token);

  return (
    <>
      {linklist.map((e, key) => {
        if (e.loginReq) {
          if (!!token) {
            return (
              <div
                key={key}
                onClick={async () => await handleLogout(e.url)}
                className={
                  key === 0
                    ? `${styles.Link} ${styles.firstLink}`
                    : `${styles.Link}`
                }
              >
                <li className={styling[key]}>{e.name}</li>
              </div>
            );
          }
          return null;
        } else {
          return (
            <Link
              key={key}
              to={e.url}
              className={
                key === 0
                  ? `${styles.Link} ${styles.firstLink}`
                  : `${styles.Link}`
              }
            >
              <li className={styling[key]}>{e.name}</li>
            </Link>
          );
        }
      })}
    </>
  );
};

export default NavLinks;
