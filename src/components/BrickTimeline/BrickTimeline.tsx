import { FC, useEffect, useRef, useState } from "react";
import { CareerChapterType } from "@/types";
import styles from "./BrickTimeline.module.scss";

interface BrickTimelineProps {
  readonly baseplate?: string;
  readonly chapters: ReadonlyArray<CareerChapterType>;
}

export const BrickTimeline: FC<BrickTimelineProps> = ({
  baseplate,
  chapters,
}) => {
  const [pickedId, setPickedId] = useState(chapters[0]?.id);
  const [inView, setInView] = useState(false);
  const stackRef = useRef<HTMLDivElement>(null);

  // Drop the bricks in the first time the stack scrolls into view.
  useEffect(() => {
    const stack = stackRef.current;
    if (!stack || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(stack);
    return () => observer.disconnect();
  }, []);

  const picked = chapters.find((chapter) => chapter.id === pickedId);

  return (
    <div className={styles.timeline}>
      <div
        ref={stackRef}
        className={inView ? `${styles.stack} ${styles.inView}` : styles.stack}
      >
        {chapters.map((chapter, i) => {
          const isPicked = chapter.id === pickedId;
          return (
            <button
              key={chapter.id}
              type="button"
              className={`${styles.brick} ${styles[chapter.tone]} ${
                isPicked ? styles.picked : ""
              }`}
              style={{
                width: `${chapter.width}%`,
                // Bottom brick lands first.
                animationDelay: `${(chapters.length - 1 - i) * 0.12}s`,
              }}
              aria-pressed={isPicked}
              onClick={() => setPickedId(chapter.id)}
            >
              <span className={styles.years}>{chapter.years}</span>
              <span className={styles.org}>{chapter.org}</span>
            </button>
          );
        })}
        {baseplate && (
          <p className={styles.baseplate}>Baseplate · {baseplate}</p>
        )}
      </div>

      {picked && (
        <div className={styles.detail} aria-live="polite">
          <div key={picked.id} className={styles.detailInner}>
            <p className={styles.detailYears}>{picked.years}</p>
            <h3>{picked.org}</h3>
            <p className={styles.detailRole}>{picked.role}</p>
            <p className={styles.detailBody}>{picked.body}</p>
          </div>
        </div>
      )}
    </div>
  );
};
