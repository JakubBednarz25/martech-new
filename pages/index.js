import styles from "../styles/Home.module.scss";

import Search from "../components/Search/Search";
import Top from "../components/Home/Top";
import PopularCategories from "../components/Home/PopularCategories";
import PopularProducts from "../components/Home/PopularProducts";
import StatusProducts from "../components/Home/StatusProducts";

export default function Home() {
  return (
    <>
      <Top />
      <PopularCategories />
      <PopularProducts />
      <StatusProducts />
    </>
  );
}
