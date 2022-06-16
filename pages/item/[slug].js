import Link from "next/link";
import { useRef, useState, useEffect, useContext } from "react";
import styles from "../../styles/Item.module.scss";

import StoreItems from "../../utils/StoreItems";

import Item from "../../components/Shop/Item";

import { CartContext } from "../../utils/CartContext.js";

export const getServerSideProps = (ctx) => {
  const { slug } = ctx.query;
  let item = StoreItems.find((si) => si.slug === slug);
  return {
    props: {
      item,
    },
  };
};

const slug = (props) => {
  const { item } = props;
  const [options, setOptions] = useState(
    item.customizations
      ? item.customizations.map((cust) => {
          return {
            name: cust.name,
            value: "",
          };
        })
      : null
  );
  const [quantity, setQuantity] = useState(1);
  const myRef = useRef(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const execScroll = () => {
    if (myRef && myRef.current) {
      myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    console.log(options);
  }, [options]);

  useEffect(() => {
    if (addedToCart) {
      execScroll();
    }
  }, [addedToCart]);

  const optionsTotal = () => {
    let total = 0;
    options.forEach((opt) => {
      if (opt.value) {
        const cust = item.customizations.find((cust) => {
          return cust.name === opt.name;
        });
        const chosen = cust.options.find((o) => {
          return o.name === opt.value;
        });
        if (chosen) {
          total += parseInt(chosen.price);
        }
      }
    });
    return total;
  };

  const addToCart = () => {
    setCart(
      cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          let q = cartItem.quantity;
          return {
            ...cartItem,
            quantity: q + quantity,
          };
        }
        return cartItem;
      })
    );
    setAddedToCart(true);
  };

  return (
    <div className={styles.item}>
      <div className={styles.main}>
        <img src={item.image} />
        <div className={styles.meta}>
          <h2>{item.name}</h2>
          <b>£{item.price.toFixed(2)}</b>
          <b>Excl. Tax: £{(item.price * 0.8).toFixed(2)}</b>
          <p>Air suspension with TUV SUD certified</p>
          <h3>Shipping & delivery</h3>
          <p>at checkout</p>
          {item.customizations ? (
            <div className={styles.inputs}>
              {item.customizations.map((cust) => {
                return (
                  <div>
                    <label>{cust.name}</label>
                    <select
                      onChange={(e) => {
                        setOptions(
                          options.map((option) => {
                            if (cust.name === option.name) {
                              console.log(e.target.value);
                              return {
                                ...option,
                                value: e.target.value,
                              };
                            }
                            return option;
                          })
                        );
                      }}
                    >
                      <option>Select option</option>
                      {cust.options.map((opt) => {
                        return <option value={opt.name}>{opt.name}</option>;
                      })}
                    </select>
                  </div>
                );
              })}
            </div>
          ) : (
            <></>
          )}
          {item.customizatons ? (
            optionsTotal() ? (
              <p>
                Total:
                <strike>£{item.price}</strike>
                <b>
                  £
                  {(
                    parseInt(item.price) + parseInt(optionsTotal().toFixed(2))
                  ).toLocaleString()}
                </b>
              </p>
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
          {!addedToCart ? (
            <div className={styles.addBasket}>
              <input
                type="number"
                min="1"
                max="10"
                value={quantity}
                onChange={(e) => {
                  setQuantity(parseInt(e.target.value));
                }}
              />
              <button
                className="redHover"
                onClick={() => {
                  addToCart();
                }}
              >
                add to basket
              </button>
            </div>
          ) : (
            <div className={styles.addedToBasket}>
              <Link href="/cart">
                <button className="redHover">view basket</button>
              </Link>
              <p>{`"${item.name}"`} has been added to your basket.</p>
            </div>
          )}
          <p>Categories: {item.category}</p>
        </div>
      </div>
      {/* <div ref={myRef}>
      </div> */}
      <div className={styles.info}>
        <ul>
          <li>Description</li>
          <li>Additional Information</li>
        </ul>
        <p>No information for this section.</p>
      </div>
      <hr />
      <div className={styles.related}>
        <h2>Related products</h2>
        <div className={styles.relatedWrapper}>
          <Item
            data={StoreItems.filter((it) => it.category === item.category)[0]}
            large={true}
          />
          <Item
            data={StoreItems.filter((it) => it.category === item.category)[1]}
            large={true}
          />
          <Item
            data={StoreItems.filter((it) => it.category === item.category)[2]}
            large={true}
          />
        </div>
      </div>
    </div>
  );
};

export default slug;
