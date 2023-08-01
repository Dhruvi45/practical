import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../component/layout/Layout";
import ProductList from "../pages/product/ProductList";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import AddProduct from "../pages/product/AddProduct";

export default function MyRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/addProduct" element={<AddProduct />} />

        {/* <Route path="/MyProfile" element={<MyProfile />} />
    <Route path="/MyBookmark" element={<MyBookmarks />} /> */}
      </Routes>
    </Layout>
  );
}
