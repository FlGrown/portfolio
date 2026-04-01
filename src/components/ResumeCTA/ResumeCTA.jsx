import React from 'react';

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export const ResumeCTA = () => {
  return (
    <section className="resume-cta">
      <div className="resume-cta-inner">
        <div>
          <p className="resume-cta-eyebrow">Want the full picture?</p>
          <h2>Download My Resume</h2>
          <p>10+ years of frontend engineering across healthtech and SaaS — full work history, skills, and education.</p>
        </div>
        <a href="/Jorge_Piquer_Resume.pdf" download className="download-btn">
          <DownloadIcon />
          Download Resume
        </a>
      </div>
    </section>
  );
}
