import { FC } from "react";
import { Link, NavLink } from "react-router";
import shared from "@/index.module.scss";
import styles from "./Header.module.scss";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;

export const Header: FC = () => {
  return (
    <header className={styles.siteHeader}>
      <div className={`${shared.container} ${styles.inner}`}>
        <Link to="/" className={styles.brand}>
          Jorge Piquer
        </Link>
        <nav className={styles.nav} aria-label="Main">
          <NavLink to="/" end className={navLinkClass}>
            Work
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <a href="#resume" className={styles.resumeLink}>
            Résumé
          </a>
        </nav>
      </div>
    </header>
  );
};
