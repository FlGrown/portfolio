import {Fragment} from 'react';
import {CaseStudyCard} from '../../components';
import caseStudies from '../../data/caseStudies';
import './CaseStudiesPage.css';

export const CaseStudiesPage = () => {
  return (
    <main>
      <div className="cs-page-header page-header">
        <div className="page-header-inner">
          <p className="eyebrow">Portfolio · Engineering Case Studies</p>
          <h1>
            Jorge R. Piquer<br />
            <em>Senior Front-End Engineer</em>
          </h1>
          <p className="page-header-sub">
            10+ years building scalable, high-performance web applications in healthtech and SaaS.
            Specializing in React, TypeScript, and design systems.
          </p>
          <div className="header-tags">
            {['React', 'TypeScript', 'React-Query', 'Design Systems', 'WCAG Accessibility', 'Healthtech'].map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="page-main">
        {caseStudies.map((study, i) => (
          <Fragment key={study.id}>
            <CaseStudyCard study={study} delay={0.1 + i * 0.15} />
            {i < caseStudies.length - 1 && <hr className="cs-divider" />}
          </Fragment>
        ))}
      </div>
    </main>
  );
}
