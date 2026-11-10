import { FC } from "react";
import { Link } from "react-router";
import shared from "@/index.module.scss";
import notFound from "../../assets/404.png";
import styles from "./NotFoundPage.module.scss";

export const NotFoundPage: FC = () => {
  return (
    <main className={shared.container}>
      <section className={`${shared.hero} ${styles.notFound}`}>
        <div className={styles.notFoundText}>
          <p className={shared.eyebrow}>Error 404</p>
          <h1 className={shared.heroTitle}>
            Page <em>not found.</em>
          </h1>
          <p className={shared.heroLead}>
            The page you're looking for doesn't exist or may have been moved.
          </p>
          <div className={styles.notFoundLinks}>
            <Link
              to="/"
              className={`${styles.notFoundBtn} ${styles.notFoundBtnPrimary}`}
            >
              See my work
            </Link>
            <Link to="/about" className={styles.notFoundBtn}>
              About me
            </Link>
          </div>
        </div>
        <img
          src={notFound}
          alt="LEGO bricks spelling 404, coming apart"
          className={styles.notFoundImage}
        />
      </section>
    </main>
  );
};
