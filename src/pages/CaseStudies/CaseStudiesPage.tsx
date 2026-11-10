import { CaseStudyCard } from "@/components";
import caseStudies from "@/data/caseStudies";
import shared from "@/index.module.scss";
import styles from "./CaseStudiesPage.module.scss";

const skills = [
  "React",
  "TypeScript",
  "React-Query",
  "Design systems",
  "WCAG 2.1 AA",
];

export const CaseStudiesPage = () => {
  return (
    <main className={shared.container}>
      <section className={shared.hero}>
        <p className={shared.eyebrow}>
          Senior Front-End Engineer · 10+ years · Healthtech &amp; SaaS
        </p>
        <h1 className={shared.heroTitle}>
          I build fast, accessible interfaces for{" "}
          <em>complicated workflows.</em>
        </h1>
        <p className={shared.heroLead}>
          Three case studies from my work on clinical tools: claims
          adjudication, prior authorization, and the component library
          underneath them.
        </p>
        <ul className={styles.skills}>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className={shared.section}>
        <div className={shared.sectionHead}>
          <h2>Selected work</h2>
          <p className={shared.eyebrow}>
            {String(caseStudies.length).padStart(2, "0")} case studies ·
            sanitized
          </p>
        </div>
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </section>
    </main>
  );
};
