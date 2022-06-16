import React, { useState, useEffect, useContext } from "react";
import styles from "./AdvSearch.module.scss";

import advSearches from "../../utils/AdvSearch.js";

import { ItemsContext } from "../../utils/ItemsContext";

const AdvSearch = ({ filteredItems, setViewItems, setPage }) => {
  const [make, setMake] = useState(null);
  const [model, setModel] = useState(null);
  const { items } = useContext(ItemsContext);
  useEffect(() => {
    console.log(make);
    console.log(model);
  }, [make, model]);

  useEffect(() => {
    setModel(null);
    setPage(0);
  }, [make]);

  useEffect(() => {
    if (model) {
      console.log("BOOYAKA SHA!");
    }
  }, [model]);
  return (
    <div className={styles.advSearch}>
      <h3>
        Car parts <span>for any car</span>
      </h3>
      <div>
        <select
          onChange={(e) => {
            setMake(
              advSearches.find((a) => {
                return a.id === parseInt(e.target.value);
              })
            );
          }}
        >
          <option>Make</option>
          {advSearches.map((advs) => (
            <option key={advs.id} value={advs.id}>
              {advs.name}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => {
            if (make) {
              setModel(make.models.find((mod) => mod === e.target.value));
            }
          }}
        >
          <option>Model</option>
          {make ? (
            make.models.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))
          ) : (
            <></>
          )}
        </select>
        <button
          className="redHover"
          onClick={() => {
            // console.log(make.name, model);
            if (make && model) {
              setViewItems(
                items.filter((item) => {
                  // console.log(item.make.name, make);
                  // console.log(item.model, model);
                  console.log(
                    make.name.length,
                    item.make.length,
                    make.name,
                    item.make,
                    make.name === item.make
                  );
                  return item.make === make.name && item.model === model;
                })
              );
            } else if (make) {
              setViewItems(
                items.filter((item) => {
                  return item.make === make.name;
                })
              );
            } else {
              setViewItems(items);
            }
          }}
        >
          search
        </button>
      </div>
    </div>
  );
};

export default AdvSearch;
