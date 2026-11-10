import { FC } from "react";
import { ResumeCTA } from "@/components";
import shared from "@/index.module.scss";
import styles from "./Footer.module.scss";

export const Footer: FC = () => {
  return (
    <>
      <ResumeCTA />
      <footer className={styles.siteFooter}>
        <div className={`${shared.container} ${styles.inner}`}>
          <p>Jorge R. Piquer · piquerjr@gmail.com</p>
          <p>
            Case studies are sanitized. Proprietary code, internal data, and
            client information have been omitted.
          </p>
        </div>
      </footer>
    </>
  );
};
