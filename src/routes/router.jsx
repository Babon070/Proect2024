import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Auth from "./Auth/Auth";
import Layout from "../Layout/Layout";
import NewPost from "./newPosts/NewPost";
import Like from "./Like/Like";
import Messages from "./messages/Messages";
import Basket from "./Basket/Basket";
import Category from "./category/Category";
import Search from './Search/Search'
import Product from "./Products/Product";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/newPost" element={<NewPost />} />
        <Route path="/like" element={<Like />} />
        <Route path="/message" element={<Messages />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/search/:productName" element={<Search />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/category" element={<Category />} />
      </Route>
    </Routes>
  );
}

export default Router;
