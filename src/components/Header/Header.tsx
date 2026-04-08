import { FC } from "react";
import { NavLink } from "react-router";
import styles from "./Header.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.siteHeader}>
      <nav className={styles.siteNav}>
        <div className={styles.navInner}>
          <span className={styles.navBrand}>JRP</span>
          <div className={styles.navLinks}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Case Studies
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              About
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};
