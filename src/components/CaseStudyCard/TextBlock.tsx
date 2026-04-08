import { FC } from "react";
import { SectionType } from "@/types";
import { SectionTitle } from "./SectionTitle";
import styles from "./CaseStudyCard.module.scss";

interface TextBlockProps {
  readonly section: SectionType;
}

export const TextBlock: FC<TextBlockProps> = ({ section }) => {
  return (
    <div className={styles.csBlock}>
      <SectionTitle text={section.title} />
      {section.paragraphs &&
        section.paragraphs.map((p, i) => (
          <p key={i} className={styles.csPara}>
            {p}
          </p>
        ))}
    </div>
  );
};
