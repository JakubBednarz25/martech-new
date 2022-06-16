import React from "react";
import Link from "next/link";

import styles from "../styles/404.module.scss";

const FiveHundred = () => {
  return (
    <div className={styles.FourOFourContainer}>
      <h1>Hi! The page you have requested does not exist.</h1>
      <p>
        Please navigate to the{" "}
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        page and re-try.
      </p>
    </div>
  );
};

export default FiveHundred;
