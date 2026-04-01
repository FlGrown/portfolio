import React from 'react';
import './Footer.css';
import { ResumeCTA } from "../ResumeCTA/ResumeCTA";

export const Footer = () => {
  return (
    <>
      <ResumeCTA />
      <footer className="site-footer">
        <p>
          <strong>Jorge R. Piquer</strong> · piquerjr@gmail.com · (407) 474-2777
        </p>
        <p className="footer-note">
          All case study details are sanitized. Proprietary code, internal data, and client information have been omitted.
        </p>
      </footer>
    </>

  );
}
