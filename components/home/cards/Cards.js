import { useState, useContext } from "react";

// Components
import Card from "./Card";

// Context
import { NFTBayContext } from "../../../context/NFTBayContext";

// Styles

const styles = {
  grid: "w-full grid grid-cols-2 lg:grid-cols-3 gap-14",
};

const Cards = () => {
  const assets = [
    {
      id: 1,
      name: "A cool NFT",
      price: 4.5,
    },
    {
      id: 2,
      name: "The world's best painting",
      price: 2,
      src: "https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374",
    },
    {
      id: 3,
      name: "Cool thing",
      price: 1,
      src: "https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374",
    },
    {
      id: 4,
      name: "A cool NFT",
      price: 4.5,
    },
    {
      id: 5,
      name: "The world's best painting",
      price: 2,
      src: "https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374",
    },
    {
      id: 6,
      name: "Cool thing",
      price: 1,
      src: "https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374",
    },
  ];

  return (
    <div className={styles.grid}>
      {assets.map((asset, index) => (
        <Card asset={asset} key="index" />
      ))}
    </div>
  );
};

export default Cards;
