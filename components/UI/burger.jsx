"use stylesient";

import styles from "./burger.module.css";

export default function Burger({ toggleNav, isNavOpen }) {
    return (
        <div
            className={`${styles.menu} ${styles.burger} ${
                isNavOpen ? styles.open : ""
            }`}
            onClick={toggleNav}
        >
            <div className={styles.icon}></div>
        </div>
    );
}
