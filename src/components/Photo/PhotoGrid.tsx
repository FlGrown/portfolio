import { FC } from "react";
import { PhotoProps } from "@/types";
import styles from "./Photo.module.scss";

interface PhotoGridProps {
  readonly photos: ReadonlyArray<PhotoProps>;
}

export const PhotoGrid: FC<PhotoGridProps> = ({ photos = [] }) => {
  return (
    <div className={styles.photoGrid}>
      {photos.map((photo, i) => (
        <div key={i} className={styles.gridCell}>
          <div className={styles.gridPhotoWrap}>
            <img
              src={photo.src}
              alt={photo.alt || `Photo ${i + 1}`}
              className={styles.gridPhoto}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
