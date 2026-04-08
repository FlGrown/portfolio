import { FC } from "react";
import { SectionType } from "@/types";
import { SectionTitle } from "./SectionTitle";
import styles from "./CaseStudyCard.module.scss";

interface OutcomesBlockProps {
  readonly section: SectionType;
}

export const OutcomesBlock: FC<OutcomesBlockProps> = ({ section }) => {
  return (
    <div className={styles.csOutcomesCard}>
      <SectionTitle text={section.title} />
      <ul className={styles.csBulletList}>
        {section.items &&
          section.items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
};
