import styles from './style.module.css';
import {useState} from "react";
import NavLinks from "../navLinks";

function Nav() {
    const [navState,setNavState] = useState(null);
    const openNav = () =>{
        if(navState===null)
            setNavState(styles.activeNav);
        else
            setNavState(null);
    }
  return (
    <div className={styles.container}>
        <ul className={`${styles.navContainer} ${navState}`}>
        <svg onClick={openNav} xmlns="http://www.w3.org/2000/svg" width="33" height="22" viewBox="0 0 33 22">
            <g id="Group_6" data-name="Group 6" transform="translate(-13 -13)">
                <rect id="Rectangle_1" data-name="Rectangle 1" width="33" height="4" rx="2" transform="translate(13 13)" fill="#42a9dc"/>
                <rect id="Rectangle_2" data-name="Rectangle 2" width="24" height="4" rx="2" transform="translate(13 22)" fill="#42a9dc"/>
                <rect id="Rectangle_3" data-name="Rectangle 3" width="30" height="4" rx="2" transform="translate(13 31)" fill="#42a9dc"/>
            </g>
        </svg>
          <NavLinks />
        </ul>
    </div>
  );
}

export default Nav;