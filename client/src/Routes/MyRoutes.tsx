import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';

export default function MyRoutes() {
  return (
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signUp" element={<SignUp />} />
    {/* <Route path="/home" element={<Home />} />
    <Route path="/MyProfile" element={<MyProfile />} />
    <Route path="/MyBookmark" element={<MyBookmarks />} /> */}
  </Routes>
  )
}
