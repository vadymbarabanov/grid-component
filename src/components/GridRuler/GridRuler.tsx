import React from "react";
import styles from "./GridRuler.module.scss";
import cn from "classnames";

type GapType = "sm" | "md" | "lg";

const GridRuler: React.FC<{ gap?: GapType }> = ({ gap }) => {
  const classNames = cn(styles.GridRuler, {
    [styles[`GridRuler_gap_${gap}`]]: gap ? true : false,
  });

  return (
    <div className={classNames}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
        <div className={styles.GridRuler_item} key={num} />
      ))}
    </div>
  );
};

export default GridRuler;
