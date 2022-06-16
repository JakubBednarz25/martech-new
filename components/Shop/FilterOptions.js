import { useState, useEffect, useContext } from "react";
import styles from "./FilterOptions.module.scss";
import filters from "../../utils/Filters";

import { ItemsContext } from "../../utils/ItemsContext";

const FilterOptions = ({
  setFilter,
  page,
  pages,
  resultsPerPage,
  viewItems,
}) => {
  const { items, setItems } = useContext(ItemsContext);
  return (
    <div className={styles.filters}>
      {/* <select
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      >
        {filters.map((f) => {
          return (
            <option key={f.id} value={f.slug}>
              {f.name}
            </option>
          );
        })}
      </select> */}
      <p>{`Showing ${page * resultsPerPage + 1}-${Math.min(
        page * resultsPerPage + resultsPerPage,
        viewItems.length
      )} of ${viewItems.length} results`}</p>
    </div>
  );
};

export default FilterOptions;
