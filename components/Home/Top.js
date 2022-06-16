import { useState, useEffect } from "react";
import styles from "./Top.module.scss";

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
      {/* <div className={styles.carPartSearch}>
        <h2>parts for specific car</h2>
        <select>
          <option>Make</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <select>
          <option>Model</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <Link href="/shop">
          <button>search</button>
        </Link>
      </div>
      <div className={styles.slideShow}>
        <div
          style={{ transform: `translateX(-${transition}px)` }}
          className={styles.wrapper}
        >
          {slides.map((slide) => (
            <div key={slide.id} className={styles.slide}>
              {slide.content}
            </div>
          ))}
        </div>
        <div className={styles.radios}>
          {slides.map((radio) => (
            <input
              key={radio.id}
              type="radio"
              checked={activeSlide.id === radio.id}
              onChange={(e) => {
                console.log(e.target.checked);
                if (e.target.checked) {
                  setActiveSlide(radio);
                }
              }}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Top;
