import React from "react";
import Card from "../components/Card";
import Filter from "./Filter";
import Sort from "./Sort";
import "../assets/css/CardContainer.css";

function CardContainer() {
  return (
    <div>
      <div>
        <h1 className="text-center collectionHeading">TOP COLLECTIONS</h1>
        <div className="search-filter-sort">
          <div className="navbarHomeSection2SearchContainer cardsearchoption">
            <i className="bi bi-search"></i>
            <input
              className="navbarHomeSection2SearchBar"
              type={"text"}
              placeholder="Search Collectibles"
            ></input>
          </div>
          <div className="filter-sort">
            <Filter />
            <Sort />
          </div>
        </div>
      </div>

      <div className="cardContainer">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default CardContainer;