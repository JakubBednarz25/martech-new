import { useState, useEffect } from "react";
import styles from "./Top.module.scss";

import Image from "next/image";

import Link from "next/link";

// const slides = [
//   {
//     id: 1,
//     content: "1",
//   },
//   {
//     id: 2,
//     content: "2",
//   },
//   {
//     id: 3,
//     content: "3",
//   },
// ];

const Top = () => {
  // const [activeSlide, setActiveSlide] = useState(slides[0]);
  // const [transition, setTransition] = useState(0);

  // useEffect(() => {
  //   setTransition(
  //     (activeSlide.id - 1) * ((window.innerWidth <= 900 ? 350 : 750) * 2)
  //   );
  // }, [activeSlide]);
  return (
    <div className={styles.top}>
      <Image
        src="/home-bg-top.jpg"
        alt="background image of air suspensions"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
};

export default Top;
