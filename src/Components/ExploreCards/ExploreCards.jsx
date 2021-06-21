import React, { useState, useEffect } from "react";
import axios from "axios";

import { mockapi } from "./mockapi";
import styles from "./ExploreCards.module.css";
import { ShowExploreCards } from "./ShowExploreCards";
import { Sidebar } from "../Sidebar/Sidebar1";
import { Footer } from "../Footer/Footer";
export const ExploreCards = () => {
  const [articles, setArticles] = useState([]);
  // eslint-disable-next-line
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");

  const options = [
    {
      label: "Trending",
      value: "trending",
      id:1,
    },
    {
      label: "MostFunding",
      value: "mostfunding",
      id:2
    },
  ];

  const handleSelectFund = (e) => {
    const value = e.target.value;
    setCategory(value);
    if (value === "mostfunding") {
      axios.get(`https://mymock-server-shubham00.herokuapp.com/campaign?_sort=percentage&_order=DESC`).then((res) => {
        return setArticles(res.data);
      });
    }
  };
  const handleQuery = () => {
    axios.get(`https://mymock-server-shubham00.herokuapp.com/campaign?category=${query.toUpperCase()}`).then((res) => {
      return setArticles(res.data);
    });
  };

  const handleCategory = (input) => {
    axios.get(`https://mymock-server-shubham00.herokuapp.com/campaign?category=${input}`).then((res) => {
      return setArticles(res.data);
    });
  };

  useEffect(() => {
    mockapi().then((res) => {
      // console.log(res);
      setArticles(res.data);
    });
  }, []);

  return (
    <div>
      <div style={{ width: "100%" }}>
        <img
          width="100%"
          height="300px"
          src="https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="banner"
        />
      </div>
      <div style={{ position: "absolute", width: "300px", padding: "10px", textAlign: "center" }}>
        <Sidebar handleCategory={handleCategory} />
      </div>
      <div className={styles.inputboxexplore}>
        <input
          type="text"
          placeholder="Search for a Campaigns"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button onClick={() => handleQuery()}>Search</button>
        {/* <div style={{ float: "right", marginRight: "60px", marginTop: "15px" }}> */}
        <label>Sort By </label>
        <select onChange={handleSelectFund}>
          {options.map((option) => (
            <option key={option.id} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "45% 45% 45%",
          gridGap: "20px",
          width: "50%",
        }}
      >
        <ShowExploreCards articles={articles} />
      </div>
      <Footer />
    </div>
  );
};
