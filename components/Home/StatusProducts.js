import { useContext } from "react";
import styles from "./StatusProducts.module.scss";

import { ItemsContext } from "../../utils/ItemsContext.js";

import Item from "../Shop/Item";

const StatusProducts = () => {
  const { items, setItems } = useContext(ItemsContext);
  return (
    <div className={styles.statusContainer}>
      <div className={styles.column}>
        <h3>Featured Products</h3>
        <hr />
        {items
          .filter((i) => i.status === "featured")
          .map((item) => (
            <Item id={item.id} data={item} large={false} />
          ))}
      </div>
      <div className={styles.column}>
        <h3>On Sale Products</h3>
        <hr />
        {items
          .filter((i) => i.status === "sale")
          .map((item) => (
            <Item id={item.id} data={item} large={false} />
          ))}
      </div>
      <div className={styles.column}>
        <h3>Recent Products</h3>
        <hr />
        {items
          .filter((i) => i.status === "recent")
          .slice(0, 2)
          .map((item) => (
            <Item id={item.id} data={item} large={false} />
          ))}
      </div>
    </div>
  );
};

export default StatusProducts;
