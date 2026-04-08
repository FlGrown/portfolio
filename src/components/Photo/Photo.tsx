import { FC } from "react";
import { PhotoProps } from "@/types";
import styles from "./Photo.module.scss";

export const Photo: FC<PhotoProps> = ({ src, alt = "Jorge Piquer" }) => {
  return (
    <div className={styles.profilePhotoWrap}>
      <img src={src} alt={alt} className={styles.profilePhoto} />
    </div>
  );
};
