import { FC, Fragment } from "react";
import { CaseStudyType, SectionType } from "@/types";
import { BulletsBlock } from "./BulletsBlock";
import { MetaTable } from "./MetaInfoTable";
import { OutcomesBlock } from "./OutcomesBlock";
import { ReflectionBlock } from "./ReflectionsBlock";
import { TextBlock } from "./TextBlock";
import styles from "./CaseStudyCard.module.scss";

interface CaseStudyCardProps {
  readonly study: CaseStudyType;
  readonly delay: number;
}

function renderSection(section: SectionType, index: number) {
  switch (section.type) {
    case "text":
      return <TextBlock key={index} section={section} />;
    case "bullets":
      return <BulletsBlock key={index} section={section} />;
    case "outcomes":
      return <OutcomesBlock key={index} section={section} />;
    case "reflection":
      return <ReflectionBlock key={index} section={section} />;
    default:
      return null;
  }
}

export const CaseStudyCard: FC<CaseStudyCardProps> = ({ study, delay = 0 }) => {
  return (
    <article
      className={`${styles.csCard} ${styles.fadeIn}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={styles.csNumber}>{study.number}</div>
      <h2 className={styles.csTitle}>{study.title}</h2>
      <MetaTable rows={study.meta} />
      {study.sections.map((section, i) => renderSection(section, i))}
    </article>
  );
};
