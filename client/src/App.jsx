import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import SignIn from "./components/SignInPage";
import PostPage from "./components/PostPage";
import Register from "./components/RegisterComponent";
import Users from "./components/UsersPage";

// todo:
// Layout template - UserProfile, UserTable, Listings, ListingID
// nested routes - usersID, ListingsID
// redirect to SignIn

function App() {

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/posts" element={<PostPage />} />
      <Route path="/users" element={<Users />} />
      <Route path="*" element={<PostPage />} />
    </Routes>
  );
};
export default App;