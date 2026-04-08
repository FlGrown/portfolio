import { FC } from "react";
import { SectionType } from "@/types";
import { SectionTitle } from "./SectionTitle";
import styles from "./CaseStudyCard.module.scss";

interface BulletsBlockProps {
  readonly section: SectionType;
}

export const BulletsBlock: FC<BulletsBlockProps> = ({ section }) => {
  return (
    <div className={styles.csBlock}>
      <SectionTitle text={section.title} />
      {section.intro && <p className={styles.csPara}>{section.intro}</p>}
      <ul className={styles.csBulletList}>
        {section.items &&
          section.items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
};
