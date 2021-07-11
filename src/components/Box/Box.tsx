import React, { FC, ReactNode } from "react";
import styles from "./Box.module.scss";

const Box: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={styles.Box}>{children}</div>;
};

export default Box;
