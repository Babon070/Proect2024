import React from "react";
import Categories from "../../Components/Category/Categories";
import MainProducts from "../../Components/MainProducts/MainProducts";
import Search from "../../Components/Search/Search";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <Search />
      <Categories />
      <MainProducts/>
    </>
  );
}
