import Link from "next/link";

import { useState, useEffect, useContext } from "react";

import { CartContext } from "../utils/CartContext";

import styles from "../styles/Cart.module.scss";

const cart = () => {
  const { cart, setCart } = useContext(CartContext);
  if (cart.reduce((prev, cur) => prev + cur.quantity, 0) === 0) {
    return (
      <div className={styles.emptyCart}>
        <p>Your basket is currently empty.</p>
        <Link href="/shop/all">
          <button className={"redHover"}>return to shop</button>
        </Link>
      </div>
    );
  }
  return (
    <div className={styles.cartPage}>
      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              if (item.quantity !== 0) {
                return (
                  <tr key={item.id}>
                    <td>
                      <label
                        onClick={() => {
                          setCart(
                            cart.map((cart_item) => {
                              if (cart_item.id === item.id) {
                                return {
                                  ...cart_item,
                                  quantity: 0,
                                };
                              }
                              return cart_item;
                            })
                          );
                        }}
                      >
                        x
                      </label>
                    </td>
                    <td>
                      <img src={item.image} alt={item.name} />
                    </td>
                    <td>{item.name}</td>
                    <td>£{item.price.toFixed(2)}</td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={item.quantity}
                        onChange={(e) => {
                          let newVal = e.target.value;
                          console.log(newVal);
                          setCart(
                            cart.map((cart_item) => {
                              if (cart_item.id === item.id) {
                                return {
                                  ...cart_item,
                                  quantity: parseInt(newVal),
                                };
                              }
                              return cart_item;
                            })
                          );
                        }}
                      />
                    </td>
                    <td>{`£${(item.price * item.quantity).toFixed(2)}`}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
      <div className={styles.subtotal}>
        <h2>Basket totals</h2>
        <div>
          <h3>Total</h3>
          <h3>{`£${cart
            .reduce((prev, cur) => {
              return prev + cur.quantity * cur.price;
            }, 0)
            .toFixed(2)}`}</h3>
        </div>
        <div>
          <h3>VAT (20%)</h3>
          <h3>{`£${(
            cart.reduce((prev, cur) => {
              return prev + cur.quantity * cur.price;
            }, 0) * 0.2
          ).toFixed(2)}`}</h3>
        </div>
        <i>The 20% VAT is included in the total.</i>
        <i>Shipping costs will be calculated at the checkout page.</i>
        <Link href="/">
          <button className={"redHover"} disabled={true}>
            proceed to checkout
          </button>
        </Link>
        <div className={styles.info}>
          <i>
            This feature is not available yet. Please instead contact us via
            email or telephone.
          </i>
          <i>martechuk85@gmail.com</i>
          <i>07715129997</i>
        </div>
      </div>
    </div>
  );
};

export default cart;
