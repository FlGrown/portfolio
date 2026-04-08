import profile from "../../assets/profile-pic.jpg";
import { Photo, PhotoGrid } from "../../components";
import styles from "./AboutPage.module.scss";

interface ImageModule {
  default: string;
}

export const AboutPage = () => {
  const travelModule = import.meta.glob<ImageModule>(
    "../../assets/travel/*.{png,jpg,jpeg,svg}",
    { eager: true },
  );
  const legoModules = import.meta.glob<ImageModule>(
    "../../assets/lego/*.{png,jpg,jpeg,svg}",
    { eager: true },
  );

  const travelPhotos = Object.values(travelModule).map((module) => {
    return { src: module.default, alt: "" };
  });
  const legoPhotos = Object.values(legoModules).map((module) => {
    return { src: module.default, alt: "" };
  });

  return (
    <main>
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <p className={styles.eyebrow}>About Me</p>
          <h1>
            Jorge R. Piquer
            <br />
            <em>Senior Front-End Engineer</em>
          </h1>
          <p className={styles.pageHeaderSub}>
            Building intuitive, high-performance web products at the
            intersection of engineering and design.
          </p>
        </div>
      </div>

      <div className={styles.pageMain}>
        {/* ── INTRO ── */}
        <section
          className={`${styles.aboutIntro} ${styles.fadeIn} ${styles.fadeIn1}`}
        >
          <div className={styles.aboutIntroText}>
            <h2 className={styles.aboutSectionTitle}>Hey, I'm Jorge.</h2>
            <p>
              I'm a Senior Front-End Engineer with over 10 years of experience
              building scalable, high-performance web applications. I specialize
              in React, TypeScript, and design systems — with a deep focus on
              the kind of details that make products feel genuinely good to use.
            </p>
            <p>
              Most of my career has been in healthtech and SaaS, where the
              stakes of a confusing UI are real. I've spent years at Capital Rx
              building complex clinical workflows for medical claims and prior
              authorization — and before that, building responsive, accessible
              client sites at Finalsite.
            </p>
            <p>
              I care about accessibility, performance, and getting the small
              things right. I'm equally comfortable leading architecture
              decisions, pairing with designers, or diving into a production
              issue at midnight.
            </p>
          </div>

          <div className={styles.aboutIntroPhoto}>
            <Photo src={profile} />
          </div>
        </section>

        <hr className={styles.aboutDivider} />

        {/* ── OUTSIDE WORK ── */}
        <section
          className={`${styles.aboutOutside} ${styles.fadeIn} ${styles.fadeIn2}`}
        >
          <div className={styles.aboutOutsideHeader}>
            <p className={styles.aboutEyebrow}>Outside of Work</p>
            <h2 className={styles.aboutSectionTitle}>Life beyond the IDE</h2>
            <p className={styles.aboutOutsideBody}>
              When I'm not building UIs, I'm usually exploring what else life
              has to offer. I believe that a full life outside of engineering
              makes you a better engineer — it's where curiosity, creativity,
              and perspective come from.
            </p>
          </div>

          <PhotoGrid photos={travelPhotos} />

          <hr className={styles.aboutDivider} />

          <section
            className={`${styles.aboutOutside} ${styles.fadeIn} ${styles.fadeIn2}`}
          >
            <div className={styles.aboutOutsideHeader}>
              <p className={styles.aboutOutsideBody}>
                At home I am a life-long LEGO fan and enjoy spending time
                building from many of the themes they offer.
              </p>
            </div>
          </section>

          <PhotoGrid photos={legoPhotos} />
        </section>
      </div>
    </main>
  );
};
