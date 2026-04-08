import { FC, Fragment } from "react";
import { MetaInfoType } from "@/types";
import styles from "./CaseStudyCard.module.scss";

interface MetaTableProps {
  readonly rows: ReadonlyArray<MetaInfoType>;
}

export const MetaTable: FC<MetaTableProps> = ({ rows }) => {
  return (
    <div className={styles.metaTable}>
      {rows.map(({ label, value }) => (
        <Fragment key={label}>
          <div className={styles.metalabel}>{label}</div>
          <div className={styles.metaValue}>{value}</div>
        </Fragment>
      ))}
    </div>
  );
};
