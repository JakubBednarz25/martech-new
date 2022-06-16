import React from "react";

import Image from "next/image";

import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

import styles from "../styles/Certificates.module.scss";

const certificates = () => {
  return (
    <div className={styles.certificatesPage}>
      <h1>Certificates</h1>
      <hr />
      <SimpleReactLightbox>
        <SRLWrapper>
          <div className={styles.certificatesContainer}>
            <a href="/cert1.PNG" className={styles.cert}>
              <Image
                src={"/cert1.PNG"}
                alt="Pimot EN Certificate"
                width={200}
                height={300}
              />
              <h2>Pimot EN</h2>
            </a>
            <a href="/cert1.PNG" className={styles.cert}>
              <Image
                src={"/cert2.PNG"}
                alt="Rubena Certificate"
                width={200}
                height={300}
              />
              <h2>Rubena</h2>
            </a>
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </div>
  );
};

export default certificates;
