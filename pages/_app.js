import { useState, useMemo, useEffect } from "react";
import Head from "next/head";
import "../styles/globals.scss";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import { ItemsContext } from "../utils/ItemsContext.js";
import { CartContext } from "../utils/CartContext.js";

import storeItems from "../utils/StoreItems";

function MyApp({ Component, pageProps }) {
  const [items, setItems] = useState(storeItems);
  const [cart, setCart] = useState(
    typeof window !== "undefined" && localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : storeItems.map((storeItem) => {
          return {
            ...storeItem,
            quantity: 0,
          };
        })
  );

  const providerItems = useMemo(() => ({ items, setItems }), [items, setItems]);
  const providerCart = useMemo(() => {
    console.log(cart);
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    return { cart, setCart };
  }, [cart, setCart]);

  useEffect(() => {
    // console.log(storeItems);
    // let storedCart = localStorage.getItem("cart");
    // let parsedCart = JSON.parse(storedCart);
    // console.log(parsedCart);
    // setCart(parsedCart);
  }, []);

  return (
    <>
      <Head>
        <title>Mar-tech Logistics Ltd | Air Suspensions</title>
        <meta
          name="description"
          content="martech logistics, professionally made car air suspension kits, and related accessories. Air suspensions made by world class engineers"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CartContext.Provider value={providerCart}>
        <ItemsContext.Provider value={providerItems}>
          <Header />
          <div className="page">
            <Component {...pageProps} />
          </div>
          <Footer />
        </ItemsContext.Provider>
      </CartContext.Provider>
    </>
  );
}

export default MyApp;
