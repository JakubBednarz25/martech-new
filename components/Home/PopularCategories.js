import Link from "next/link";
import { useContext } from "react";
import styles from "./PopularCategories.module.scss";

import { ItemsContext } from "../../utils/ItemsContext";
const categories = [
  // {
  //   id: 1,
  //   name: "air-suspension",
  //   image:
  //     "https://i0.wp.com/carramba.co.uk/wp-content/uploads/fog-lights.jpeg?resize=800%2C556&ssl=1",
  // },
  {
    id: 2,
    name: "pneumatic-system",
    image:
      "https://i0.wp.com/carramba.co.uk/wp-content/uploads/headlights.jpeg?resize=800%2C556&ssl=1",
  },
  // {
  //   id: 3,
  //   name: "category-3",
  //   image:
  //     "https://i0.wp.com/carramba.co.uk/wp-content/uploads/taillights.jpeg?resize=800%2C556&ssl=1",
  // },
  // {
  //   id: 4,
  //   name: "category-4",
  //   image:
  //     "https://i0.wp.com/carramba.co.uk/wp-content/uploads/grills.jpeg?resize=800%2C556&ssl=1",
  // },
];

const PopularCategories = () => {
  const { items, setItems } = useContext(ItemsContext);
  return (
    <div className={styles.popularCategories}>
      <h2>Popular categories</h2>
      <p>View a selection of our most popular categories</p>
      <div className={styles.wrapper}>
        {categories.map((category) => {
          return (
            <div key={category.id} className={styles.category}>
              <img src={category.image} />
              <Link href={`/shop/${category.name}`}>
                <button className="redHover">{category.name}</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCategories;
