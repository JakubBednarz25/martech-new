import { useRouter } from "next/router";
import Router from "next/router";
import { useState } from "react";
import styles from "./Dropdown.module.scss";
import SearchStyles from "./Search.module.scss";

import Link from "next/link";

const sections = [
  {
    id: 1,
    name: "Air Suspensions",
    links: [
      {
        id: 1,
        img: "https://i0.wp.com/carramba.co.uk/wp-content/uploads/IN.029.L01K-2.jpg?fit=2500%2C1667&ssl=1",
        text: "complete systems for vans and commercial vehicles",
        category: "pneumatic-system",
      },
      // {
      //   id: 2,
      //   img: "https://i0.wp.com/carramba.co.uk/wp-content/uploads/1702-1.jpg?fit=2500%2C1667&ssl=1",
      //   text: "Air belows",
      //   category: "air-suspension",
      // },
      // {
      //   id: 3,
      //   img: "https://i0.wp.com/carramba.co.uk/wp-content/uploads/IN.400-1.jpg?fit=2500%2C1667&ssl=1",
      //   text: "Air compressors & control panels",
      //   category: "air-suspension",
      // },
      // {
      //   id: 4,
      //   img: "https://i0.wp.com/carramba.co.uk/wp-content/uploads/zlaczka-1493-kolanko-1.jpg?fit=2500%2C1667&ssl=1",
      //   text: "Pneumatic parts",
      //   category: "air-suspension",
      // },
    ],
  },
];

const Dropdown = () => {
  const router = useRouter();
  const [curSection, setCurSection] = useState(1);
  return (
    <div className={`${styles.dropdown} ${SearchStyles.dropdown}`}>
      <ul className={styles.nav}>
        {sections.map((sect) => (
          <li
            key={sect.id}
            className={`${sect.id === curSection ? styles.selected : ""}`}
          >
            {sect.name}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        {sections[curSection - 1].links.map((link) => {
          return (
            <a
              key={link.id}
              onClick={() => {
                router.push(`/shop/${link.category}`).then(() => {
                  Router.reload();
                });
                // Router.reload();
              }}
            >
              <ul>
                <img src={link.img} />
                <h3>{link.text}</h3>
                <hr />
              </ul>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
