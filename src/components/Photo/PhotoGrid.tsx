import { FC, ReactNode } from "react";
import { AlbumType } from "@/types";
import { PhotoSlideshow } from "./PhotoSlideshow";
import styles from "./Photo.module.scss";

interface PhotoGridProps {
  readonly albums: ReadonlyArray<AlbumType>;
  /** Optional tile shown beside the first, large slideshow. */
  readonly children?: ReactNode;
}

export const PhotoGrid: FC<PhotoGridProps> = ({ albums, children }) => {
  const [first, ...rest] = albums;

  return (
    <div className={styles.photoGrid}>
      {first && <PhotoSlideshow album={first} className={styles.feature} />}
      {children}
      {rest.map((album, i) => (
        // Stagger the tiles so they don't all change at once.
        <PhotoSlideshow
          key={album.id}
          album={album}
          startDelay={(i + 1) * 1500}
        />
      ))}
    </div>
  );
};
