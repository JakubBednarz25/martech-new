import { useState, useEffect, useContext } from "react";
import { ItemsContext } from "../../utils/ItemsContext";
import styles from "../../styles/Shop.module.scss";

import StoreItems from "../../utils/StoreItems";

import Item from "../../components/Shop/Item";

import FilterOptions from "../../components/Shop/FilterOptions";

import AdvSearch from "../../components/Shop/AdvSearch";

export const getServerSideProps = (ctx) => {
  const { category } = ctx.query;
  console.log(category);
  if (category === "all") {
    return {
      props: {
        filteredItems: StoreItems,
      },
    };
  }
  const filteredItems = StoreItems.filter((item) => {
    return item.category === category;
  });
  return {
    props: {
      filteredItems,
    },
  };
};

const shop = ({ filteredItems }) => {
  const [filter, setFilter] = useState("default");
  const [resultsPerPage, setResultsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [items, setItems] = useState(filteredItems);
  const [viewItems, setViewItems] = useState(items);
  const [pages, setPages] = useState();

  useEffect(() => {
    console.log(page, pages);
    handleFilter();
  }, [filter]);

  useEffect(() => {
    setPages(Math.ceil(viewItems.length / resultsPerPage));
  }, [viewItems]);

  useEffect(() => {
    console.log(viewItems);
  }, [page]);

  const handleFilter = () => {
    console.log(filter);
    switch (filter) {
      case "low-high":
        setViewItems(viewItems.sort((a, b) => (a.price < b.price ? 1 : -1)));
        break;
      case "high-low":
        setViewItems(viewItems.sort((a, b) => (a.price > b.price ? 1 : -1)));
        break;
      default:
        setViewItems(viewItems);
    }
  };

  return (
    <div className={styles.shop}>
      <AdvSearch
        filteredItems={filteredItems}
        items={items}
        setViewItems={setViewItems}
        setPage={setPage}
      />
      <FilterOptions
        setFilter={setFilter}
        page={page}
        pages={pages}
        resultsPerPage={resultsPerPage}
        viewItems={viewItems}
      />
      <div className={styles.itemsContainer}>
        {viewItems
          .slice(
            Math.max(0, page * resultsPerPage),
            Math.min(items.length, page * resultsPerPage + resultsPerPage)
          )
          .map((item) => (
            <Item key={item.id} data={item} large={true} />
          ))}
      </div>
      <hr />
      <div className={styles.pageSelect}>
        <ul>
          {page !== 0 ? (
            <li
              onClick={() => {
                setPage(Math.max(0, page - 1));
              }}
            >
              {"<"}
            </li>
          ) : (
            <></>
          )}
          {Array.from(Array(pages).keys()).map((pg, indx) => {
            return (
              <li
                key={pg}
                onClick={() => {
                  setPage(indx);
                }}
                className={`${page === indx ? styles.curPage : ""}`}
              >
                {pg + 1}
              </li>
            );
          })}
          {page !== pages - 1 ? (
            <li
              onClick={() => {
                setPage(page + 1);
              }}
            >
              {">"}
            </li>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  );
};

export default shop;
