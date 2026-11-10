import { FC } from "react";
import { CaseStudyType, SectionType } from "@/types";
import { VideoPreview } from "..";
import { BulletsBlock } from "./BulletsBlock";
import { MetaTable } from "./MetaInfoTable";
import { OutcomesBlock } from "./OutcomesBlock";
import { ReflectionBlock } from "./ReflectionsBlock";
import { TextBlock } from "./TextBlock";
import styles from "./CaseStudyCard.module.scss";

interface CaseStudyCardProps {
  readonly study: CaseStudyType;
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

export const CaseStudyCard: FC<CaseStudyCardProps> = ({ study }) => {
  const { summary, stat } = study;

  return (
    <article className={styles.csCard}>
      <header className={styles.csHead}>
        <p className={styles.csMeta}>
          <span className={styles.csNumber}>{study.number}</span> ·{" "}
          {study.period} · {study.role}
        </p>
        <h3 className={styles.csTitle}>{study.title}</h3>
      </header>

      {study.video && (
        <VideoPreview label="Component Library" src={study.video} />
      )}

      <div className={styles.csBody}>
        <div className={styles.statPanel}>
          <p className={styles.statValue}>{stat.value}</p>
          <p className={styles.statLabel}>{stat.label}</p>
          <p className={styles.statStack}>{study.stack}</p>
        </div>

        <div className={styles.summary}>
          <div className={styles.summaryBlock}>
            <h4>Problem</h4>
            <p>{summary.problem}</p>
          </div>
          <div className={styles.summaryBlock}>
            <h4>What I built</h4>
            <ul>
              {summary.built.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.summaryBlock}>
            <h4>Key tradeoff</h4>
            <p>{summary.tradeoff}</p>
          </div>
          <div className={`${styles.summaryBlock} ${styles.hindsight}`}>
            <h4>In hindsight</h4>
            <p>{summary.hindsight}</p>
          </div>
        </div>
      </div>

      <details className={styles.writeup}>
        <summary>Read the full write-up</summary>
        <div className={styles.writeupBody}>
          <MetaTable rows={study.meta} />
          {study.sections.map((section, i) => renderSection(section, i))}
        </div>
      </details>
    </article>
  );
};
