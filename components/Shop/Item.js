import { useState, useEffect, useContext } from "react";

import styles from "./Item.module.scss";
import Link from "next/link";

import Image from "next/image";

import { CartContext } from "../../utils/CartContext";

const Item = ({ data, large }) => {
  const [loading, setLoading] = useState(false);
  const [inCart, setInCart] = useState(false);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    const inCartItem = cart.find((cartItem) => {
      return cartItem.id === data.id && cartItem.quantity;
    });
    setInCart(inCartItem);
  }, [cart]);

  const addToCart = () => {
    setLoading(true);
    setCart(
      cart.map((cartItem) => {
        if (cartItem.id === data.id) {
          let q = cartItem.quantity;
          return {
            ...cartItem,
            quantity: q + 1,
          };
        }
        return cartItem;
      })
    );
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  if (large) {
    return (
      <div className={styles.itemLarge}>
        <Image src={data.image} alt={data.name} width={300} height={225} />
        <hr />
        <Link href={`/item/${data.slug}`}>
          <h3>{data.name}</h3>
        </Link>
        <b>£{data.price.toFixed(2)}</b>
        <p>Excl. Tax: £{(data.price * 0.8).toFixed(2)}</p>
        {data.category === "pneumatic-system" ? (
          <Link href={`/item/${data.slug}`}>
            <button className="redHover">select options</button>
          </Link>
        ) : !inCart ? (
          <button className="redHover" onClick={addToCart}>
            add to basket
          </button>
        ) : (
          <Link href="/cart">
            <button className="redHover">view basket</button>
          </Link>
        )}
        {/* {JSON.stringify(data, undefined, 2)} */}
        {loading && (
          <div className={styles.loaderBg}>
            <div className={styles.loader}>
              <div className={styles.strike}></div>
            </div>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className={styles.itemSmall}>
      <Image src={data.image} alt={data.name} width={300} height={250} />
      <div className={styles.itemInfo}>
        <Link href={`/item/${data.slug}`}>
          <h3>{data.name}</h3>
        </Link>
        <b>£{data.price.toFixed(2)}</b>
        <p>
          Excl. Tax: <span>£{(data.price * 0.8).toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default Item;
