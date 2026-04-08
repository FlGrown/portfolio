import { FC } from "react";
import { Link } from "react-router";
import styles from "./NotFoundPage.module.scss";

export const NotFoundPage: FC = () => {
  return (
    <main className={styles.notFound}>
      <div className={styles.notFoundInner}>
        <div className={styles.notFoundNumber}>404</div>

        <div className={styles.notFoundImageWrap}>
          <img
            src="https://your-image-link-here.jpg"
            alt="404 illustration"
            className={styles.notFoundImage}
          />
        </div>

        <h1 className={styles.notFoundTitle}>Page not found</h1>
        <p className={styles.notFoundBody}>
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className={styles.notFoundLinks}>
          <Link
            to="/"
            className={`${styles.notFoundBtn} ${styles.notFoundBtnPrimary}`}
          >
            Case Studies
          </Link>
          <Link
            to="/about"
            className={`${styles.notFoundBtn} ${styles.notFoundBtnSecondary}`}
          >
            About
          </Link>
        </div>
      </div>
    </main>
  );
};
