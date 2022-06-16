import { useContext } from "react";

import { ItemsContext } from "../../utils/ItemsContext";

import Item from "../Shop/Item";

import styles from "./PopularProducts.module.scss";

const PopularProducts = () => {
  const { items, setItems } = useContext(ItemsContext);
  return (
    <div className={styles.popularProducts}>
      <h2>Popular products</h2>
      <p>View a selection of our most popular products</p>
      <div className={styles.wrapper}>
        {items.slice(0, 4).map((item) => (
          <Item key={item.id} data={item} large={true} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
