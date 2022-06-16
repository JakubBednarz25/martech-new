import React from "react";

import styles from "../styles/Certificates.module.scss";

const certificates = () => {
  return (
    <div className={styles.certificatesPage}>
      <h1>Certificates</h1>
      <hr />
      <div className={styles.certificatesContainer}>
        <div className={styles.cert}>
          <img src={"/cert1.PNG"} />
          <h2>Pimot EN</h2>
        </div>
      </div>
    </div>
  );
};

export default certificates;
