import { ResumeCTA } from "../";

import './Footer.css';

export const Footer = () => {
  return (
    <>
      <ResumeCTA />
      <footer className="site-footer">
        <p>
          <strong>Jorge R. Piquer</strong> · piquerjr@gmail.com
        </p>
        <p className="footer-note">
          All case study details are sanitized. Proprietary code, internal data, and client information have been omitted.
        </p>
      </footer>
    </>

  );
}
