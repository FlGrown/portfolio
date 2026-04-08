import { FC } from "react";
import { SectionType } from "@/types";
import { SectionTitle } from "./SectionTitle";
import styles from "./CaseStudyCard.module.scss";

interface ReflectionBlockProps {
  readonly section: SectionType;
}

export const ReflectionBlock: FC<ReflectionBlockProps> = ({ section }) => {
  return (
    <div className={styles.csReflection}>
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
