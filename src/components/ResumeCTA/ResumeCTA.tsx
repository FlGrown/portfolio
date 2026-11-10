import { FC } from "react";
import shared from "@/index.module.scss";
import styles from "./ResumeCTA.module.scss";

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export const ResumeCTA: FC = () => {
  return (
    <div className={shared.container}>
      <section id="resume" className={styles.resumeCta}>
        <div className={styles.text}>
          <h2>Want the full picture?</h2>
          <p>Full work history, skills, and education in one PDF.</p>
        </div>
        <a
          href="/Jorge_Piquer_Resume.pdf"
          download
          className={styles.downloadBtn}
        >
          <DownloadIcon />
          Download résumé
        </a>
      </section>
    </div>
  );
};
