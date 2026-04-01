import { Photo, PhotoGrid } from '../../components';

import profile from '../../assets/profile-pic.jpg';

import './AboutPage.css';

export const AboutPage = () => {
  const travelModule = import.meta.glob('../../assets/travel/*.{png,jpg,jpeg,svg}', { eager: true });
  const legoModules = import.meta.glob('../../assets/lego/*.{png,jpg,jpeg,svg}', { eager: true });

  const travelPhotos = Object.values(travelModule).map((module) => {return {src: module.default, alt: ''}});
  const legoPhotos = Object.values(legoModules).map((module) => {return {src: module.default, alt: ''}});

  return (
    <main>
      <div className="page-header">
        <div className="page-header-inner">
          <p className="eyebrow">About Me</p>
          <h1>
            Jorge R. Piquer<br />
            <em>Senior Front-End Engineer</em>
          </h1>
          <p className="page-header-sub">
            Building intuitive, high-performance web products at the intersection of engineering and design.
          </p>
        </div>
      </div>

      <div className="page-main">

        {/* ── INTRO ── */}
        <section className="about-intro fade-in fade-in-1">
          <div className="about-intro-text">
            <h2 className="about-section-title">Hey, I'm Jorge.</h2>
            <p>
              I'm a Senior Front-End Engineer with over 10 years of experience building scalable,
              high-performance web applications. I specialize in React, TypeScript, and design
              systems — with a deep focus on the kind of details that make products feel genuinely
              good to use.
            </p>
            <p>
              Most of my career has been in healthtech and SaaS, where the stakes of a confusing
              UI are real. I've spent years at Capital Rx building complex clinical workflows for
              medical claims and prior authorization — and before that, building responsive,
              accessible client sites at Finalsite.
            </p>
            <p>
              I care about accessibility, performance, and getting the small things right. I'm
              equally comfortable leading architecture decisions, pairing with designers, or diving
              into a production issue at midnight.
            </p>
          </div>

          <div className="about-intro-photo">
            <Photo src={profile} />
          </div>
        </section>

        <hr className="about-divider" />

        {/* ── OUTSIDE WORK ── */}
        <section className="about-outside fade-in fade-in-2">
          <div className="about-outside-header">
            <p className="about-eyebrow">Outside of Work</p>
            <h2 className="about-section-title">Life beyond the IDE</h2>
            <p className="about-outside-body">
              When I'm not building UIs, I'm usually exploring what else life has to offer.
              I believe that a full life outside of engineering makes you a better engineer —
              it's where curiosity, creativity, and perspective come from.
            </p>
          </div>

          <PhotoGrid photos={travelPhotos} />

          <hr className="about-divider" />

          <section className="about-outside fade-in fade-in-2">
            <div className="about-outside-header">
              <p className="about-outside-body">
                At home I am a life-long LEGO fan and enjoy spending time building from many of 
                the themes they offer.
              </p>
            </div>
          </section>

          <PhotoGrid photos={legoPhotos} />
        </section>

      </div>
    </main>
  );
};
