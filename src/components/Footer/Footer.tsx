import { FC } from "react";
import { ResumeCTA } from "@/components";
import styles from "./Footer.module.scss";

export const Footer: FC = () => {
  return (
    <>
      <ResumeCTA />
      <footer className={styles.siteFooter}>
        <p>
          <strong>Jorge R. Piquer</strong> · piquerjr@gmail.com
        </p>
        <p className={styles.footerNote}>
          All case study details are sanitized. Proprietary code, internal data,
          and client information have been omitted.
        </p>
      </footer>
    </>
  );
};
