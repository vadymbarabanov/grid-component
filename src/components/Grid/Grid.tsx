import React, { FC, ReactNode } from "react";
import styles from "./Grid.module.scss";
import cn from "classnames";

type ColsType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type GapType = "sm" | "md" | "lg";

type GridProps = {
  children: ReactNode;
  container?: boolean;
  item?: boolean;
  cols?: ColsType;
  gap?: GapType;
};

const Grid: FC<GridProps> = ({
  children,
  container = false,
  item = false,
  cols,
  gap,
}) => {
  const classNames = cn({
    [styles.Grid_container]: container,
    [styles.Grid_item]: item,
    [styles[`Grid_cols_${cols}`]]: cols ? true : false,
    [styles[`Grid_gap_${gap}`]]: gap ? true : false,
  });

  return <div className={classNames}>{children}</div>;
};

export default Grid;
