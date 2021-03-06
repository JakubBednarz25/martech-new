import React from "react";

import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

import styles from "../styles/Gallery.module.scss";

import Image from "next/image";

const gallery = () => {
  return (
    <div className={styles.galleryPage}>
      <h1>Gallery</h1>
      <hr />
      <SimpleReactLightbox>
        <SRLWrapper>
          <div className={styles.imagesContainer}>
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21,
            ].map((n) => (
              <a key={n} href={`/gallery/${n}.jpg`}>
                <Image
                  src={`/gallery/${n}.jpg`}
                  alt={`${n}-image`}
                  width={300}
                  height={250}
                />
              </a>
            ))}
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </div>
  );
};

export default gallery;
