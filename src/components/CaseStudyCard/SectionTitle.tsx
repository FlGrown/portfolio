import { FC } from "react";
import styles from "./CaseStudyCard.module.scss";

interface SectionTitleProps {
  readonly text: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({ text }) => {
  return <div className={styles.sectionBlockTitle}>{text}</div>;
};
