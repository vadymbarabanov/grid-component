import React, { FC, ReactNode } from "react";
import styles from "./Grid.module.scss";
import cn from "classnames";

type ColsType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type GapType = "sm" | "md" | "lg";
type JustifyContentType =
  | "center"
  | "space-around"
  | "space-between"
  | "flex-start"
  | "flex-end";
type AlignItemsType = "center" | "flex-start" | "flex-end";

type GridProps = {
  children: ReactNode;
  container?: boolean;
  item?: boolean;
  xs?: ColsType;
  sm?: ColsType;
  md?: ColsType;
  lg?: ColsType;
  gap?: GapType;
  justifyContent?: JustifyContentType;
  alignItems?: AlignItemsType;
} & React.HTMLAttributes<HTMLDivElement>;

const Grid: FC<GridProps> = ({
  children,
  container = false,
  item = false,
  xs,
  sm,
  md,
  lg,
  gap,
  justifyContent,
  alignItems,
  ...rest
}) => {
  const classNames = cn({
    [styles.Grid_container]: container,
    [styles.Grid_item]: item,
    [styles[`Grid_xs_${xs}`]]: xs,
    [styles[`Grid_sm_${sm}`]]: sm,
    [styles[`Grid_md_${md}`]]: md,
    [styles[`Grid_lg_${lg}`]]: lg,
    [styles[`Grid_gap_${gap}`]]: gap,
    [styles[`Grid_justifyContent_${justifyContent}`]]: justifyContent,
    [styles[`Grid_alignItems_${alignItems}`]]: alignItems,
  });

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

export default Grid;
