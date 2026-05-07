import { FC, MouseEvent, useEffect, useRef, useState } from "react";
import styles from "./VideoPreview.module.scss";

interface VideoPreviewProps {
  readonly label: string;
  readonly src: string;
}

function PlayIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.5)" />
      <polygon points="19,14 38,24 19,34" fill="white" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <line x1="4" y1="4" x2="24" y2="24" />
      <line x1="24" y1="4" x2="4" y2="24" />
    </svg>
  );
}

export const VideoPreview: FC<VideoPreviewProps> = ({
  src,
  label = "Watch walkthrough",
}) => {
  const [open, setOpen] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const openModal = () => {
    setOpen(true);
    setTimeout(() => {
      if (modalVideoRef.current) {
        modalVideoRef.current.play();
      }
    }, 80);
  };

  const closeModal = () => {
    setOpen(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
  };

  // Close on backdrop click
  const handleBackdrop = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeModal();
  };

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div
        className={styles.videoPreview}
        onClick={openModal}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && openModal()}
        aria-label={`Open video: ${label}`}
      >
        <video
          src={src}
          className={styles.videoPreviewPlayer}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className={styles.videoPreviewOverlay}>
          <PlayIcon />
          <span className={styles.videoPreviewLabel}>{label}</span>
        </div>
      </div>

      {open && (
        <div className={styles.videoModalBackdrop} onClick={handleBackdrop}>
          <div className={styles.videoModal}>
            <button
              className={styles.videoModalClose}
              onClick={closeModal}
              aria-label="Close video"
            >
              <CloseIcon />
            </button>
            <video
              ref={modalVideoRef}
              src={src}
              className={styles.videoModalPlayer}
              controls
              playsInline
            />
          </div>
        </div>
      )}
    </>
  );
};
