import { FC, useEffect, useState } from "react";
import { AlbumType } from "@/types";
import styles from "./Photo.module.scss";

interface PhotoSlideshowProps {
  readonly album: AlbumType;
  readonly className?: string | undefined;
  /** Milliseconds between automatic slides. */
  readonly interval?: number;
  /** Milliseconds to wait before the first automatic slide. */
  readonly startDelay?: number;
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
    </svg>
  );
}

export const PhotoSlideshow: FC<PhotoSlideshowProps> = ({
  album,
  className,
  interval = 6000,
  startDelay = 0,
}) => {
  const { photos, title } = album;
  const count = photos.length;
  const [index, setIndex] = useState(0);
  // Once someone uses the arrows, the tile stops advancing on its own.
  const [userControlled, setUserControlled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (count < 2 || userControlled || hovered) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: number | undefined;
    const advance = () => setIndex((current) => (current + 1) % count);
    const start = window.setTimeout(() => {
      advance();
      timer = window.setInterval(advance, interval);
    }, startDelay + interval);

    return () => {
      window.clearTimeout(start);
      window.clearInterval(timer);
    };
  }, [count, hovered, interval, startDelay, userControlled]);

  const step = (delta: number) => {
    setUserControlled(true);
    setIndex((current) => (current + delta + count) % count);
  };

  if (count === 0) return null;

  return (
    <figure
      className={
        className ? `${styles.slideshow} ${className}` : styles.slideshow
      }
      aria-label={`${title} photos`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {photos.map((photo, i) => (
        <img
          key={photo.src}
          src={photo.src}
          alt={photo.alt || `${title} photo ${i + 1}`}
          aria-hidden={i !== index}
          loading={i === 0 ? "eager" : "lazy"}
          className={
            i === index ? `${styles.slide} ${styles.slideActive}` : styles.slide
          }
        />
      ))}

      <figcaption
        className={styles.slideCaption}
        aria-live={userControlled ? "polite" : "off"}
      >
        {title}
        {count > 1 && ` · ${index + 1} / ${count}`}
      </figcaption>

      {count > 1 && (
        <div className={styles.slideControls}>
          <button
            type="button"
            aria-label={`Previous ${title} photo`}
            onClick={() => step(-1)}
          >
            <Chevron direction="left" />
          </button>
          <button
            type="button"
            aria-label={`Next ${title} photo`}
            onClick={() => step(1)}
          >
            <Chevron direction="right" />
          </button>
        </div>
      )}
    </figure>
  );
};
