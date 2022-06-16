import React from "react";

import Image from "next/image";

import styles from "../styles/About.module.scss";

const about = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.historyInfo}>
        <div className={styles.historyInfoText}>
          <h1>Humble beginnings</h1>
          <p>
            Mar-Tech Logistics Ltd was founded back in 2020. During the pandemic
            the company has grown substantially, both in our customer base and
            product quality. We specialize in providing our customers with
            highly reputable Air bag suspensions, with our stock ranging from a
            variety of different builds, brands and sizes - you are guaranteed
            to find something which suits your need. Our products are checked
            manually prior to shipping, ensuring that what our customers receive
            is what they are paying for.
          </p>
        </div>
        <div className={styles.imagesContainer}>
          <Image
            src="/circle-image_1.png"
            alt="pressure meter"
            width={150}
            height={150}
          />
          <Image
            src="/circle-image_2.png"
            alt="screw for pressure meter"
            width={150}
            height={150}
          />
        </div>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13 15.9C15.2822 15.4367 17 13.419 17 11V4H7V11C7 13.419 8.71776 15.4367 11 15.9V18H9V20H15V18H13V15.9ZM9 6H15V11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11V6Z"
              fill="currentColor"
            />
            <path d="M18 6H20V11H18V6Z" fill="currentColor" />
            <path d="M6 6H4V11H6V6Z" fill="currentColor" />
          </svg>
          <p>
            We only serve products with the right certification, approved for
            selling and shipping anywhere in the UK
          </p>
        </div>
        <div className={styles.card}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.41421 16.4322L0 15.018L7.07107 7.94693L13.435 14.3109L17.6777 10.0682L15.9353 8.32587L22.6274 6.53271L20.8343 13.2248L19.0919 11.4825L13.435 17.1393L7.07107 10.7754L1.41421 16.4322Z"
              fill="currentColor"
            />
          </svg>
          <p>
            Our amazing customer service, satisfaction and product quality will
            always make you want to come back.
          </p>
        </div>
        <div className={styles.card}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
              fill="currentColor"
            />
            <path
              d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
              fill="currentColor"
            />
          </svg>
          <p>
            We have satisfied and returning customers from all over the country
          </p>
        </div>
      </div>
      <div className={styles.imageInfoLarge}>
        <div className={styles.leftText}>
          <h1>Air Springs</h1>
          <p>
            Our parts come from all over the world - from specialized
            institutions which we later craft our air suspensions from. These
            are very reputable organisations, one of them you may already know -
            Rubena. Proper testing is carried out on our supply prior to
            shipping, to ensure there are no faulty mistakes in our inventory.
            In this whole process, handling of the products is essential and you
            can count on us with it. We are certified to the industry level,
            with a lot of high-level certificates to our name.
          </p>
        </div>
        <Image src="/pillow.png" alt="rubena pillow" width={150} height={250} />
      </div>
    </div>
  );
};

export default about;
