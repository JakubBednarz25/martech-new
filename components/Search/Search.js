import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import styles from "./Search.module.scss";

import Dropdown from "./Dropdown";

import { ItemsContext } from "../../utils/ItemsContext";

const Search = () => {
  const { items } = useContext(ItemsContext);
  const [query, setQuery] = useState("");
  const [searchItems, setSearchItems] = useState([]);
  const router = useRouter();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    let temp = items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchItems(temp.slice(0, 5));
  }, [query]);

  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);

  return (
    <div className={styles.search}>
      <div className={styles.departmentDropDown}>
        <p>shop departments</p> <Dropdown />
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Search products"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onSelect={() => {
            setDropdownVisible(true);
          }}
          onBlur={() => {
            if (selectedItem) {
              console.log("Hello");
              router.push(`/item/${selectedItem}`);
              setDropdownVisible(false);
            }
          }}
        />
        {dropdownVisible && (
          <ul className={styles.results}>
            {/* <li>{query}</li> */}
            {searchItems.length !== 0 ? (
              searchItems.map((searchItem) => (
                <li
                  onMouseEnter={() => {
                    setSelectedItem(searchItem.slug);
                  }}
                  onMouseLeave={() => {
                    setSelectedItem(null);
                  }}
                  key={searchItem.id}
                >
                  <img src={searchItem.image} />
                  <h3>{searchItem.name}</h3>
                  <h4>£{searchItem.price.toFixed(2).toLocaleString()}</h4>
                </li>
              ))
            ) : (
              <li>No items found which fit your query.</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
