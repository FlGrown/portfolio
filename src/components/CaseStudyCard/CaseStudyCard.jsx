import React from 'react';
import './CaseStudyCard.css';

function MetaTable({ rows }) {
  return (
    <div className="meta-table">
      {rows.map(({ label, value }) => (
        <React.Fragment key={label}>
          <div className="meta-label">{label}</div>
          <div className="meta-value">{value}</div>
        </React.Fragment>
      ))}
    </div>
  );
}

function SectionTitle({ text }) {
  return <div className="section-block-title">{text}</div>;
}

function TextBlock({ section }) {
  return (
    <div className="cs-block">
      <SectionTitle text={section.title} />
      {section.paragraphs.map((p, i) => (
        <p key={i} className="cs-para">{p}</p>
      ))}
    </div>
  );
}

function BulletsBlock({ section }) {
  return (
    <div className="cs-block">
      <SectionTitle text={section.title} />
      {section.intro && <p className="cs-para">{section.intro}</p>}
      <ul className="cs-bullet-list">
        {section.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function OutcomesBlock({ section }) {
  return (
    <div className="cs-outcomes-card">
      <SectionTitle text={section.title} />
      <ul className="cs-bullet-list">
        {section.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ReflectionBlock({ section }) {
  return (
    <div className="cs-reflection">
      <SectionTitle text={section.title} />
      {section.paragraphs.map((p, i) => (
        <p key={i} className="cs-para">{p}</p>
      ))}
    </div>
  );
}

function renderSection(section, index) {
  switch (section.type) {
    case 'text':
      return <TextBlock key={index} section={section} />;
    case 'bullets':
      return <BulletsBlock key={index} section={section} />;
    case 'outcomes':
      return <OutcomesBlock key={index} section={section} />;
    case 'reflection':
      return <ReflectionBlock key={index} section={section} />;
    default:
      return null;
  }
}

export const CaseStudyCard = ({ study, delay = 0 }) => {
  return (
    <article
      className="cs-card fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="cs-number">{study.number}</div>
      <h2 className="cs-title">{study.title}</h2>
      <MetaTable rows={study.meta} />
      {study.sections.map((section, i) => renderSection(section, i))}
    </article>
  );
}
